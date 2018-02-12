import React, { Component } from 'react';
import trim from 'trim';

class MessageBox extends Component{
    constructor(props){
        super(props);
        this.state={
            message:''
        };
        this.onChange=this.onChange.bind(this);
        this.onKeyUp=this.onKeyUp.bind(this);
    }
    onChange(e){
        this.setState({message: e.target.value});
    }
    onKeyUp(e){
        if(e.keyCode===13 && trim(e.target.value)!==''){
            e.preventDefault();
            let dbCon=this.props.db.database().ref('/messages');
            dbCon.push({
                message: trim(e.target.value)
            });
            this.setState({message: ''});
        }
    }

        

    
    render(){
        return(
            <form>
                <textarea className="textarea" placeholder="Type a message" cols="100"
                onChange={this.onChange}
                onKeyUp={this.onKeyUp}
                value={this.state.message}
                ></textarea>
            </form>
        );
    }
}
export default MessageBox