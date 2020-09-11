import React, {createContext, useState} from 'react';

export const AppContext = createContext();

const Store = ({children}) => {
    let [state, setState] = useState({
        name: "Jane Doe",
        age: 1
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
 

    return (
        <AppContext.Provider value={{ state, incrementAge, decrementAge, setName }}>
            {children}
        </AppContext.Provider>
    )
}

export default Store;