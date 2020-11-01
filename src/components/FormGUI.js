import React from 'react';

function FormGUI(props){
    return (
        <main className="formGUI">
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="firstName" value={props.data.firstName} placeholder="First Name" onChange={props.changeHandler} /><br />
                <input type="text" name="lastName" value={props.data.lastName} placeholder="Last Name" onChange={props.changeHandler} /><br />
                <input type="text" name="age" value={props.data.age} placeholder="Age" onChange={props.changeHandler} /><br />
            
                <label> 
                    <input  
                        type="radio"  
                        name="gender" 
                        value="male" 
                        checked={props.data.gender === "male"} 
                        onChange={props.changeHandler} 
                    /> Male 
                </label> 

                <label> 
                    <input  
                        type="radio"  
                        name="gender" 
                        value="female" 
                        checked={props.data.gender === "female"} 
                        onChange={props.changeHandler} 
                    /> Female
                </label>                    
                <br />
                <br />
                
                <label>Destination: </label>
                <select name="destination" value={props.data.destination} onChange={props.changeHandler}>
                    <option value="London">London</option>
                    <option value="Sydney">Sydney</option>
                    <option value="Toronto">Toronto</option>
                </select>
                <br />
                <br/>
                <label>
                <input type="checkbox" name="nuts" checked={props.data.nuts} onChange={props.changeHandler}/>
                Nut Allergy? 
                </label>
                <br />
                <br/>
                <button>Submit</button>
            </form>
            <hr />
            <h2 >Entered information:</h2>
            <p>Name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary restrictions: </p>
            <p>Nuts: {props.data.nuts}</p>
        </main>
    )
}

export default FormGUI;