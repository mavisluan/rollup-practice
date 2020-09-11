import React, {useContext} from 'react';
import Logo from '../assets/kitty.jpg';
import styles from '../index.module.css';
import {AppContext} from './Store';

const Header = ({img = Logo}) => {
    const {state: {name, age}} = useContext(AppContext);
    
    return (
        <div className='text-center'>
            <h3 className={styles.title}>
                Welcome to {name}'s HomePage
            </h3>
            <p>Hi, my name is {name}. I am {age} years old.</p>
            <img alt='kitty' src={img} width='400px' className={styles['app-logo']}/>
        </div>
    )
} 

export default Header;