import React from 'react';
import Card from './Card'

export default {
    title: 'Cards/Card',
    component: Card
}

const Template = (args) => <Card {...args} />

export const card = Template.bind({});
card.args = {
    avatar: './defaultAvatar.png',
    email: 'email@email.com',
    first_name: 'Pepe',
    last_name: 'Perez'
};