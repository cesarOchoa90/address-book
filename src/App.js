import "./App.css";
import { useState, useEffect } from "react";
import ContactCard from "./ContactCard.js";

function App() {
  const [contacts, setContacts] = useState([]);

  // useEffect takes two parameters, an anonymous array and a dependecy array
  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setContacts(data.results);
      });
  }, []);

  // everything that I return after line 18 is JSX
  // we are returning one container
  return (
    // the class below in the div is pulling its unique style from the app.css file
    <div className="App">
      {contacts.map((contact, i) => (
        <ContactCard contact={contact} key={i} />
      ))}
    </div>
  );
}

export default App;
