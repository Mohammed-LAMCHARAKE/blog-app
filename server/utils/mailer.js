async function email(to, subject, text, html) {
  //get full url from req.protocol + '://' + req.get('host') + req.originalUrl
  let transporter = require('nodemailer').createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false,
    auth: {
      user: 'lamcharake.mohammed@gmail.com',
      pass: 'kelfymazaqrmdciv'
    }
  })

  let mailOptions = {
    from: 'lamcharake.mohammed@gmail.com',
    to: to,
    subject: subject,
    text: text,
    html: html
  }

  try {
    let info = await transporter.sendMail(mailOptions)
    // console.log(html)
    return info
  } catch (ex) {
    return false
  }
}

module.exports = email
