import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import moment from 'moment';
import Header from './components/Header';
import Store from './components/Store';

const App = ({ img}) => {
    return (
    <Store>
        <Container className='text-center'>
            <Header img={img}/>
            <Jumbotron>
                <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            </Jumbotron> 
        </Container>
    </Store>
)
} 

export default App;