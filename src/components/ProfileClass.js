import React from "react";
import { json } from "react-router-dom";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            userInfo:{
                name:"Dummy Name",
                location:"Dummy Location"
            }
        }
        console.log("Child - Constructor "+this.props.name);
    }
    async componentDidMount(){
        //We will make API Calls here
        console.log("Child - Component before calling api")
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo:json,
        })

        console.log("Child - component Did Mount "+this.props.name);
    }
    componentDidUpdate(prevProps, prevState){
        if(this.state.count != prevState.count) // Previously before usestate comes into the picture if we want perform any action after each update then we have to write like this.
        {
            //do Someting.
        }
        console.log("Child-Component DidUpdate");
    }
    componentWillUnmount(){
        console.log("child-ComponentWillUnmount");
    }
    render(){
        console.log("Child - render "+this.props.name);
        return(
        <div>
            <h1>This is Class Based Components</h1>
            <h2>Name: {this.props.name}</h2>
            <h2>location: {this.state.userInfo.location}</h2>
            <img src={this.state.userInfo.avatar_url}></img>
            <button onClick={ 
                ()=>{
                    this.setState({ count: 1,count2:2 });
                }
            }>Set Count</button>
        </div>
        )
    }
     
}

export default Profile;