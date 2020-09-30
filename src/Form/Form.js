import React, { Component } from 'react'
import Button from '../Button/Button.js';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            calories: "",
            image: "",
        };
    }

    render() {
        return (
            <>
        <br/>
         <Button children="Add New"/>
         <br/>

        <label>Name<input type="text" name="name" value={this.state.name} ></input></label><br/>
        <label>Calories<input type="text" name="calories" value={this.state.calories} ></input></label><br/>
        <label>Image Url<input type="text" name="image" value={this.state.image} ></input></label>

        <Button children="Submit"/>
           
        </>
        )
    }
}
