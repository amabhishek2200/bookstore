import React from 'react'
import './Contactus.css'
import Swal from 'sweetalert2'
const Contactus = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d92219f7-c55c-4f67-917a-8cacd60d2540");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };
  return (
   <section className="contact">
    <form onSubmit={onSubmit} className="Form dark:bg-slate-900 dark:text-white">
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className="field dark:text-white" placeholder='Enter your name' name='name' required/>
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="emai" className="field dark:text-white" placeholder='Enter your email' name='email' required/>
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea  name='message' className="field mess dark:text-white" placeholder='Enter your message' required></textarea>
        </div>
        <button type="submit">Send Message</button>
    </form>
   </section>
  )
}

export default Contactus
