import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid"; // Додано для генерації унікальних ID

const initialState = {
    items: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action) => {
            const duplicateContact = state.items.find(
                (contact) =>
                    contact.name.toLowerCase() ===
                    action.payload.name.toLowerCase()
            );
            if (!duplicateContact) {
                state.items.push({ ...action.payload, id: nanoid() }); // Додаємо унікальний ID
            } else {
                alert(`${action.payload.name} is already in contacts.`);
            }
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter(
                (contact) => contact.id !== action.payload
            );
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = (state) => state.contacts.items || [];

export default contactsSlice.reducer;
