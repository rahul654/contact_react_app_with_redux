import {CREATE_NEW_CONTACT,GET_ALL_CONTACTS, DELETE_SINGLE_CONTACT, EDIT_SINGLE_CONTACT} from './Types';

export const createContact = (contact) => {
    return {
        type: CREATE_NEW_CONTACT,
        payload: contact
    }
}

export const deleteContact = (index) => {
    return {
        type: DELETE_SINGLE_CONTACT,
        index: index
    }
}

export const editContact = (index, editName) => {
    return {
        type: EDIT_SINGLE_CONTACT,
        index: index,
        editName: editName

    }
}