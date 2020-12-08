import React, { Component } from 'react';
import './Contacts.css';
import PropTypes from 'prop-types';

class Contacts extends Component {

    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
        deleteContact: PropTypes.func.isRequired,
      };

    render() {
        
        const {contacts, deleteContact} = this.props;
        
        return (
            <ul>

                {
                    contacts.map(el => {
                        return (
                            <li key={el.id}>{el.name}: {el.number} <button type="button" onClick={() => deleteContact(el.id)}>Delete</button></li>
                        )
                    })
                }

            </ul>
    )}

};

export default Contacts;