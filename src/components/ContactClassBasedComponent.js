import React from "react";
class ContactClassBasedComponent extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render(){
        return (
        <><h1> Contact Us Class Component</h1>
    <h2>Name: {this.props.name}</h2>
    <h2>809646635</h2>
    </>)
    }
}

export default ContactClassBasedComponent