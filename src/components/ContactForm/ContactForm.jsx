import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Email");
  const [text, setText] = useState("Share your Feedback");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
          <Button text="VIA CALL" icon={<FaPhoneAlt />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail />} />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="10" id="text"></textarea>
          </div>
          <div className={styles.submit_btn}>
            <Button text="SUBMIT" />
          </div>
          <div>
            {name} <br />
            {email} <br />
            {text} <br />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="contact-image" />
      </div>
    </section>
  );
};

export default ContactForm;
