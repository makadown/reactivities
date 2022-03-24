import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from '../../models/activity';

function App() {
  const [activities, setActivites] = useState<Activity[]>([]);

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
