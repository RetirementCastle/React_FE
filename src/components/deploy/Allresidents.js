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
        }
    }
    componentWillMount(){
        this.props.client.query({
            query: gql `{
               residents{
                 _id
                 name
                 state
                 gender
               }
            }`,
           errorPolicy: "all",
        }).then(result =>{
            this.setState({
                data:result.data.residents,
                errors:result.errors
            })
        });
    }
    render(){
        return(
            <div>
                {this.state.errors && <p>Ocurrio un error</p>}
                <Table height={'300px'}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody showRowHover={true} stripedRows={true}>
                        {this.state.data.map( (row, index) => (
                            <TableRow key={index} selected={row.selected}>
                                <TableRowColumn>{index}</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.state}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> 
            </div>
        );
    }
}

export default withApollo(Allresidents);