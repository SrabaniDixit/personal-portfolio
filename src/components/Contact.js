import { useState } from "react";
import 'animate.css';
import emailjs from '@emailjs/browser';
const Result=() =>{
  return(
    <p>Your message has been successfully sent</p>
  )
}
export const Contact = () => {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l9awq1s', 'template_japxt8f', e.target, 'DAE1s6aaYn6wj5Ufk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };
  return (
    <section className="formWord" id="connect">
    
    <form action="" onSubmit={sendEmail}>
      <div className="formWord" >
        <h2>Let's Connect</h2>
        <span>Full Name</span>
        <br/>
        <input className="input100" type="text" name="fullName" required/>
        <br/>
        <span>Phone Number</span>
        <br/>
        <input className="input100" type="text" name="phone" required/>
        <br/>
        <span>Enter Email</span>
        <br/>
        <input className="input100" type="text" name="email"required/>
        <br/>
      </div>
      <div className="formWord">
      <span>Message</span>
      <br/>
      <textarea name="message" required></textarea>
      <br/>
      <button>Submit</button>
      <div className="row">{ result ? <Result/> : null }</div>
      </div>

    </form>
    </section>
  )
};
export default Contact;