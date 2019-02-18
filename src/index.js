import React from 'react'
import { render } from 'react-dom'

class FavoriteColorForm extends React.Component {
	state = { value: ''}

    newColor = e => 
        // Set state is going to take in this object, where value will be the key, and e.target.value is going to be the new value
		this.setState({ value: e.target.value })

	submit = e => {
		console.log(`New Color: ${this.state.value}`)
		e.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.submit}>
				<label>
					Favorite Color: 
					<input 
						type="color"
						onChange={this.newColor} />
				</label>
				<button>Submit</button>
			</form>
		)
	}
}


render(
	<FavoriteColorForm />, 
	document.getElementById('root')
)
