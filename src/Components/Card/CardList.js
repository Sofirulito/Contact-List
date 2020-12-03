import React from 'react';
import { CardList, Email } from '../styledComponents'
import ContactCard from './Card'
import { Title } from '../styledComponents'
import { connect } from 'react-redux'
import { contactList } from '../../actions/contactActions'

class ContactList extends React.Component {
    componentDidMount() {
        this.props.contactList();
    }
    
    render(){
        const contacts = this.props.contacts
        const isArray = Array.isArray(contacts.data)
                
        return(
            <>
                <Title>Contact List</Title>
                <CardList>
                    {isArray ? (
                        contacts.data.map(contact => (
                            <ContactCard key={contact.id} {...contact}>
                                {contact.body}
                            </ContactCard>
                        )
                        
                    )) : (
                        <div>No hay data</div>
                    )}
                </CardList>
            </>
        )
    };
}

// ir a consultar el estado
const mapStateToProps = state => ({
    contacts: state.contacts.items
});
  
export default connect(mapStateToProps, {contactList})(ContactList);