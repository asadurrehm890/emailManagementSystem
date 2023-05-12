const asyncHandler=require('express-async-handler');
const Mail=require('../models/Mail');
const nodemailer = require('nodemailer');

const getMail=asyncHandler(async(req,res)=>{
	const mails=await Mail.find();
	res.status(200).json(mails);
});



const createMail=asyncHandler(async(req,res)=>{
	const {email}=req.body;
	if(email==null){
		res.status(404);
		throw new Error("Not Found");
	}
	
	const cemail=await Mail.create({
		email,
	});
	
	res.status(200).json(cemail);
	
});



const delMail=asyncHandler(async(req,res)=>{
	const mail=await Mail.findById(req.params.id);
	if(!mail){
		res.status(404);
		throw new Error("Not Found");
	}
	await Mail.deleteOne({_id:req.params.id});
	res.status(200).json(mail);
});

const sendEmail=asyncHandler(async(req,res)=>{
	var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});

var mailOptions = {
  from: process.env.EMAIL,
  to: req.body.email,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

});

module.exports={
	getMail,
	createMail,
	delMail,
	sendEmail,
}



