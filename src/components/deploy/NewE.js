import React from 'react';
import { withApollo } from 'react-apollo';
import ActionSearch from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import gql from 'graphql-tag';

class NewE extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            errors:[]
        }
        this.onChange = this.onChange.bind(this);
        this.checkState = this.checkState.bind(this);
    }
    checkState(){
        return console.log(this.state.data)
    }
    onChange(event){
        const field = event.target.name;
        const tempdata = this.state.data;
        const value = event.target.value;
        const type = event.target.type;
        if(type === "number"){
            tempdata[field] = parseInt(value);
        }else{
            tempdata[field] = value;
        }
        return this.setState({data: tempdata});
    }
    render(){
        return(
            <div>
                <TextField hintText="Nombre" name="name" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Edad" type="number" name="age" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Título" name="tittle" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Correo electrónico" name="email" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Salario" type="number" name="salary" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Sede" type="number" name="headquarter" onChange={(e) => this.onChange(e)}/><br/>
                <IconButton tooltip="SVG Icon" onClick={this.checkState}tooltip="search"><ActionSearch /></IconButton>
            </div>
        )
    }

}

export default withApollo(NewE);