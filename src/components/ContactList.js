import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  }; 
  const contacts = [{
    id:"1", 
    name : "Adi", 
    email:"adi@gmail.com"
  }]
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main"> 
    <h2 >Contact List</h2>
      <div className="ui celled list">{renderContactList}</div>; 
    </div>
      )
};

export default ContactList; 