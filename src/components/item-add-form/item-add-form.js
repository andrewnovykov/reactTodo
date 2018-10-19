import React, { Component } from 'react'

import  './item-add-form.css';

class ItemAddForm extends Component {

    state = {
        label: ' '
    }

    onLabelChange = ( e ) => {

        this.setState({ label: e.target.value });

        console.log(e.target.value)
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded( this.state.label ); 
        this.setState({
            label: ''
        })
    }

    render () {
        return <form className="item-add-form"
        onSubmit={this.onSubmit}
        
        >
        <input 
            type="text"
            className="form-control"
            onChange={this.onLabelChange}
            placeholder="text"
            value = { this.state.label }

 
        />
            <button className="btn btn-outline-secondary"
               
            >Add</button>
          </form>;
    }
}

export default ItemAddForm;