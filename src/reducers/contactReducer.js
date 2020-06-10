import { CREATE_NEW_CONTACT, GET_ALL_CONTACTS, DELETE_SINGLE_CONTACT, EDIT_SINGLE_CONTACT } from "../actions/Types";

// Defining initial state with empty contact array - Sudama [09/06/2020]
const initialState = {
    contact: [],
};

export default (state = initialState, action) => {
    switch(action.type) {
        // For creating the new contacts - Sudama [09/06/2020]
        case CREATE_NEW_CONTACT:
            return {
                ...state,
                contact: [
                    ...state.contact,
                    {
                        name: action.payload,
                    }
                ]
            }

        // For Deleting Single Contact from array - Sudama [09/06/2020]
        case DELETE_SINGLE_CONTACT:
            let newContacts = [...state.contact];
            newContacts.splice(action.index, 1)
            return {
                ...state,
                contact: newContacts
            }

        // For Update the single contact in array - Sudama [09/06/2020]
        case EDIT_SINGLE_CONTACT:
            let editContacts = [...state.contact];
            editContacts[action.index].name = action.editName;
            return {
                ...state,
                contact: editContacts
            }

        default:
            return state;
    }
}