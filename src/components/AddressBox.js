import React from 'react';
import { connect } from 'react-redux';
import TextBox from './TextBox';

class AddressBox extends React.Component {
    autoFill = (name, box, address) => {
        let t = address.address_components.filter(x => x.types.length > 0 && x.types[0] === name);
        if (t && box)
            this.props.dispatch({ type: 'validate', name: box, value: t[0].short_name });
    }

    componentDidMount() {
        // const p = this.props;
        // const autoComplete = new window.google.maps.places.Autocomplete(document.getElementById(p.id || p.name), {
        //     componentRestrictions: { country: 'ca' },
        //     types: ['geocode']
        // });
        // this.setState({ autoComplete });

        // autoComplete.addListener('place_changed', () => {
        //     const address = autoComplete.getPlace();
        //     if (address && address.address_components) {
        //         this.props.dispatch({ type: 'validate', name: p.id || p.name, value: address.formatted_address.split(',')[0] });

        //         this.autoFill('locality', p.cityBox, address);
        //         this.autoFill('administrative_area_level_1', p.provinceBox, address);
        //         this.autoFill('postal_code', p.postCodeBox, address);
        //     }
        // });
    }

    render() {
        return (
            <TextBox {...this.props} />
        );
    }
}

export default connect(x => ({ form: x.form }))(AddressBox);