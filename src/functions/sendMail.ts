import { Resend } from 'resend';
interface Content{
    name: string;
    subject:string;
    email:string;
    message:string;
}
const resend = new Resend(import.meta.env.API_KEY);
function SendMail(params:Content) {
    
     resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'leslie.centeno@galileo.edu',
        subject: params.subject,
        html: `
            <h1>Name: ${params.name}</h1>
            <h3>Email: ${params.email}</h3>
            <p>
                ${params.message}
            </p>
        `
      })
    
}
export default SendMail;
