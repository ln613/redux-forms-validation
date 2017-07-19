import React from 'react';
import { connect } from 'react-redux';

class RadioButton extends React.Component {
    update = v => this.props.dispatch({ type: 'radio', name: this.props.name, value: v });

    render() {
        const p = this.props;
        const s = this.state || {};
        const v = p.form[p.name] || p.items[0].id;

        const btn = x =>
            <label className={`btn btn-default ${x.id === v ? 'active' : ''}`}>
                <input type="radio" name={p.name} value={x.id} onClick={() => this.update(x.id)} />{x.name}
            </label>;

        return (
            <div>
                <div>{p.title}</div>
                <div className="btn-group" data-toggle="buttons">{p.items.map(btn)}</div>
            </div>
        );
    }
}

export default connect(x => ({ form: x.form }))(RadioButton);