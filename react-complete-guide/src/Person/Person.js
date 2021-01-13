import React from 'react';

const person = (props) => {
    if(props.name != null && props.age == null) {
        if(props.changed == null){
            return (
                <div>
                    <p>I am a {props.name}. I am {Math.floor(Math.random()*30)} years old.</p>
                    <p>{props.children}</p>
                </div>
            )
        }
        else{
            return (
                <div>
                    <p>I am a {props.name}. I am {Math.floor(Math.random()*30)} years old.</p>
                    <p>{props.children}</p>
                    <input type="text" onChange={props.changed}></input>
                </div>
            )
        }
    }
    else if(props.name == null && props.age != null) {
        return (
            <div>
                <p>I am a person. I am {props.age} years old.</p>
                <p>{props.children}</p>
            </div>
        )
    }
    else if(props.name != null && props.age != null){
        if(props.changed == null) {
            return (
                <div>
                    <p>I am a {props.name}. I am {props.age} years old.</p>
                    <p>{props.children}</p>
                </div>
            )
        }
        else{
            return (
                <div>
                    <p>I am a {props.name}. I am {props.age} years old.</p>
                    <p>{props.children}</p>
                    <input type="text" onChange={props.changed}></input>
                </div>
            )
        }
    }
    else {
        return (
            <div>
                <p>I am a person. I am {Math.floor(Math.random()*30)} years old.</p>
                <p>{props.children}</p>
            </div>
        )
    }
}

export default person;