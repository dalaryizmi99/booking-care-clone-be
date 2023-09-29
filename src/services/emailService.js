require('dotenv').config();
import nodemailer from 'nodemailer';

let sendSimpleEmail = async (dataSend) => {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD,
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"MVGA 👻" <makevga63@gmail.com>', // sender address
        to: dataSend.receiverEmail, // list of receivers
        subject: "Thông tin đặt lịch khám bệnh", // Subject line
        html: getBodyHTMLEmail(dataSend),
    });
}

let getBodyHTMLEmail = (dataSend) => {
    let result = ''
    if (dataSend.language === 'vi') {
        result =
            `
        <h3>Xin chào ${dataSend.patientName}!</h3>
        <p>Bạn nhận được email này vì đã đặt lịch khám bệnh tại website BKC.com</p>
        <p>Thông tin đặt lịch khám bệnh:</p>
        <p>Thời gian: ${dataSend.time}</p>
        <p>Bác sĩ: ${dataSend.doctorName}</p>

        <p>Nếu các thông tin bên dưới là đúng sự thật, vui lòng
        click vào đường link bên dưới để xác nhận và hoàn tất đặt lịch khám bệnh
        </p>
        <div>
            <a href=${dataSend.redirectLink} target="_blank" >Nhấn vào đây</a>
        </div>
        <div>Xin chân thành cảm ơn!</div>
        `;
    }
    if (dataSend.language === 'en') {
        result =
            `
        <h3>Dear ${dataSend.patientName}!</h3>
        <p>You received this email because you scheduled a medical examination at the website BKC.com</p>
        <p>Information for scheduling medical examination:</p>
        <p>Time: ${dataSend.time}</p>
        <p>Doctor: ${dataSend.doctorName}</p>
        <p>
            If the information below is true, 
            please click on the link below to confirm 
            and complete the medical appointment.
        </p>
        <div>
            <a href=${dataSend.redirectLink} target="_blank" >Click Here!</a>
        </div>
        <div>Sincerely thank!</div>
        `
    }

    return result;
}

module.exports = {
    sendSimpleEmail: sendSimpleEmail
}