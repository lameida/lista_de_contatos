import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addContact } from './actions'

const Form = styled.form`
  margin-top: 20px;
`

const CenteredH2 = styled.h2`
  text-align: center;
`

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`

const Button = styled.button`
  padding: 8px 16px;
  background-color: #89eb5b;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`

const ContactForm = () => {
  const [newContact, setNewContact] = useState({
    nome: '',
    email: '',
    telefone: ''
  })
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    dispatch(addContact(newContact))
    setNewContact({ nome: '', email: '', telefone: '' })
  }

  return (
    <Form>
      <CenteredH2>Adicionar Contato</CenteredH2>
      <Label>Nome:</Label>
      <Input
        type="text"
        name="nome"
        value={newContact.nome}
        onChange={handleChange}
      />
      <Label>Email:</Label>
      <Input
        type="text"
        name="email"
        value={newContact.email}
        onChange={handleChange}
      />
      <Label>Telefone:</Label>
      <Input
        type="text"
        name="telefone"
        value={newContact.telefone}
        onChange={handleChange}
      />
      <Button type="button" onClick={handleSubmit}>
        Adicionar
      </Button>
    </Form>
  )
}

export default ContactForm
