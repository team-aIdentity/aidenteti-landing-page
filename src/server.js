import nodemailer from "nodemailer";

export async function useSendMail(to, subject, html) {
  const googleTransporter = await nodemailer.createTransport();
  try {
    await googleTransporter.sendMail(mailOptions);
    googleTransporter.close();
    console.log(`mail have sent to ${to}`);
  } catch (err) {
    console.log(err);
  }
}
