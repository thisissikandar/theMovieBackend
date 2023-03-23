import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';

async function mailer(req, res, next){

    const { name, userEmail, text, subject } = req.body;
    if(!name || !userEmail || !text || !subject){
        res.status(400).json({message:"All feilds are required"})
    }

    let testAccount = await nodemailer.createTestAccount();

    const nodeConfig = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });

      let trasnporter = nodemailer.createTransport(nodeConfig);

      let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "Mailgen",
            link: 'https://mailgen.js/'
        }
    })

     // body of the email
     let email = {
        body : {
            name: name,
            intro : text,
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }   
    }

     const emailBody = MailGenerator.generate(email);

    let message = {
        from : 'loverboyx57856@gmail.com',
        to: userEmail,
        subject : subject || "Signup Successful",
        html : emailBody
    }

    // send mail
    trasnporter.sendMail(message)
        .then(() => {
            return res.status(200).send({ msg: "You should receive an email from us."})
        })
        .catch(error => res.status(500).send({ error }))
}

export default mailer;