import nodemailer from "nodemailer";

export const sendEmail = async ({ to, subject, text, html }) => {
  // Configure your SMTP or use a service like Gmail, SendGrid, etc.
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html
  };

  await transporter.sendMail(mailOptions);
};
