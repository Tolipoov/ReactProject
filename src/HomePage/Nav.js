import React, { Component } from 'react';
import '../styles/main.scss'
import navLogo from './Images/Tolipov.png'
import Cart from './Images/imagesIcon/shopping-cart.png'
import Account from './Images/imagesIcon/account.png'
import Like from './Images/imagesIcon/love.png'
import SearchIcon from '@material-ui/icons/Search'
import ResponModal from './ResponModal';
import { Container, Row } from 'reactstrap';

const Nav = () =>{
        return (
            <>
             <Container>
                 <Row>
                    <nav className='navigation'>
                        <a href='#' alt="nav-logo">
                            <img src={navLogo} width="150px" alt="Navbar Logo"/>    
                        </a>
                        <ResponModal/>
                        <div className='searchSec'>
                            <form>
                                <input type="text" className='searchInput' placeholder='Search'/> 
                                <button type="button" className='searchBtn'><SearchIcon/></button>  
                            </form>
                        </div>
                        <div className='icons'>
                            <a href="#" className='iconSec'>
                                <img src={Like} alt="Like icon"/>
                            </a>
                            <a href="#" className='iconSec'>
                                <img src={Cart} alt="Cart icon"/>
                            </a>
                            <a href="#" className='iconSec'>
                                <img src={Account} alt="Account icon"/>
                            </a>
                        </div>    
                    </nav>   
                 </Row>
             </Container>
            </>
        );
}
export default Nav; 