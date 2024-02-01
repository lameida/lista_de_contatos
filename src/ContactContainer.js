import { Provider } from 'react-redux'
import { createStore } from 'redux'
import styled from 'styled-components'
import ContactList from './ContactList'
import ContactForm from './ContactForm'
import reducer from './reducer'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const store = createStore(reducer, { contacts: [] })

export const ContactContainer = () => {
  return (
    <Provider store={store}>
      <Container>
        <ContactForm />
        <ContactList />
      </Container>
    </Provider>
  )
}
