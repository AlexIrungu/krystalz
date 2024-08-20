const nodemailer = require('nodemailer');

const sendPasswordResetEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset',
    html: `<p>Please click <a href="${process.env.FRONTEND_URL}/reset-password/${token}">here</a> to reset your password.</p>`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendPasswordResetEmail;