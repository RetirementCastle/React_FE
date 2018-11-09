import React from 'react';
import { withApollo } from 'react-apollo';
import ActionSearch from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import gql from 'graphql-tag';

const date = new Date();
var dd = date.getDate();
var mm = date.getMonth()+1; //January is 0!
const yyyy = date.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
let today = yyyy+'-'+mm+'-'+dd;
class NewR extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{},
            errors:[],
            date: "",
        }
        this.onChange = this.onChange.bind(this);
        this.runM = this.runM.bind(this);
    }
    componentWillMount(){
        return this.setState({date: today})
    }
    runM(){
        this.props.client.mutate({
            mutation: gql `
                mutation newResident($name: String!
                                     $birth_date: String!
                                     $admission_date: String!
                                     $gender: String!
                                     $state: String
                                     $contact_name: String
                                     $contact_phone: Int
                                     $diseases: String){
                    newResident(name: $name
                                birth_date: $birth_date
                                admission_date: $admission_date
                                gender: $gender
                                state: $state
                                contact_name: $contact_name
                                contact_phone: $contact_phone
                                diseases: $diseases){
                        _id
                    }

                }
            `,
            variables:{name:this.state.data.name,
                       birth_date: this.state.data.birth_date,
                       admission_date: this.state.date,
                       gender: this.state.data.gender,
                       state: this.state.data.state,
                       contact_name: this.state.data.contact_name,
                       contact_phone: this.state.data.contact_phone,
                       diseases: this.state.data.diseases},
            errorPolicy: "all",
        }).then(result =>{
            console.log(result);
        });
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
                <TextField  name="birth_date" type="date" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Género" name="gender" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Estado" name="state" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Nombre de contacto" name="contact_name" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Número de contacto" type="number" name="contact_phone" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Enfermedades" name="diseases" onChange={(e) => this.onChange(e)}/>
                <IconButton tooltip="SVG Icon" onClick={this.runM}tooltip="search"><ActionSearch /></IconButton>
                
            </div>
        )
    }

}

export default withApollo(NewR);