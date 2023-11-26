import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req) {
  if (req.method === 'POST') {
    const msg = {
      to: req.body.email,
      from: process.env.MAIL_FROM,
      subject: 'お問合せありがとうございました。',
      html: `
      <p>${req.body.name}様<br>お問合せを受け付けました。回答をお待ちください。</p>
      <p>【お名前】</p>
      <p>${req.body.name}</p>
      <p>【メールアドレス】</p>
      <p>${req.body.email}</p>
      <p>【メッセージ】</p>
      <p>${req.body.message}</p>
    `,
    };

    const notification = {
      to: process.env.MAIL_TO,
      from: process.env.MAIL_FROM,
      subject: 'お問合せがありました。',
      html: `
      <p>【お名前】</p>
      <p>${req.body.name}</p>
      <p>【メールアドレス】</p>
      <p>${req.body.email}</p>
      <p>【メッセージ】</p>
      <p>${req.body.message}</p>
    `,
    };

    try {
      await sgMail.send(msg);
      await sgMail.send(notification);
    } catch (error) {}
  }
}
