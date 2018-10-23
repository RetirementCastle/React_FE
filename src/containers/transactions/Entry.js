import React, {Component} from 'react';
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import PageBase from '../../components/PageBase';


const styles = {
  floatingActionButton: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
  editButton: {
    fill: grey500
  },
  columns: {
    id: {
      width: '10%'
    },
    name: {
      width: '40%'
    },
    price: {
      width: '20%'
    },
    category: {
      width: '20%'
    },
    edit: {
      width: '10%'
    }
  }
};

class Entry extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

  componentWillMount(){
    fetch('http://localhost:8000/transaction')
      .then(
        response => response.json()
      )
      .then(items =>{
        items.results.forEach(item => {
          let data = {
            id: item.id,
            contact_name: item.contact_name,
            total_amount: item.total_amount,
            balance: item.balance,
            observation: item.observation
          }
          this.setState({items:this.state.items.concat([data])})
        })


      });
  }


  render() {

    return (
      <PageBase title="Ingresos"
                navigation="Home / Ingresos">

        <div>
          <Link to="/form" >
            <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500}>
              <ContentAdd />
            </FloatingActionButton>
          </Link>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn style={styles.columns.id}>ID</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.name}>Nombre</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.price}>Total</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.category}>Saldo</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.edit}></TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.state.items.map(item =>
                <TableRow key={item.id}>
                  <TableRowColumn style={styles.columns.id}>{item.id}</TableRowColumn>
                  <TableRowColumn style={styles.columns.name}>{item.contact_name}</TableRowColumn>
                  <TableRowColumn style={styles.columns.price}>{item.total_amount}</TableRowColumn>
                  <TableRowColumn style={styles.columns.category}>{item.balance}</TableRowColumn>
                  <TableRowColumn style={styles.columns.edit}>
                    <Link className="button" to="/form">
                      <FloatingActionButton zDepth={0}
                                            mini={true}
                                            backgroundColor={grey200}
                                            iconStyle={styles.editButton}>
                        <ContentCreate  />
                      </FloatingActionButton>
                    </Link>
                  </TableRowColumn>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </PageBase>
    );
  }


}


export default Entry;
