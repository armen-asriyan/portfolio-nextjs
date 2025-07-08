import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

import { RateLimiterMemory } from "rate-limiter-flexible";
const isDev = process.env.NODE_ENV === "development";

const rateLimiter = new RateLimiterMemory({
  points: 5, // 5 requests
  duration: 15 * 60, // 15 minutes (more user-friendly)
  keyPrefix: "contact-form",
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  if (body["_honey"]) {
    return Response.json({ error: "Spam detected" }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await rateLimiter.consume(ip); // Consume 1 try
    isDev && console.log(`Your ip ${ip}`);
  } catch (limitReached: any) {
    const retryAfter = Math.ceil(limitReached.msBeforeNext / 1000);

    let retryAfterMessage = `Please try again in ${retryAfter} second(s)`;

    if (retryAfter > 60) {
      retryAfterMessage = `Please try again in ${Math.ceil(
        retryAfter / 60
      )} minute(s)`;
    }

    return Response.json(
      {
        error: "Too many requests",
        retryAfter, // Seconds until reset
        message: retryAfterMessage,
      },
      {
        status: 429,
        headers: {
          "Retry-After": retryAfter.toString(),
        },
      }
    );
  }

  try {
    const { data, error } = await (isDev
      ? new Promise<{ data: unknown; error: unknown }>((resolve) =>
          setTimeout(() => {
            console.log(body);
            resolve({ data: {}, error: null });
          }, 2000)
        )
      : resend.emails.send({
          from: "Portfolio Contact Form <hi@armenasriyan.dev>",
          to: ["hi@armenasriyan.dev"],
          replyTo: `${name} <${email}>`,
          subject: `${name} - Contact Form Submission - ${email}`,
          react: EmailTemplate({ name, email, message }),
        }));

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    isDev && console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
