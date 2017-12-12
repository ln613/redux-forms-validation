import React, { Component } from 'react';
import { Form, TextBox, CheckBox, Select } from 'redux-forms-validation';
import { Dropdown } from 'semantic-ui-react';
import './App.css';

const makes = [{ value: 1, text: 'Lexus' }, { value: 2, text: 'Toyota' }];

class App extends Component {
  render() {
    return (
      <div>
        <Form name="form1">
          <TextBox title="Last Name" required />
          <CheckBox title="I agree" required default={true} />
          <Select title="Make 1" items={makes} placeholder="--Select a make--" required default={2} />
          <Dropdown title="Make 2" placeholder='--Select Make--' fluid selection options={makes} required />
          <button submit>Submit</button>
        </Form>
      </div>
    );
  }
}

export default App;
