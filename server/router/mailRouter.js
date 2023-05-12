const express=require('express');

const {
    getMail,
	createMail,
	delMail,
	sendEmail,
} =require('../controllers/mailController');


const router=express.Router();

router.route('/send').post(sendEmail);
router.route('/').get(getMail).post(createMail);
router.route('/:id').delete(delMail);

module.exports=router;