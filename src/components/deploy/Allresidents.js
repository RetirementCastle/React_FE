import React from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';

class Allresidents extends React.Component{
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
               residents{
                 _id
                 name
                 state
                 gender
                 contact_name
               }
            }`,
           errorPolicy: "all",
        }).then(result =>{
            this.setState({
                data:result.data.residents,
                errors:result.errors
            });
        });
    }
    render(){
        return(
            <div>
                <Table height={'300px'} selectable={false}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The gender">Gender</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The contact's name">Contact's name</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody showRowHover={true} stripedRows={true}>
                        {this.state.data.map( (row, index) => (
                            <TableRow key={index} selected={row.selected}>
                                <TableRowColumn>{row._id}</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.state}</TableRowColumn>
                                <TableRowColumn>{row.gender}</TableRowColumn>
                                <TableRowColumn>{row.contact_name}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> 
            </div>
        );
    }
}

export default withApollo(Allresidents);