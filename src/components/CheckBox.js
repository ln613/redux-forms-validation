import React from 'react';
import { connect } from 'react-redux';

class CheckBox extends React.Component {
    update = v => this.props.dispatch({ type: 'checkbox', name: this.props.name, value: v });
    change = e => this.update(e.target.checked);

    render() {
        const p = this.props;

        return (
            <div>
                <label>
                    <input type="checkbox" id={p.id || p.name} name={p.name} value={p.form[p.name]}
                        onChange={this.change} disabled={p.disabled} />&nbsp;
                    {p.title}
                 </label>
            </div>
        );
    }
}

export default connect(x => ({ form: x.form }))(CheckBox);