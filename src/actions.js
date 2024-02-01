// actions.js
export const addContact = (contact) => ({
  type: 'ADD_CONTACT',
  payload: contact
})

export const removeContact = (id) => ({
  type: 'REMOVE_CONTACT',
  payload: id
})

export const editContact = (id, updatedContact) => ({
  type: 'EDIT_CONTACT',
  payload: { id, updatedContact }
})
