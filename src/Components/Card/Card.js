import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Email, Name, CardContent } from '../styledComponents'

const Card = ({children, avatar, email, first_name, last_name }) => {
    return(
        <CardContent>
            <Avatar src={avatar} />
            <Name>{first_name} {last_name}</Name>
            <Email>{email}</Email>
            {children}
        </CardContent>
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
    avatar: `${process.env.PUBLIC_URL + '/defaultAvatar.png'}`
};



export default Card;