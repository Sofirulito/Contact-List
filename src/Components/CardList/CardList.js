import React from 'react';
import Card from '../Card/Card'
import { ListofCards } from '../styledComponents'

import { useSelector, useDispatch } from 'react-redux'

const CardList = ({ children, data, section, avatar, email, first_name, last_name }) => {
    const dispatch = useDispatch()
    
    return (
        <ListofCards>
            {data.map((contact, index) => (
                <Card
                    {...children}
                    key={index}
                    section={section}
                    email={contact.email}
                    first_name={contact.first_name}
                    last_name={contact.last_name}
                    avatar={contact.avatar}
                    data={data}
                >
                    { section == 'favorites' ?
                        (<button onClick={() => dispatch({type: 'REMOVE_FAVORITE', contact})}>Remover favorito</button>)
                        :
                        (<button onClick={() => dispatch({type: 'ADD_FAVORITES', contact})}>Agregar favoritos</button>)
                    }
                    { section == 'contacts' ?
                        (<button onClick={() => dispatch({type: 'REMOVE_CONTACT', contact})}>Remover contacto</button>)
                        :
                        null
                    }
                </Card>
            ))}
        </ListofCards>
    )
}

export default CardList