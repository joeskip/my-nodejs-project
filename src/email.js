var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.sina.com',
	secureConnection: true,
	port: 25,
	auth: {
		user: 'xiaobing_python@sina.com',
		pass: 'admin123'
	}
});


var mailOptions = {
    from: 'xiaobing_python@sina.com',
	to: user.email,
	subject: '欢迎',
	text: 'welcome 注册论坛系统~~~~'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
})