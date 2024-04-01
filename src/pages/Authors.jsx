import React, { useState } from 'react'

import Avatar1 from '../assets/img/avatar1.jpg'
import Avatar2 from '../assets/img/avatar2.jpg'
import Avatar3 from '../assets/img/avatar3.jpg'
import Avatar4 from '../assets/img/avatar4.jpg'
import Avatar5 from '../assets/img/avatar5.jpg'
import { Link } from 'react-router-dom'

const authorsData = [ 
    {
        id: 1,
        avatar: Avatar1,
        name: 'John Carter',
        posts: 3, 
    },
    {
        id: 2,
        avatar: Avatar2,
        name: 'Swendy Smith',
        posts: 3, 
    },
    {
        id: 3,
        avatar: Avatar3,
        name: 'Paul Carson',
        posts: 3, 
    },
    {
        id: 4,
        avatar: Avatar4,
        name: 'Vanessa Huggent',
        posts: 3, 
    },
    {
        id: 5,
        avatar: Avatar5,
        name: 'Jessica Rabbit',
        posts: 3, 
    }
]

const Authors = () => {
    const [authors, setAuthors] = useState(authorsData)

    return (
        <section className="authors">
            {authors.length > 0 ? <div className="container authors__container">
                {
                    authors.map(({ id, avatar, name, posts})=> {
                        return <Link key={id} to={`/posts/users/${id}`} className='author'>
                            <div className="author__avatar">
                                <img src={avatar} alt={`Image of ${name}`} />
                            </div>
                            <div className="author__info">
                                <h4>{name}</h4>
                                <p>{`${posts} posts`}</p>
                            </div>
                        </Link>
                    })
                }
            </div> : <h2 className='center'>No users/authors found.</h2>
            }
        </section>
    )
}

export default Authors