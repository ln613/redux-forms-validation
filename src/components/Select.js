import React from 'react';
import { connect } from 'react-redux';

class Select extends React.Component {
    update = v => this.props.dispatch({
        type: 'select',
        name: this.props.name,
        value: v,
        required: this.props.required,
        title: this.props.title
    });
    change = e => this.update(e.target.value);

    componentWillMount() {
        const p = this.props;
        const v = (p.value) || p.default || ((p.placeHolder || !p.items || p.items.length == 0) ? 0 : p.items[0].id);
        this.props.dispatch({ type: 'select', name: p.name, value: v, required: p.requried, title: p.title });
    }

    componentWillReceiveProps(p) {
        // const n = this.props.name;
        // if (this.props.form.validate[n] == null && p.form.validate[n] != null) {
        //     this.update(p.form.validate[n]);
        //     this.props.dispatch({ type: 'validate', name: n, value: null });
        // }
    }

    render() {
        const p = this.props;
        const err = p.form.errors && p.form.errors[p.name];
        const select = (<select id={p.id} name={p.name} className="form-control" value={p.value} onChange={this.change} disabled={p.disabled}>
            {p.placeHolder ? <option value="">{p.placeHolder}</option> : null}
            {(p.items || []).map(x => <option key={x.id} value={x.id} selected={`${p.selected === x.id ? 'selected' : ''}`}>{x.name}</option>)}
        </select>);

        return (
            <div>
                <div>{p.title}</div>
                <div>{select}</div>
                {err ? <div className="error">{err}</div> : null}
            </div>
        );
    }
}

export default connect(x => ({ form: x.form }))(Select);