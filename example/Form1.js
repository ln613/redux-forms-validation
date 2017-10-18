import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
// import { AddressBox, CheckBox, EmailBox, Form, RadioButton, Select, TextBox, InputWrapper } from '../dist/rxform';
// import { isEmail, isNumber, max, min, all, any } from '../dist/rxform';
import { AddressBox, CheckBox, EmailBox, Form, RadioButton, Select, TextBox, InputWrapper } from '../src';
import { isEmail, isNumber, max, min, all, any } from '../src';
import Const from './const';
import styled, { css } from 'styled-components';
import { FormControl, Button } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const TB1 = styled(TextBox) `
  &.rf-title {
    color: orange
  }
  &.rf-textbox {
    color: orange
  }
  &.rf-error {
    color: orange
  }
`;

const F1 = styled(Form) `
  &.rf-title {
    color: lime
  }
  &.rf-textbox {
    color: lime
  }
  &.rf-error {
    color: lime
  }
`;

const validateEmail = x => {
  if (x.length > 3) return 'too long';
  if (isNaN(+x)) return 'must be a number';
}

const makes = [{ value: 1, text: 'Lexus' }, { value: 2, text: 'Toyota' }];

class Form1 extends React.Component {
  render() {
    return (
      <div className="container">
        <F1 name="form1" className="f" errorStyle={{ color: 'red' }}>
          <TB1 title="First Name" className="t1" titleStyle={{ color: 'red' }} required />
          <TB1 title="Last Name" name="lastName" required />
          <TextBox title="DOB" name="dob" required />
          <TextBox title="Phone" name="phone" required className="form-control t1" />
          <FormControl title="PC" name="pc" type="text" required isValid={all(isNumber, max(10), min(5))} errMsg="error!" default="8" />
          <div>vvv</div>
          <TextBox title="Email" name="email" className="mui-textfield" required isValid={isEmail} />
          <TextField hintText="Hint Text" title="Name" required />
          <TextField name="password" floatingLabelText="Password" type="Password" required />
          <hr/>
          <Select title="Make" items={makes} placeholder="--Select a make--" required default={2} />
          <Select title="Make1" items={makes} required className="form-control"/>
          <FormControl title="Make2" componentClass="select" placeholder="--select m--" default="2">
            <option value="1">lexus</option>
            <option value="2">toyota</option>
          </FormControl>
          <SelectField title="Make3" floatingLabelText="Frequency">
            <MenuItem value={1} primaryText="Never" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </SelectField>
          <CheckBox title="I agree" required default={true}/>
          <hr />
          <Button bsStyle="primary" submit>Save</Button>
        </F1>
        <hr />
        <FormControl componentClass="select" placeholder="--select make--" onChange={e => console.log(e)} value="2">
          <option value="1">bmw</option>
          <option value="2">mb</option>
        </FormControl>        
      </div>
    );
  }
}

export default connect(x => ({ form: x.forms }))(Form1);