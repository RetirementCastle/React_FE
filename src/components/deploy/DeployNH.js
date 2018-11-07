import React from 'react';
import ActionSearch from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';


var renderData;

class DeployNH extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: "",
            nursinghome:{
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
             query nursinghome($idNumber: ID!){
                nursinghome(idNumber: $idNumber){
                 idnursinghome
                 name
                 branches{
                    idbranches
                    address
                    total_rooms
                    available_rooms
                 }
               }
             }
           `,
           variables: {idNumber: this.state.id},
           errorPolicy: "all",
         })
         .then(result =>{
                 this.setState({
                     errors: result.errors,
                     nursinghome: result.data.nursinghome
                 });
         });
    }
    onChange(event){
        this.setState({id: event.target.value});
    }    

    render(){
        if(this.state.nursinghome !== null){
            renderData = <div>
                <p>Nombre del asilo: {this.state.nursinghome.name}</p>
                <p>ID:                   {this.state.nursinghome.id}</p>
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

export default withApollo(DeployNH);