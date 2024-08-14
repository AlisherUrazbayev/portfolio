import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form: any = useRef<HTMLFormElement>(null);

  const sendEmail = (event: React.SyntheticEvent) => {
    event.preventDefault();

    emailjs
      .sendForm("service_kph72cx", "service_kph72cx", form.current, {
        publicKey: "tWHLuLGWi4T53g7AM",
      })
      .then(
        (res) => {
          console.log("Success, status code: ", res.text);
        },
        (error) => {
          console.log("FAILED", error.text);
        }
      );
  };

  return (
    <>
      <section>
        <h2>Contact Me</h2>
        <p>
          Integer eu ante ornare amet commetus vestibulum blandit integer in
          curae ac faucibus integer non. Adipiscing cubilia elementum integer.
          Integer eu ante ornare amet commetus.
        </p>
        <form ref={form} action="" onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Name" />
          <input type="email" name="user_email" placeholder="Email" />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" id="" placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
          <button type="reset">Reset Form</button>
        </form>
      </section>
    </>
  );
}

export default ContactForm;
