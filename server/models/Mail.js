const mongoose=require('mongoose');

const recepiSchema=mongoose.Schema({
	
	email:{type:String, required:true},
	
	
},{timestamps:true});

const Mail=mongoose.model('Mail', recepiSchema);
module.exports=Mail;										

