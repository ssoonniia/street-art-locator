import React, {Component} from 'react';

class Form extends Component {
  state = {
			name: '',
			age: '',
	}

	handleNameChange = ( event ) => {
		this.setState({ name: event.target.value })
	}

	handleAgeChange = ( event ) => {
		this.setState({ age: event.target.value })
		console.log(this.state.age)
	}

	handleOnSubmit = ( event ) => {
		event.preventDefault()
		if( this.validate() ){
			alert('I was submitted')
			
		}
	
	}

	validate = () => {
		if( !this.state.name || !this.state.age ){
			return alert('Please complete all fields')
		}
	}

	render(){
		return (
			<form onSubmit={ this.handleOnSubmit }>
				<label>
					Name:
					<input type="text" value={ this.state.name } onChange={ this.handleNameChange }/>
				</label>
				<label>
					Age:
					<input type="number" value={ this.state.age } onChange={ this.handleAgeChange }/>
				</label>
				<input type="submit" value="Submit"/>
			</form>
		);
	}
}
export default Form;