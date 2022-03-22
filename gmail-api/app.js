// https://www.youtube.com/watch?v=-rcRf7yswfM

const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const CLIENT_ID = '37345320913-4ver0t1ul128j42m3lukh0oa56ljn2r3.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04WCtXQW_0IEBCgYIARAAGAQSNgF-L9Ir3YY5J13bRbKZppUcKE8Q_ey61GgWPbK2xJZ66bbnLsP2aNJfwS9dUX3WNYAE29r4NQ'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

async function sendMail() {
    try {
        const accessToken = await oAuth2Client.getAccessToken()
        // const accessToken = 'ya29.A0ARrdaM8gzkNYzk5rwYXVTxiz17AX-pq1cJOCnpdNAi-iK1gxjvCN6vMc8nUgNfuZfDsLrFxH0kYfuio5yDnRWkuizZ8WTI4AO1mzbu9_VwZw27jpminBhhzgUxPO-cnuoig5oJ5zYGqEu8GXIu9hWm9VHeJR'

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'mongoliantester@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const mailOptions = {
            from: "mongoliantester 📧 <mongoliantester@gmail.com>",
            to: "jargalbat@gmail.com",
            subject: "Hello from gmail using API",
            text: "Hello from gmail email using API",
            html: "<h1>Hello from gmail email using API</h1>"
        }

        const result = await transport.sendMail(mailOptions)
        return result

    } catch (e) {
        return e
    }
}


sendMail().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})