export default function EmailTemplate({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "24px",
          borderRadius: "10px",
          border: "1px solid #e0e0e0",
        }}
      >
        <h2
          style={{
            margin: "0 0 16px 0",
            color: "#333",
            fontWeight: 500,
            fontSize: "20px",
          }}
        >
          New message from {name}
        </h2>

        <p
          style={{
            margin: "0 0 24px 0",
            color: "#666",
            fontSize: "15px",
          }}
        >
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${email}`}
            style={{
              color: "#2563eb",
              textDecoration: "none",
            }}
          >
            {email}
          </a>
        </p>

        <div
          style={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "8px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            lineHeight: "1.5",
            fontSize: "15px",
          }}
        >
          {message}
        </div>
      </div>

      <p
        style={{
          marginTop: "16px",
          fontSize: "12px",
          color: "#999",
          textAlign: "center",
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        }}
      >
        Sent via the portfolio&apos;s contact form.
        <br />
        <br />
        <a
          href="https://www.armenasriyan.dev"
          style={{
            color: "#2563eb",
            textDecoration: "none",
          }}
        >
          armenasriyan.dev
        </a>
        &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
}
