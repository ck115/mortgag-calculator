import React, {useState} from "react";
//use state allows one to add states to funcitonal components

const buttonExample = () => {

    /* 
        isOn = the variable that contains the state of the button
        setIsOn = a function that is called to update the state stored in "isOn"
        useState(false) = means that we are going to start off the button in Off state
    */
    const [isOn, setIsOn] = useState(false);

    const toggle = () => setIsOn(!isOn);

    return (
        <button onClick={toggle}> {isOn? "On" : "Off" }</button>
    );
};

export default buttomExample;