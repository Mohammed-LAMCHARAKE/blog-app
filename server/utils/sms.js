const Vonage = require('@vonage/server-sdk')

module.exports = function sendSMS(from, to, text) {
  const vonage = new Vonage({
    apiKey: '1e41aa79',
    apiSecret: 'u4G8yzNxpusN3mm0'
  })

  const from = from
  const to = to //'212653972926'
  const text = text //'Hey from Nodejs'

  vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) console.log(err)
    if (!err && responseData.messages[0]['status'] === '0')
      console.log('Message sent successfully.')
    else
      console.log(
        `Message failed with error: ${responseData.messages[0]['error-text']}`
      )
  })
}
