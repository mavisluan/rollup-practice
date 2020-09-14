import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const AppContext = createContext();

const Store = ({children}) => {
    let [state, setState] = useState({
        name: "Jane Doe",
        age: 2
      });
      const incrementAge = () => {
        setState(prevState => ({
          ...prevState,
          age: state.age + 1
        }));
      };
      const decrementAge = () => {
        setState(prevState => ({
          ...prevState,
          age: state.age - 1
        }));
      };

      const setName = (name) => {
        setState(prevState => ({
          ...prevState,
          name
        }));
      };

      const [users, setUsers] = useState([]);
 
      const fetchUsers = async () => {
         try {
           const {data: {users}} = await axios.get('/api/users');
          setUsers(users);
         } catch (error) {
           console.log('err', error);
         }
      }

      useEffect(() => {
        fetchUsers()
      }, [])

    return (
        <AppContext.Provider value={{ state, incrementAge, decrementAge, setName, fetchUsers, users }}>
            {children}
        </AppContext.Provider>
    )
}

export default Store;