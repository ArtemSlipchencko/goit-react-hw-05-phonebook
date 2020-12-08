import React, {Component} from 'react';
import './App.css';
import Form from '../Form/Form';
import Contacts from '../Contascts/Contacts';
import Filter from '../Filter/Filter';

class App extends Component {

    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
        ],
        filter: ''
    };

    componentDidMount() {

        const localContacts = localStorage.getItem('contacts');
    
        if(localContacts) {
            this.setState({contacts: JSON.parse(localContacts)});
        }

    };

    componentDidUpdate(prevProps, prevState) {

        if(prevState !== this.state.contacts) {
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        }

    };

    findContact = () => {

        const {contacts, filter} = this.state;
            return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()),
        );

    };

    handleFilter = (e) => {

        this.setState(prevState => {
            return {filter: e.target.value}
        });

      };

    addContact = (contact) => {

        const {contacts} = this.state;

        if (contacts.find((el) => el.name === contact.name)) {
            alert(`${contact.name} is already in contacts`);
            return;
        };
        this.setState( state => {
            const contacts = [...state.contacts, contact];
            return { contacts };
        });
        
    };

    deleteContact = (id) => {

        this.setState(prevState => {
            return {contacts: prevState.contacts.filter(contact => contact.id !== id)};
        });

    };

    render() {

        const {filter} = this.state;
        const searchedContacts = this.findContact();

        return (
            <>
                <h1>Phone book</h1>
                <h2>Contacts form</h2>
                <Form addContact={this.addContact} />
                <h2>Contacts list</h2>
                <Filter filter={filter} handleFilter={this.handleFilter} />
                <Contacts contacts={searchedContacts} deleteContact={this.deleteContact} />
            </>
        );

    };

};

export default App;