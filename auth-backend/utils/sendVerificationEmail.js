const nodemailer = require('nodemailer');

const sendVerificationEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    // Configure your email service here
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify Your Email',
    html: `<p>Please click <a href="${process.env.FRONTEND_URL}/verify/${token}">here</a> to verify your email.</p>`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendVerificationEmail;