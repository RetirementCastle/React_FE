import React from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';

class Allemployees extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            errors:[],
        }
    }
    componentWillMount(){
        this.props.client.query({
            query: gql `{
                employees{
                    id
                    name
                    title
                    headquarter
               }
            }`,
           errorPolicy: "all",
        }).then(result =>{
            this.setState({
                data:result.data.employees,
                errors:result.errors
            })
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
                            <TableHeaderColumn tooltip="The Role">Role</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Headquarter">Headquarter</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody showRowHover={true} stripedRows={true}>
                        {this.state.data.map( (row, index) => (
                            <TableRow key={index} selected={row.selected}>
                                <TableRowColumn>{row.id}</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.title}</TableRowColumn>
                                <TableRowColumn>{row.headquarter}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> 
            </div>
        );
    }
}

export default withApollo(Allemployees);