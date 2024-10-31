
import './App.css';
import React from 'react';
import { fetchCustomers } from './asyncAction/customers';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const users = useSelector(state => state)

  const getUsersHandler = () => {
    dispatch(fetchCustomers())
  }

  return (
    <div className = 'app'>
      <button className='getUsersBtn' onClick={getUsersHandler}>Получить пользователей</button>
      {users.map((el,i) =>{
        return(<h1 key={i}>{el.name}</h1>)
      })}
    </div>
  );
}

export default App;
