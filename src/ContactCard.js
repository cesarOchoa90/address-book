import React, { useState, useEffect } from "react";

export const ContactCard = ({ contact }) => {
  const [show, setShow] = useState(false);

  const showWhenClicked = () => {
    console.log("Clicked");
    return setShow(!show);
  };

  useEffect(() => {
    console.log(show);
  }, [show]);

  return (
    <div>
      <h1>
        {contact.name.first} {contact.name.last}
      </h1>
      <img src={contact.picture.medium} />
      <button onClick={showWhenClicked}> Show </button>
      {show ? (
        <ul>
          <li>{contact.gender}</li>
          <li>{contact.email}</li>
        </ul>
      ) : (null)}
    </div>
  );
};

export default ContactCard;
