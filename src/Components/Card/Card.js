import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar, Email, Name } from '../styledComponents'

const ContactCard = props =>{
    return(
        <Card>
            <Avatar src={props.avatar} />
            <Email>{props.email}</Email>
            <Name>{props.first_name} {props.last_name}</Name>
        </Card>
    )
}

ContactCard.propTypes = {
    email: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string
};

export default ContactCard;