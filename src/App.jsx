import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [searchField, setSearchField] = useState('');
  const [users, setUsers] = useState([]);           
  const [filteredUsers, setFilteredUsers] = useState([]); 

  useEffect(() => {
  const storedData = localStorage.getItem('contactFormData');
  if (storedData) {
    const parsed = JSON.parse(storedData);
    if (Array.isArray(parsed)) {
      setUsers(parsed);
      setFilteredUsers(parsed);
    } else {
      setUsers([]);
      setFilteredUsers([]);
    }
  }
}, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter(contact =>
        contact.name.toLowerCase().includes(searchField.toLowerCase())
      )
    );
  }, [searchField, users]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm setUsers={setUsers} /> 
      <SearchBox setSearch={setSearchField} />
      <ContactList users={filteredUsers} setUsers={setUsers} />
    </div>
  );
}

export default App;