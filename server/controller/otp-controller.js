import otp from '../model/otp.js';
import user from '../model/otp.js';
import nodemailer from 'nodemailer';

export const sendotp = async(req,res) => {
    const exist = await user.find({email:req.params.email});
    if(exist.length !== 0){
        res.status(200).json('Email exist');
        return;
    }
    const o = Math.floor(100000 + Math.random() * 900000);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: '@gmail.com',
          pass: 'xxx'
        }
      });
      
      var mailOptions = {
        from: 'timepassotp.provider@gmail.com',
        to: req.params.email,
        subject: 'Otp for Confirmation',
        html: `<p>Your otp is <h1>${o}</h1></p>`
      };
      
      try{
      transporter.sendMail(mailOptions, async function (error, info){
        if (error) {
          console.log(error);
        } else {
            const obj = {
                email:req.params.email,
                otp:o,
            }
            const newotp = new otp(obj);
            await newotp.save();
            res.status(200).json({message:"Please Check Your Mail",code:o}); 
        }
        })        
    }catch(error){
        res.status(500).json(error);
    }
}


export const verifyotp = async(req,res) => {
  try{
    await otp.updateOne({email:req.body.email},{$set:{status:true}});
    res.status(200).json("verified");
  }catch(error){
    res.status(500).json(error);
  }
} 