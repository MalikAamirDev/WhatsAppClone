import React, {useState} from 'react';
import Context from './Context';
import {theme} from '../utils/utils';

const ContextWrapper = props => {
  const [rooms, setRooms] = useState([]);

  return (
    <>
      <Context.Provider value={{theme}}>{props.children}</Context.Provider>
    </>
  );
};

export default ContextWrapper;
