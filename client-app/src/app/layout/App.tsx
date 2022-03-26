import React, { Fragment, useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../../models/activity';
import NavBar from './NavBar';

function App() {
  const [activities, setActivites] = useState<Activity[]>([]);

  useEffect(
    () => {
      // first
      axios.get('http://localhost:5000/api/activities').then((response) => {
        setActivites(response.data);
      });
      /*return () => {
      second
    }*/
    },
    [
      /*third*/
    ]
  );

  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
        <List>
          {activities.map((activity) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </Container>
    </>
  );
}

export default App;
