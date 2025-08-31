"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Loader2Icon } from "lucide-react";
import { useTranslations } from "next-intl";

const isDev = process.env.NODE_ENV === "development";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  _honey: z.string().optional(),
});

export function ContactForm() {
  const t = useTranslations("contact.contact-form");

  const [submitError, setSubmitError] = useState<{
    type: "rate_limit" | "server_error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [success, setSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      _honey: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitError({ type: null, message: "" });

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 429) {
          setSubmitError({
            type: "rate_limit",
            message: data.message,
          });
          return;
        }
        throw new Error(data.error || "Something went wrong.");
      }

      setSuccess(true);

      setTimeout(() => {
        form.reset();
        form.clearErrors();
        setSuccess(false);
      }, 2000);

      return data;
    } catch (error: unknown) {
      if (isDev) {
        console.error(error);
      }
      setSubmitError({
        type: "server_error",
        message: "Something went wrong. Please try again later.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <>
              <FormItem>
                <FormLabel className="mb-1.5">{t("name")}</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. John Doe"
                    translate="no"
                    className="h-12"
                    disabled={form.formState.isSubmitting || success}
                    aria-invalid={!!fieldState.error} // Turn to boolean
                    aria-describedby={
                      fieldState.error ? "name-error" : undefined
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="mb-1.5">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  autoComplete="email"
                  placeholder="e.g. john.doe@example.com"
                  translate="no"
                  className="h-12"
                  disabled={form.formState.isSubmitting || success}
                  aria-invalid={!!fieldState.error}
                  aria-describedby={
                    fieldState.error ? "email-error" : undefined
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="mb-1.5">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("messagePlaceholder")}
                  className="resize-y h-35"
                  rows={4}
                  disabled={form.formState.isSubmitting || success}
                  aria-invalid={!!fieldState.error}
                  aria-describedby={
                    fieldState.error ? "message-error" : undefined
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          aria-hidden="true"
          aria-label={t("honey")}
          className="hidden"
        />
        {submitError && (
          <p
            className="text-destructive text-sm"
            data-slot="form-message"
            aria-live="assertive"
          >
            {submitError.message}
          </p>
        )}
        <Button
          type="submit"
          className={`w-full cursor-pointer !opacity-100 focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
            success ? "!bg-green-600 !text-white" : ""
          }`}
          disabled={form.formState.isSubmitting || success}
        >
          {form.formState.isSubmitting ? (
            <>
              <span>{t("submitState.loading")}</span>
              <Loader2Icon className="ml-2 h-4 w-4 animate-spin" />
            </>
          ) : success ? (
            <>
              <span>{t("submitState.success")}</span>
              <Check className="ml-2 h-4 w-4" />
            </>
          ) : (
            t("submitState.idle")
          )}
        </Button>
      </form>
    </Form>
  );
}
