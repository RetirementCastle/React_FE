import React from 'react';
import ActionSearch from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

const sample = {
    id: "1231412",
    name:"jorge",
    status:"malito"
};

class Deploy extends React.Component{
    constructor(props){
        super(props);
        this.state={
            resident:{
            }
        };
        this._handleClick = this._handleClick.bind(this);
    }
    _handleClick(){
        this.setState({
            resident: sample,
        });
    }
    render(){
        return(
            <div>
                <p></p>
                <TextField hintText="Search"/><IconButton tooltip="SVG Icon" onClick={this._handleClick}tooltip="search"><ActionSearch /></IconButton>
                <p>{this.state.resident.id}</p>
                <p>{this.state.resident.name}</p>
                <p>{this.state.resident.status}</p>
            </div>
        );
    }
}

export default Deploy;