import React from 'react';
import ProductItem from './Products.json'
import { Container, Row } from 'reactstrap';

const Products = props => {
    return (
      <div className='BackgroundColor'>
        <Container>
            <Row>
            <div className='ProductBg'>
                <div className='titles'>
                    <p>Explore awesome products</p>
                    <h4>Recomended for you</h4>    
                </div>
                <div className='Cards'>
                    {ProductItem.map((post) => {
                        return(
                            <div className='ProductCards'>
                                <img src={post.img}/>
                                <h5>{post.name}</h5>
                                <p>{post.description}</p>
                                <p className='price'> {post.price}</p>
                                <button className='Buynow'>{post.buy}</button>
                            </div>
                        )
                    })}
                </div>
                <div className='buttonArea'>
                    <a href="#" className='exploreBtn'>Explore Other Products</a>
                </div>
            </div>
            </Row>
        </Container>
      </div>
    );
};

export default Products;