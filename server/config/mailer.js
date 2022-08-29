const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN,
  },
});

const mailOptions = {
  from: 'varisharashid01@gmail.com',
  to: 'flashaquas@gmail.com',
  subject: 'Nodemailer Project',
  text: 'Hi from your nodemailer project',
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log('Email sent successfully', data);
  }
});
