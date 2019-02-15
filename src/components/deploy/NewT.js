import React from 'react';
import { withApollo } from 'react-apollo';
import ActionSearch from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import gql from 'graphql-tag';



class NewT extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{},
            errors:[],
            status: true,
        };
        this.onChange = this.onChange.bind(this);
        this.runM = this.runM.bind(this);
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
                mutation newTransaction($correo: String!,
                                        $token: String!,
                                        $type_transation_id: Int!,
                                        $total_amount: Int,
                                        $observation: String,
                                        $balance: Int,
                                        $contact_name: String,
                                        $quantity: Int,
                                        $subtotal: Int
                                     ){
                    newTransaction(correo: $correo
                                    token: $token
                                    type_transation_id: $type_transation_id
                                    total_amount: $total_amount
                                    observation: $observation
                                    balance: $balance
                                    contact_name: $contact_name
                                    quantity: $quantity
                                    subtotal: $subtotal
                                )
                }
            `,
            variables:{correo: "mail@mail",
                       token: "sasa",
                       type_transation_id: this.state.data.type_transation_id,
                       total_amount: this.state.data.total_amount,
                       observation: this.state.data.observation,
                       balance: this.state.data.balance,
                       contact_name: this.state.data.contact_name,
                       quantity: this.state.data.quantity,
                       subtotal: this.state.data.subtota},
            errorPolicy: "all",
        }).then(result =>{
            console.log(result);
        });
    }
    render(){
        return(
            <div>
                <TextField hintText="Tipo transacción" type="number" name="type_transation_id" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Cantidad Total" type="number" name="total_amount" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Observaciones" name="observation" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Balance" type="number" name="balance" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Nombre de contacto" name="contact_name" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Cantidad" type="number" name="quantity" onChange={(e) => this.onChange(e)}/><br/>
                <TextField hintText="Sub-total" type="number" name="subtotal" onChange={(e) => this.onChange(e)}/><br/>
                <IconButton tooltip="SVG Icon" onClick={this.runM}tooltip="search"><ActionSearch /></IconButton>
            </div>
        );
    }

}

export default withApollo(NewT);