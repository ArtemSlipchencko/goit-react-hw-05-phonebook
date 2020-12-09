import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './Contacts.css';

class Contacts extends Component {

    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
        deleteContact: PropTypes.func.isRequired,
      };

    render() {
        
        const {contacts, deleteContact} = this.props;
        
        return (
            <TransitionGroup component="ul">

                {
                    contacts.map(el => {
                        return (
                            <CSSTransition key={el.id} timeout={250} classNames="contact">
                                <li >{el.name}: {el.number} <button type="button" onClick={() => deleteContact(el.id)}>Delete</button></li>
                            </CSSTransition>
                        )
                    })
                }

            </TransitionGroup>
    )}

};

export default Contacts;