import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { AddressBox, CheckBox, EmailBox, Form, RadioButton, Select, TextBox } from '../src/components';
import Const from './const';

class Form1 extends React.Component {
    render() {
        return (
            <div className="container">
                <Form name="form1">
                    <TextBox title="First Name" name="firstName" required />
                    <TextBox title="Last Name" name="lastName" required />
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
                </Form>    
            </div>
        );
    }
}

export default connect(x => ({ form: x.forms }))(Form1);