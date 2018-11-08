import React from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';

class AllTrans extends React.Component{
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
                transactions{
                    id
                    total_amount
                    type_transation_id
               }
            }`,
           errorPolicy: "all",
        }).then(result =>{
            this.setState({
                data:result.data.transactions,
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
                            <TableHeaderColumn tooltip="The Total Amount">Total Amount</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Type">Type</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody showRowHover={true} stripedRows={true}>
                        {this.state.data.map( (row, index) => (
                            <TableRow key={index} selected={row.selected}>
                                <TableRowColumn>{row.id}</TableRowColumn>
                                <TableRowColumn>{row.total_amount}</TableRowColumn>
                                <TableRowColumn>{row.type_transation_id}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> 
            </div>
        );
    }
}

export default withApollo(AllTrans);