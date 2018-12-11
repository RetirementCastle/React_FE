import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
//import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
//import PersonAdd from 'material-ui/svg-icons/social/person-add';
//import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
//import {Link} from 'react-router';
import ThemeDefault from '../../theme-default';

const styles = {
    loginContainer: {
      minWidth: 320,
      maxWidth: 400,
      height: 'auto',
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      margin: 'auto'
    },
    paper: {
      padding: 20,
      overflow: 'auto'
    },
    buttonsDiv: {
      textAlign: 'center',
      padding: 10
    },
    flatButton: {
      color: grey500
    },
    checkRemember: {
      style: {
        float: 'left',
        maxWidth: 180,
        paddingTop: 5
      },
      labelStyle: {
        color: grey500
      },
      iconStyle: {
        color: grey500,
        borderColor: grey500,
        fill: grey500
      }
    },
    loginBtn: {
      float: 'right'
    },
    btn: {
      background: '#4f81e9',
      color: white,
      padding: 7,
      borderRadius: 2,
      margin: 2,
      fontSize: 13
    },
    btnFacebook: {
      background: '#4f81e9'
    },
    btnGoogle: {
      background: '#e14441'
    },
    btnSpan: {
      marginLeft: 5
    },
  };

class LoginDep extends React.Component{
   constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
        }
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    onChange(event){
      const field = event.target.name;
      const value = event.target.value;
      return this.setState({[field]: value});
    }
    submit(){
      fetch('http://35.199.81.116:8005/api-token-auth',{
        method: 'POST',
        body: JSON.stringify({username: "admin1", password: "password123"})

      }).then((response) => {
        console.log(response)
        sessionStorage.setItem("token", response.data.token);
      }).catch((error)=>{
        console.log(error)
      })
    }
    render(){
        return(

        <MuiThemeProvider muiTheme={ThemeDefault}>
            <div style={styles.loginContainer}>
                <Paper style={styles.paper}>

                    <form>
                        <TextField hintText="E-mail" floatingLabelText="E-mail"
                                   fullWidth={true} name="user" onChange={(e) => this.onChange(e)}
                        />
                        <TextField hintText="Password" floatingLabelText="Password"
                                   fullWidth={true} type="password" name="password"
                                   onChange={(e)=> this.onChange(e)}
                        />

                        <div>
                            <Checkbox label="Remember me" style={styles.checkRemember.style}
                            labelStyle={styles.checkRemember.labelStyle}
                            iconStyle={styles.checkRemember.iconStyle}
                            />

                            <RaisedButton label="Login" primary={true}
                                          style={styles.loginBtn} onClick={(e)=> this.submit(e)}
                            />
                        </div>
                    </form>
                </Paper>
                {/*<div style={styles.buttonsDiv}>
                    <FlatButton
                    label="Register"
                    href="/"
                    style={styles.flatButton}
                    icon={<PersonAdd />}
                    />

                    <FlatButton
                    label="Forgot Password?"
                    href="/"
                    style={styles.flatButton}
                    icon={<Help />}
                    />
                </div>
                <div style={styles.buttonsDiv}>
                    <Link to="/" style={{...styles.btn, ...styles.btnFacebook}}>
                    <i className="fa fa-facebook fa-lg"/>
                    <span style={styles.btnSpan}>Log in with Facebook</span>
                    </Link>
                    <Link to="/" style={{...styles.btn, ...styles.btnGoogle}}>
                    <i className="fa fa-google-plus fa-lg"/>
                    <span style={styles.btnSpan}>Log in with Google</span>
                    </Link>
                </div>*/}
            </div>
        </MuiThemeProvider>
        )
    }
}
export default LoginDep;