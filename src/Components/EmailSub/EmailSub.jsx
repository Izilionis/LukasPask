import React from "react";
import Styles from "./EmailSub.module.css";
import Swal from "sweetalert2";

export default function EmailSub() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0a9ab89a-a569-427b-8a23-8b734a23f083");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });

      // Reset form fields
      event.target.reset();
    }
  };

  return (
    <section className={Styles.contactSection}>
      <form onSubmit={onSubmit} className={Styles.contactForm}>
        <h2>Susisiek su manim!</h2>
        <div className={Styles.inputBox}>
          <label>Full name</label>
          <input
            name="name"
            type="text"
            className={Styles.field}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className={Styles.inputBox}>
          <label>Email Address</label>
          <input
            name="email"
            type="email"
            className={Styles.field}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className={Styles.inputBox}>
          <label>Your message</label>
          <textarea
            className={Styles.fieldMess}
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
