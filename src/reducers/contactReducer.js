import { CREATE_NEW_CONTACT, GET_ALL_CONTACTS, DELETE_SINGLE_CONTACT, EDIT_SINGLE_CONTACT } from "../actions/Types";

const initialState = {
    contact: [],
};

export default (state = initialState, action) => {
    switch(action.type) {
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

        case DELETE_SINGLE_CONTACT:
            let newContacts = [...state.contact];
            newContacts.splice(action.index, 1)
            return {
                ...state,
                contact: newContacts
            }

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