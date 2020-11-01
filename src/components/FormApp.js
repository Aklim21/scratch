import React, {Component} from "react"
import FormGUI from "../components/FormGUI"

class FormApp extends Component {
    constructor() {
        super()
        this.state = {
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            nuts: false,
            destination: "London"
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    changeHandler(event){
        const {name, value, type, checked} = event.target

            type === "checkbox"? this.setState({[name]: checked}):
            this.setState({[name]: value})
    }
    


    handleSubmit(event){
        alert(
            'Thanks for your Submission:  \n' +
            'Name: ' +this.state.firstName +this.state.lastName+ '\n' +
            'Your age: ' + this.state.age + '\n' +
            'Your gender: '+this.state.gender+ '\n' +
            'Your destination: '+this.state.destination+ '\n' +
            'Your dietary restrictions: \n' +
            'Nuts: '+ this.state.nuts 
        )
        event.preventDefault()
    }
    render() {
        return(
            <FormGUI
                changeHandler={this.changeHandler}
                handleSubmit={this.handleSubmit}
                data={this.state}
            />
        )
    }
}

export default FormApp
