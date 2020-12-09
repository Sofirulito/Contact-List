import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Email, Name } from '../styledComponents'

const Card = ({children, avatar, email, first_name, last_name }) => {
    return(
        <>
            <Avatar src={avatar} />
            <Email>{email}</Email>
            <Name>{first_name} {last_name}</Name>
        </>
    )
}

Card.propTypes = {
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    avatar: PropTypes.string
};

Card.defaultProps = {
    email: 'email@email.com',
    first_name: 'Pepe',
    last_name: 'Perez',
    avatar: './defaultAvatar.png'
};



export default Card;