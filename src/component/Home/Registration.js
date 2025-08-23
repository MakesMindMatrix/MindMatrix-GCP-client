import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import "./Registration.css";

const RegistrationButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button onClick={handleOpen} className="register-btn">
        Register Your Team
      </button>

      {isOpen && <RegistrationForm onClose={handleClose} />}
    </>
  );
};

export default RegistrationButton;
