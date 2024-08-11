import React from "react";

function ContactForm() {
  const handleSubmit = (event: React.SyntheticEvent) => {
    console.log(event);

    event.preventDefault();
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
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea name="" id="" placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
          <button type="reset">Reset Form</button>
        </form>
      </section>
    </>
  );
}

export default ContactForm;
