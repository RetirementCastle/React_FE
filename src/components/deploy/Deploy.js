import React from 'react';
import ActionSearch from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';


var renderData;

class Deploy extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: "",
            resident:{
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
             query resident($idNumber: String!){
               resident(idNumber: $idNumber){
                 _id
                 name
                 state
                 gender
               }
             }
           `,
           variables: {idNumber: this.state.id},
           errorPolicy: "all",
         })
         .then(result =>{
                 this.setState({
                     errors: result.errors,
                     resident: result.data.resident
                 });
         });
    }
    onChange(event){
        this.setState({id: event.target.value});
    }    

    render(){
        if(this.state.resident !== null){
            renderData = <div>
                <p>Nombre del residente: {this.state.resident.name}</p>
                <p>ID:                   {this.state.resident._id}</p>
                <p>Estado:               {this.state.resident.state}</p>
                <p>Género:               {this.state.resident.gender}</p>
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

export default withApollo(Deploy);