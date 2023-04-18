import React from "react";
import { useState } from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact";

const ContactListComponent = () => {
  const defaultContact = new Contact(
    "Bob",
    "Lambda",
    "boblamda@example.com",
    true
  );
  const [contact, setContact] = useState(defaultContact);

  const changeState = () => {
    const newContactState = new Contact(
      contact.firstname,
      contact.lastname,
      contact.email,
      !contact.online
    )
    setContact(newContactState)
  }

  return (
    <div>
      <h1>Contactos:</h1>
      <div>
        <ContactComponent contact={contact} />
      </div>
      <div>
        <button onClick={changeState}>Cambiar estado</button>
      </div>
    </div>
  );
};

export default ContactListComponent;
