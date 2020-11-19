import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
	state = {
		isloading: true
	};
	componentDidMount(){
		setTimeout(()=>{this.setState({isloading: false})},3000)
	}
	
	render(){
		const { isloading } = this.state;
		return(
			<div>
				{isloading ? "Loading..." : "We are ready for shit"}
			</div>
		)
		
		
	}	
}	


export default App;
