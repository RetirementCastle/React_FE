import React from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';

class AllNH extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            errors:[],
        };
    }
    componentWillMount(){
        this.props.client.query({
            query: gql `{
                query nursinghomes($correo: String!
                                   $token: String!){
                    nursinghomes(correo: $correo
                                 token: $token){
                        idnursinghome
                        name
                    }
                }
            }`,
            variables:{correo: sessionStorage.getItem("user"),
                       token: sessionStorage.getItem("token")},
           errorPolicy: "all",
        }).then(result =>{
            this.setState({
                data:result.data.nursinghomes,
                errors:result.errors
            });
        });
    }
    render(){
        return(
            <div>
                <Table height={'300px'}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody showRowHover={true} stripedRows={true}>
                        {this.state.data.map( (row, index) => (
                            <TableRow key={index} selected={row.selected}>
                                <TableRowColumn>{row.idnursinghome}</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> 
            </div>
        );
    }
}

export default withApollo(AllNH);