import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users:[
    {username:'StaticUsername'},
    {username:'DynamicUsername'}
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      users:[
        {username:'StaticUsername'},
        {username:event.target.value}
      ]
    });
  };
  

  updateNameHandler = (updatedusername) => {
    this.setState({
      users:[
        {username:'StaticUsername'},
        {username:updatedusername},
        {username:'Username3'}
      ]
    });
  };
 
  render() {

    const style = {
      width: '50%',
      border: '2px solid green',
      padding: '25px',
      margin: '25px', 
        backgroundColor:'lightblue',
        borderStyle:'dotted dashed solid double',        
        align:'center',
        color:'blue',
        fontFamily:'Times New Roman'     
          
    }


    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserOutput username='StaticUsername' description="This is a static username passed as a prop"></UserOutput>
        <UserOutput username={this.state.users[1].username} description="Click here to update the username as Username2" clicked={this.updateNameHandler.bind(this, 'Username2')}></UserOutput>
        <div style={style}><UserInput name='UserInput: ' username={this.state.users[1].username} changed={this.nameChangeHandler.bind(this)}></UserInput></div>
        </div>
    );
  }
}

export default App;
