// ContactList.js
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { removeContact, editContact } from './actions'

const ContactItem = styled.li`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`
const Button = styled.button`
  padding: 8px 16px;
  background-color: ${(props) => (props.remove ? '#dc3545' : '#007bff')};
  color: #fff;
  border: none;
  cursor: pointer;
`

const ContactListContainer = styled.div`
  text-align: center;
`

const Title = styled.h2`
  margin-bottom: 20px;
  color: #f1b42f;
`

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts)
  const dispatch = useDispatch()
  const [editingContact, setEditingContact] = useState(null)

  const handleRemove = (id) => {
    dispatch(removeContact(id))
  }

  const handleEdit = (id) => {
    setEditingContact(id)
  }

  const handleSave = (id, updatedContact) => {
    dispatch(editContact(id, updatedContact))
    setEditingContact(null)
  }

  return (
    <ContactListContainer>
      <Title>Lista de Contatos</Title>
      <ul>
        {contacts.map((contact) => (
          <ContactItem key={contact.id}>
            {editingContact === contact.id ? (
              <EditForm
                contact={contact}
                onSave={(updatedContact) =>
                  handleSave(contact.id, updatedContact)
                }
              />
            ) : (
              <div>
                <strong>{contact.nome}</strong> - {contact.email} -{' '}
                {contact.telefone}
              </div>
            )}
            <ButtonContainer>
              <Button remove onClick={() => handleRemove(contact.id)}>
                Remover
              </Button>
              <Button onClick={() => handleEdit(contact.id)}>Editar</Button>
            </ButtonContainer>
          </ContactItem>
        ))}
      </ul>
    </ContactListContainer>
  )
}

const EditForm = ({ contact, onSave }) => {
  const [editedContact, setEditedContact] = useState({ ...contact })

  const handleChange = (e) => {
    setEditedContact({ ...editedContact, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    onSave(editedContact)
  }

  return (
    <div>
      <input
        type="text"
        name="nome"
        value={editedContact.nome}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={editedContact.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="telefone"
        value={editedContact.telefone}
        onChange={handleChange}
      />
      <Button onClick={handleSave}>Salvar</Button>
    </div>
  )
}

export default ContactList
