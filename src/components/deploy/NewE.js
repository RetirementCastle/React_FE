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

class NewE extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{},
            errors:[],
            status: true,
            date: "",
        }
        this.onChange = this.onChange.bind(this);
        this.runM = this.runM.bind(this);
    }
    componentWillMount(){
        return this.setState({date: today})
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
    runM(){
        this.props.client.mutate({
            mutation: gql `
                mutation newEmployee($correo: String!
                                     $token: String!
                                     $name: String
                                     $age: Int
                                     $title: String
                                     $email: String
                                     $salary: Int
                                     $headquarter: ID
                                     $status: Boolean
                                     $username: String
                                     $password: String
                                     $identification: String
                                     $phone: String
                                     $ip: String
                                     $newtoken: String
                                     $operation: Int
                                     $created_at: String
                                     $last_login: String){
                    newEmployee(correo: $correo
                                token: $token
                                name: $name
                                age: $age
                                title: $title
                                email: $email
                                salary: $salary
                                headquarter: $headquarter
                                status: $status
                                username: $username
                                password: $password
                                identification: $identification
                                phone: $phone
                                ip: $ip
                                newtoken: $newtoken
                                operation: $operation
                                created_at: $created_at
                                last_login: $last_login)
                }
            `,
            variables:{correo: sessionStorage.getItem("user"),
                       token: sessionStorage.getItem("token"),
                       name: this.state.data.name,
                       age: this.state.data.age,
                       title: this.state.data.title,
                       email: this.state.data.email,
                       salary: this.state.data.salary,
                       headquarter: this.state.data.headquarter,
                       status: this.state.status,
                       username: this.state.data.username,
                       password: this.state.data.password,
                       identification: this.state.data.identification,
                       phone: this.state.data.phone,
                       ip: this.state.data.ip,
                       newtoken: this.state.data.newtoken,
                       operation: this.state.data.operation,
                       created_at: this.state.date,
                       last_login: this.state.date},
            errorPolicy: "all",
        }).then(result =>{
            console.log(result);
        });
    }
    render(){
        return(
            <div>
                <TextField hintText="Nombre" name="name" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Edad" type="number" name="age" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Título" name="title" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Correo electrónico" name="email" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Salario" type="number" name="salary" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Sede" type="number" name="headquarter" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Nombre de usuario" name="username" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Contraseña" type="password" name="password" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="ID" name="identification" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Teléfono" name="phone" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="IP" name="ip" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Token" name="newtoken" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Operación" type="number" name="operation" onChange={(e) => this.onChange(e)}/><br/>
                <IconButton tooltip="SVG Icon" onClick={this.runM}tooltip="search"><ActionSearch /></IconButton>
            </div>
        )
    }

}

export default withApollo(NewE);