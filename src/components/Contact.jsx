import React, { useState } from "react";
import SocialBadge from "./Reasubles/SocialBadge";
import * as sanitizeHtml from "sanitize-html";
import * as EmailValidator from "email-validator";
import axios from "axios";
const styles = {
  input:
    "w-10/12 md:w-2/6 p-4 shadow-md rounded-lg focus:outline-none ring-yellow-200 focus:ring focus:border-yellow-300",
};
export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSucces] = useState(false);

  const sendMessage = async () => {
    const newEmail = sanitizeHtml(email);
    const newName = sanitizeHtml(name);
    const newMessage = sanitizeHtml(message);

    if (EmailValidator.validate(email) && message !== "" && name !== "") {
      try {
        await axios.post(
          "https://rk82vfsokc.execute-api.us-east-1.amazonaws.com/dev/mailer",
          {
            email: newEmail,
            name: newName,
            message: newMessage,
          }
        );
        setSucces(true);
      } catch (_) {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-y-6 bg-gray-100 ">
      <h1 className="text-2xl md:text-4xl font-bold ">
        {" "}
        Start your Menu Transformation{" "}
      </h1>

      <div className="w-2/6 flex gap-x-4  items-center justify-center">
        <SocialBadge icon="text-2xl md:text-4xl fab fa-facebook" />
        <SocialBadge icon="text-2xl md:text-4xl fab fa-instagram" url="https://www.instagram.com/menukome/" />
        <SocialBadge icon="text-2xl md:text-4xl fas fa-envelope" url="mailto: menukome@gmail.com"/>
        <SocialBadge icon="text-2xl md:text-4xl fab fa-whatsapp" />
        <SocialBadge icon="text-2xl md:text-4xl fab fa-tiktok" />
      </div>

      {success ? (
        <div>
          <div className="bg-green-500 p-4 rounded-md shadow-md text-white">
            Message sent successfully!
          </div>
        </div>
      ) : (
        <>
          <input
            className={styles.input}
            placeholder="Email"
            value={email}
            name={email}
            onChange={(e) => {
              setError(false);
              setEmail(e.target.value);
            }}
          />
          <input
            className={styles.input}
            placeholder="Name"
            value={name}
            name={name}
            onChange={(e) => {
              setError(false);
              setName(e.target.value);
            }}
          />
          <textarea
            className={styles.input}
            placeholder="Short Message"
            value={message}
            name={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />

          {error ? (
            <div className="bg-red-500 p-4 rounded-md shadow-md text-white">
              Please verify Email and Message!
            </div>
          ) : null}
          <div
            className="bg-yellow-400 p-4 rounded-md shadow-md cursor-pointer"
            onClick={sendMessage}
          >
            <p className="text-lg">Submit</p>
          </div>
        </>
      )}
    </div>
  );
}
