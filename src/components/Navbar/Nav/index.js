import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Nav, NavSearch, NavLink, Input, NavMenu, NavBtnLink } from './NavElementStyle'
const index = (props) => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    MOOR
                </NavLink>
                {/* <Bars /> */}
                <NavSearch>
                    <i className="fa fa-search searchIcon" 
                        style={{
                            position: 'absolute', 
                            margin: '10px 0 0 550px',
                            cursor: 'pointer'
                        }}
                        >
                    </i>
                    <Input placeholder="Search sunglasses" />
                </NavSearch>

                <NavMenu>
                    <NavLink to="/login">Login</NavLink>
                    <NavBtnLink to="/login">Signup</NavBtnLink>
                    <NavLink to="/likes">Likes</NavLink>
                    <NavLink to="/cart">Cart</NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default index;
