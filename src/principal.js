import React, { Component } from 'react';
import PrincipalConteiner from './componets/teste2';

class principal extends Component {
    constructor (){
        super()
        this.state = {
            name: '',
        }
        this.handleClickButton = this.handleClickButton.bind(this);
    }

    handleClickButton(value){
        this.setState({
            name: value
        })
    }

    render() {
        return (
        <div>
            <PrincipalConteiner name={this.state.name} handleClickButton={this.handleClickButton}/>
        </div>
        );
    }
}

export default principal;