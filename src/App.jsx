import "./App.css";
import { useEffect } from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import {
  addContact,
  deleteContact,
} from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";

function App() {
  const contacts = useSelector(
    (state) => state.contacts.items || []
  );

  const searchTerm = useSelector(
    (state) => state.filters.name || ""
  );

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem(
      "contacts",
      JSON.stringify(contacts)
    );
  }, [contacts]);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleSearch = (term) => {
    dispatch(changeFilter(term));
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name && // Перевірка на наявність ім'я контакту
      contact.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        onAddContact={handleAddContact}
      />
      <SearchBox onSearch={handleSearch} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
