import React from 'react'
import { Nav, NavDropLink } from './ContentNavElem'
const ContentNav = () => {
    const li = [
        {
            text: 'sort',
        },
        {
            text: 'color',
        },
        {
            text: 'lens type'
        },
        {
            text: 'Price ratings'
        }
    ];

    return (
        <>
            <Nav>
                {li.map(a => (
                    <NavDropLink key={a.text}>{a.text}</NavDropLink>
                ))}
            </Nav>
        </>
    )
}

export default ContentNav;
