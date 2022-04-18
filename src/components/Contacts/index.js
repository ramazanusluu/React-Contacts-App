import { useState, useEffect } from "react";

import "./style.css";

import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Ramazan",
      phone_number: "123123",
    },
    {
      fullname: "Hira",
      phone_number: "78945",
    },
    {
      fullname: "Asya",
      phone_number: "45678",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>CONTACTS</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
