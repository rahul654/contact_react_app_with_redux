import {CREATE_NEW_CONTACT,GET_ALL_CONTACTS, DELETE_SINGLE_CONTACT, EDIT_SINGLE_CONTACT} from './Types';

// For creating the new contacts - Sudama [09/06/2020]
export const createContact = (contact) => {
    return {
        type: CREATE_NEW_CONTACT,
        payload: contact
    }
}

// For Deleting Single Contact from array - Sudama [09/06/2020]
export const deleteContact = (index) => {
    return {
        type: DELETE_SINGLE_CONTACT,
        index: index
    }
}

// For Update the single contact in array - Sudama [09/06/2020]
export const editContact = (index, editName) => {
    return {
        type: EDIT_SINGLE_CONTACT,
        index: index,
        editName: editName

    }
}