import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ContactList from './ContactList'
import ContactForm from './ContactForm'
import reducer from './reducer'
import { EstiloGlobal } from './styles'
import { ContactContainer } from './ContactContainer'

const store = createStore(reducer)

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <EstiloGlobal />
        <ContactContainer>
          <ContactForm />
          <ContactList />
        </ContactContainer>
      </div>
    </Provider>
  )
}

export default App
