import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API);

export default async function handler(req, res) {
  let response1 = null;
  let response2 = null;

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
      response1 = await sgMail.send(msg);
      response2 = await sgMail.send(notification);
      res.status(200).json({ message: 'メールが送信されました。' });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('メールの送信中にエラーが発生しました:', error);
    }
  }
  res.send(response1);
  res.send(response2);
}
