import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivites] = useState([]);

  useEffect(() => {
    // first
    axios.get('http://localhost:5000/api/activities')
      .then( response => {
        console.log(response);
        setActivites(response.data);
      });
    /*return () => {
      second
    }*/
  }, [/*third*/]);
  

  return (
    <div >
      <Header as='h2' icon='users' content="Reactivities"/>
        <List>
          {activities.map( activity => (
            <List.Item key={activity.id}>
              { activity.title }
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
