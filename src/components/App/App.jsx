import React, {Component} from 'react';
import './App.css';
import Form from '../Form/Form';
import Contacts from '../Contascts/Contacts';
import Filter from '../Filter/Filter';
import Alert from '../Alert/Alert';
import {CSSTransition} from 'react-transition-group';

class App extends Component {

    state = {
        showLogo: false,
        contacts: [],
        filter: '',
        contactExist: false
    };

    componentDidMount() {

        const localContacts = localStorage.getItem('contacts');
        if(localContacts.length > 0) {
            this.setState({contacts: JSON.parse(localContacts)});
        }

        this.setState(state => ({showLogo: !state.showLogo}));

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
            this.setState({contactExist: true}) 
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

    alertOk = () => {
        this.setState({contactExist: false})
    };

    render() {

        const {filter, showLogo, contactExist} = this.state;
        const searchedContacts = this.findContact();

        return (
            <>
                <CSSTransition in={showLogo} unmountOnExit classNames="logo" timeout={500}>
                    <h1>Phonebook</h1>
                </CSSTransition>
                <h2>Contacts form</h2>
                <Form addContact={this.addContact} />
                <h2>Contacts list</h2>
                <Filter filter={filter} handleFilter={this.handleFilter} />
                <Contacts contacts={searchedContacts} deleteContact={this.deleteContact} />
                <CSSTransition in={contactExist} unmountOnExit classNames="alert" timeout={250}>
                    <Alert ok={this.alertOk} />
                </CSSTransition>
            </>
        );

    };

};

export default App;