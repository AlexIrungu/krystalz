const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Export the transporter
module.exports = {
  sendVerificationEmail: async (email, token) => {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Verify Your Email',
      html: `<p>Please click <a href="${process.env.FRONTEND_URL}/verify/${token}">here</a> to verify your email.</p>`,
    };

    await transporter.sendMail(mailOptions);
  },
  sendPasswordResetEmail: async (email, token) => {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset',
      html: `<p>Please click <a href="${process.env.FRONTEND_URL}/reset-password/${token}">here</a> to reset your password.</p>`,
    };

    await transporter.sendMail(mailOptions);
  },
};