import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Grid, List, Segment } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';
import ActivityDetails from '../details/ActivityDetails';

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}
/**
 * Form component to create / edit activities
 * @param { activity (renamed to selectedActivity because there will be an internal variable used) } 
 * @returns 
 */
export default function ActivityForm({activity: selectedActivity, closeForm, createOrEdit}: Props) {
  
  const initialState = selectedActivity? selectedActivity : {
    id: '', title: '', category: '', 
    description: '', date:'', city:'', venue: ''
  } as Activity;

  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    createOrEdit(activity);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
    const {name, value} = event.target;
    /* Here, 
    - we spread the existing properties of the activity by using the three dots,
    - then target the property that matches the name attribute from the input 
      element using square bracket notation specifying the property with 
      the key of [name] which should be set to the whatever the value is 
      inside the input element.
    */
    setActivity({...activity, [name]: value });
  }

  return (
    <Segment clearing>
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleInputChange}/>
            <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange}/>
            <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInputChange}/>
            <Form.Input placeholder='Date' value={activity.date} name='date' onChange={handleInputChange}/>
            <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleInputChange}/>
            <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleInputChange}/>
            <Button floated='right' positive type='submit' content='Submit' />
            <Button onClick={closeForm} floated='right' type='submit' content='Cancel' />
        </Form>
    </Segment>
  );
}