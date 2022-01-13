import React, { useState } from 'react';
import { ContactsCollection } from '../api/ContactsCollection';

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");


  const saveContact = () => {
    console.log({ name, email, imageUrl });
    ContactsCollection.insert({ name, email, imageUrl });
    setName("");
    setEmail("");
    setImageUrl("");
  }

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input 
          value={name}
          type="text" 
          name="name" id="name" onChange={e => setName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          value={email}
          type="email" 
          name="email" id="email" onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL</label>
        <input 
          value={imageUrl}
          type="text" 
          name="imageUrl" id="imageUrl" onChange={e => setImageUrl(e.target.value)} />
      </div>
      <div>
        <button type='button' onClick={saveContact}>Save Contact</button>
      </div>
    </form>
  )
}
