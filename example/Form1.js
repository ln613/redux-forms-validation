import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { AddressBox, CheckBox, EmailBox, Form, RadioButton, Select, TextBox, InputWrapper } from '../src/components';
import Const from './const';
import styled, { css } from 'styled-components';
import { FormControl, Button } from 'react-bootstrap';
import TextField from 'material-ui/TextField';

const TB1 = styled(TextBox)`
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

const F1 = styled(Form)`
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

class Form1 extends React.Component {
    render() {
        return (
            <div className="container">
                <F1 name="form1" errorStyle={{ color: 'red' }}>
                    <TB1 title="First Name" className="t1" titleStyle={{ color: 'red' }} required />
                    <TB1 title="Last Name" name="lastName" required />
                    <TextBox title="DOB" name="dob" required />
                    <TextBox title="Phone" name="phone" required className="form-control t1" />
                    <FormControl title="PC" name="pc" type="text" required/>
                    <div>vvv</div>
                    <TextBox title="Email" name="email" className="mui-textfield" required isValid={validateEmail} />
                    <TextField hintText="Hint Text" title="Name" required />
                    <TextField name="password" floatingLabelText="Password" type="Password" required />
                    <Button bsStyle="primary" submit>Save</Button>
                {/*<div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3">
                        <TextBox title="First Name" name="firstName" required />
                    </div>
                    <div className="col-sm-3">
                        <AddressBox title="Street Address" name="streetAddress" required
                            cityBox="city" provinceBox="province" postCodeBox="postcode" />
                    </div>
                    <div className="col-sm-3"></div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3">
                        <TextBox title="Last Name" name="lastName" required />
                    </div>
                    <div className="col-sm-3">
                        <TextBox title="Street Line 2 (Optional)" name="street2" />
                    </div>
                    <div className="col-sm-3"></div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3">
                        <DatePicker title="Date of Birth" name="dob" required />
                    </div>
                    <div className="col-sm-3">
                        <TextBox title="City" name="city" required />
                    </div>
                    <div className="col-sm-3"></div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3">
                        <PhoneBox title="Personal Phone" name="phone" required />
                    </div>
                    <div className="col-sm-3">
                        <Select title="Province" name="province" items={Const.provinces}
                            placeHolder="--Province--" required />
                    </div>
                    <div className="col-sm-3"></div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3">
                        <EmailBox title="Work Email Address" name="email" required />
                    </div>
                    <div className="col-sm-3">
                        <PostCodeBox title="Postal Code" name="postcode" required />
                    </div>
                    <div className="col-sm-3"></div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6 text-right">
                        {!this.props.form.isValid ?
                            <div className="error text-right">Please fix the errors above to continue.</div>
                        : null}
                        <button onClick={this.next} className="btn btn-primary">Continue</button>
                    </div>
                    <div className="col-sm-3"></div>
                </div>*/}
                </F1>    
            </div>
        );
    }
}

export default connect(x => ({ form: x.forms }))(Form1);