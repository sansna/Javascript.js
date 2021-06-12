var nm = require('nodemailer')

// the mail content
mailOpt = {
	from: 'xxx',
	to: 'xxx1@qq.com, xxx2@qq.com',
	//cc: 'yyy@qq.com, ...',
	//bcc: 'secret@qq.com, ...',
	subject: 'Try nodejs mailer',
	// attachment usage: https://nodemailer.com/message/attachments/
	//attachments: [{filename: "a.txt", path: '/path/to/file'}],
	text: 'Try nodejs mailer'
}

// the sender info
var user = nm.createTransport({
							  service: 'zy',
							  host: 'smtp.exmail.qq.com',
							  port: 465,
							  secure: true,
							  auth: {
								  user: 'xxx',
								  pass: 'xxx'
							  }
})

// the process
user.sendMail(mailOpt, function(error, info) {
	if (error) {
		console.log('err: '+error)
	} else {
		console.log('Email sent: '+info.response)
	}
})
