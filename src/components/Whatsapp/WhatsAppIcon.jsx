import React, { useState } from "react";
import "../Whatsapp/WhatsAppIcon.css";
import { FaWhatsapp } from "react-icons/fa";
import { BsChatLeftText } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const WhatsAppIcon = ({ phoneNumber }) => {
  const [showphoneWhatsapp, setShowphoneWhatsapp] = useState(false);

  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

  const handleClick = () => {
    if (cleanedPhoneNumber.length > 5) {
      window.open(`https://wa.me/${phoneNumber}`, "_blank");
    } else {
      alert("Invalid phone number!");
    }
  };

  return (
    <div className="whatsapp-container">
      <div
        className="chat-icon"
        onClick={() => setShowphoneWhatsapp(!showphoneWhatsapp)}
      >
        {showphoneWhatsapp ? (
          <IoMdClose className="chat-icon__icon close-icon__icon rotate-on-hover" />
        ) : (
          <BsChatLeftText className="chat-icon__icon rotate-on-hover" />
        )}
      </div>

      {showphoneWhatsapp && (
        <div className="whatsapp-options">
          <div className="whatsapp-icon" onClick={handleClick}>
            <FaWhatsapp className="whatsapp-icon__icon" />
          </div>
          <div className="phone-icon">
            <a href={`tel:${cleanedPhoneNumber}`}>
              <FaPhoneAlt className="phone-icon__icon" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppIcon;
