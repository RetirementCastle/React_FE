import React from 'react';
import ActionSearch from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';


var renderData;

class DeployEmpl extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: "",
            employee:{
            },
            errors:[
            ]
        };
        this.runQ = this.runQ.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    runQ(){
        this.props.client.query({
           query: gql `
             query employee($idNumber: ID!){
                employee(idNumber: $idNumber){
                 id
                 name
                 phone
               }
             }
           `,
           variables: {idNumber: this.state.id},
           errorPolicy: "all",
         })
         .then(result =>{
                 this.setState({
                     errors: result.errors,
                     employee: result.data.employee
                 });
         });
    }
    onChange(event){
        this.setState({id: event.target.value});
    }    

    render(){
        if(this.state.employee !== null){
            renderData = <div>
                <p>Nombre del empleado: {this.state.employee.name}</p>
                <p>ID:                   {this.state.employee.id}</p>
                <p>phone:               {this.state.employee.phone}</p>
                </div>
        }else if(this.state.errors !== null){
            /** TODO hacer un for que recorra el array errors e imprima todos los errores */
            renderData = <p>{this.state.errors[0].message}</p>
        }else{
            renderData= <p>Algo salio mal</p>
        }
        return(
            <div>
                <p></p>
                <TextField hintText="Search"  onChange={(e) => this.onChange(e)}/><IconButton tooltip="SVG Icon" onClick={this.runQ}tooltip="search"><ActionSearch /></IconButton>
                {renderData}
            </div>
        );
    }
}

export default withApollo(DeployEmpl);