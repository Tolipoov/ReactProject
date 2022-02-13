import React, { useState } from 'react';
import{ButtonDropdown, Container, Row, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import MenuIcon from '@material-ui/icons/Menu'

const Categories = () => {
    const [dropdownOpen, setOpen]=useState(false);
    const toggle=()=>setOpen(!dropdownOpen);
    return (
        <Container>
            <Row>
                <div className='Categories'>
                    <ButtonDropdown className='btn_cat' isOpen={dropdownOpen} toggle={toggle}> 
                        <DropdownToggle caret>
                            <MenuIcon className="MenuIcon"/>
                            All categories 
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Smartphones</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Notebooks</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Accessories</DropdownItem>
                            <DropdownItem divider />
                        </DropdownMenu>
                    </ButtonDropdown>

                    <ul className='MenuLink'>
                        <li className='MenuLinkItem'>
                            <a href="#" className='MenuLinkItems active'>Home</a>
                        </li>
                        <li className='MenuLinkItem'>
                            <a href="#" className='MenuLinkItems '>New Arrivals</a>
                        </li>
                        <li className='MenuLinkItem'>
                            <a href="#" className='MenuLinkItems '>Trending</a>
                        </li>
                        <li className='MenuLinkItem'>
                            <a href="#" className='MenuLinkItems '>Deals for you</a>
                        </li>
                        <li className='MenuLinkItem'>
                            <a href="#" className='MenuLinkItems '>Discounts</a>
                        </li>
                        <li className='MenuLinkItem'>
                            <a href="#" className='MenuLinkItems '>Weekly Offers</a>
                        </li>
                        
                    </ul>
                </div>
            </Row>
        </Container>
    );
};


export default Categories;