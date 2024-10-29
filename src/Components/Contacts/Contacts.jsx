import React from "react";
import {
  FaPhoneAlt,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import styles from "./Contacts.module.css";

const Contacts = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Phone number copied to clipboard!");
  };

  return (
    <div className={styles.container}>
      <h2>Kontaktai</h2>
      <div className={styles.contacts} id="contact">
        <p
          onClick={() => copyToClipboard("+370 600 12345")}
          style={{cursor: "pointer"}}
        >
          <FaPhoneAlt style={{marginRight: "8px"}} />
          +370 600 12345
        </p>
        <p>
          <FaYoutube style={{marginRight: "8px"}} />
          <a
            href="https://www.youtube.com/@psk.2224"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </p>
        <p>
          <FaFacebookF style={{marginRight: "8px"}} />
          <a
            href="https://www.facebook.com/lukas.paskevicius.7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </p>
        <p>
          <FaInstagram style={{marginRight: "8px"}} />
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
        <p>
          <FaEnvelope style={{marginRight: "8px"}} />
          lukas@example.com
        </p>
      </div>
    </div>
  );
};

export default Contacts;
