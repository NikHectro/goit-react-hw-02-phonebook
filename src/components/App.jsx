import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormInput } from './Form/FormInput';
import ContactsList from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
// import CheckBox from './CheckBox/CheckBox';
// import Select from './Select/Select';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSubmitHandler = data => {
    const isDuplicate = this.state.contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({ contacts: [...prevState.contacts, data] }));
    // this.state.contacts.push({ data });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <FormInput
          onBtnSubmit={this.formSubmitHandler}
          name={this.state.name}
        />

        <h2>Contacts:</h2>
        <ContactsList
          contacts={this.state.contacts}
          handleDeleteContact={this.handleDeleteContact}
        />
        {/* {this.state.contacts.map(contact => (
          <p>{contact[0]}</p>
        ))} */}

        {/* <CheckBox />
        <Select onChangeInput={this.onChangeInput} /> */}
      </div>
    );
  }
}
