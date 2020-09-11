import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import moment from 'moment';
import Header from './components/Header';
import Store from './components/Store';

const App = ({url='https://www.wikipedia.org/', img}) => (
    <Store>
        <Container className='text-center'>
            <Header img={img}/>
        <Jumbotron>
                <iframe width='500px' height='500px' title='This is a test live chat frame' src={url} />
                <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            </Jumbotron> 
        </Container>
    </Store>
)

export default App;