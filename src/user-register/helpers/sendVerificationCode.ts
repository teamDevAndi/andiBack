export async function sendVerificationEmail(email: string, code: string) {
        const nodemailer = require("nodemailer");
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'sergio.apaza1432@gmail.com', // andi email
                pass: 'pbgilpkpzwymlhdl', // andi app generated password
            },
        });

        await transporter.sendMail({
            from: '"Verificación" <no-reply@andiGO.com>',
            to: email,
            subject: 'Código de verificación',
            html: `<p>Tu código es: <b>${code}</b>. Expira en 10 minutos.</p>`,
        });
    }