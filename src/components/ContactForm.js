import Contact from "../routes/Contact";
import "./ContactFormStyle.css";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mgebggpd");
  if (state.succeeded) {
    return (
      <div className="messageBack">
        Thank you for contacting me I will message you back ASAP!!
      </div>
    );
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} action="https://formspree.io/f/mgebggpd">
        <label htmlFor="firstName">First Name</label>
        <input required id="firstName" type="text" />
        <ValidationError
          prefix="FirstName"
          field="firstName"
          errors={state.errors}
        />

        <label htmlFor="lastName">Last Name</label>
        <input required id="lastName" type="text" />
        <ValidationError
          prefix="LastName"
          field="lastName"
          errors={state.errors}
        />

        <label htmlFor="email">Email Address</label>
        <input required id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message ME</label>
        <textarea required id="message" type="text" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button className="btn" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
