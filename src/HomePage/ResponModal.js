import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import SearchIcon from '@material-ui/icons/Search'

const ResponModal = () => {

    const [modal, setModal]= useState(false);
    const toggle =()=>setModal(!modal);

    return (
        <div className='ResponsiveModal'>
            <Button  onClick={toggle} >
            <SearchIcon/>    
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Search
                </ModalHeader>
                <ModalBody>
                    <div className='searchSec'>
                        <form>
                            <input type="text" className='searchInput' placeholder='Search'/> 
                            <button type="button" className='searchBtn'><SearchIcon/></button>  
                        </form>
                    </div>
             </ModalBody>
            </Modal>
        </div>
    );
};

export default ResponModal;