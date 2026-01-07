import { Resend } from "resend";

type Req = {
  method?: string;
  body?: Record<string, unknown>;
};

type Res = {
  status: (code: number) => { json: (obj: unknown) => void };
};

export default async function handler(req: Req, res: Res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { name, email, company, service, message } = (req.body || {}) as {
    name?: string;
    email?: string;
    company?: string;
    service?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY || "";
  if (!apiKey) {
    res.status(500).json({ error: "Missing RESEND_API_KEY" });
    return;
  }

  const to = process.env.CONTACT_TO_EMAIL || "yanforge09@gmail.com";

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Yanforge <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `New contact message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Submission</h2>
          <p><strong>Name:</strong> ${String(name)}</p>
          <p><strong>Email:</strong> ${String(email)}</p>
          <p><strong>Company:</strong> ${String(company || "-")}</p>
          <p><strong>Service:</strong> ${String(service || "-")}</p>
          <p><strong>Message:</strong></p>
          <div>${String(message).replace(/\n/g, "<br/>")}</div>
        </div>
      `,
    });

    if (error) {
      res.status(500).json({ error: error.message || "Failed to send email" });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unexpected error";
    res.status(500).json({ error: message });
  }
}
