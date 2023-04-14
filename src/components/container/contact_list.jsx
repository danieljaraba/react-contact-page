import React from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact";

const ContactListComponent = () => {
  const defaultContact = new Contact(
    "Bob",
    "Lambda",
    "boblamda@example.com",
    true
  );

  return (
    <div>
      <h1>Contactos:</h1>
      <div>
        <ContactComponent contact={defaultContact} />
      </div>
    </div>
  );
};

export default ContactListComponent;
