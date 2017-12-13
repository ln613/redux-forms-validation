import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, TextBox, CheckBox, Select, min, isPhone } from 'redux-forms-validation';
import { Dropdown, Checkbox, Input } from 'semantic-ui-react';
import './App.css';

const makes = [{ value: 1, text: 'Lexus' }, { value: 2, text: 'Toyota' }];

class App extends Component {
  render() {
    return (
      <div>
        <Form name="form1">
          <TextBox title="Last Name" required />
          <CheckBox title="I agree 1" required default={true} />
          <Input name="input1" isValid={min(5)} />
          <Input title="Phone Number" isValid={isPhone} />
          <Checkbox label="aaa" name="iAgree2" toggle />
          {/* <Checkbox radio name="r1" value="1"/>
          <Checkbox radio name="r1" value="2"/> */}
          <Select title="Make 1" items={makes} placeholder="--Select a make--" required default={2} />
          <Dropdown title="Make 2" placeholder='--Select Make--' fluid selection options={makes} required />
          <button submit onClick={() => alert(this.props.form.lastName)}>Submit</button>
        </Form>
      </div>
    );
  }
}

export default connect(s => ({ form: s.forms.form1 }))(App);
