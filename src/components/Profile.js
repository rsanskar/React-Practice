import { useEffect, useState } from "react";

//functional Component
const Profile = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(()=>{
        //console.log("UseEffct");
    })
    //console.log("render");
    return(
    <div>
        <h1>This is the Profile Functional Component</h1>
        <h2>Name: {props.name}</h2>
        <h2>Count: {count}</h2>
        <h2>Count2: {count2}</h2>
        <button onClick={()=>{
            setCount(1)
            setCount2(2)
            }
        }>Set Count</button>
    </div>
    )
} 

export default Profile;

