import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
	state = {
		isloading: true,
		movies: []
	};

	getMovies = async () => {
		const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
		console.log(movies)
		this.setState({movies:movies, isloading:false})
	}


	componentDidMount(){
		this.getMovies();
	}
	
	render(){
		const { isloading, movies } = this.state;
		return(
			<section className="container">
				{isloading ? (
				<div className="loader">
						<span className="loader_text">Loading...</span>
				</div>
				): <div className="movies">
					{movies.map(movies =>{
					console.log(movies);
					return <Movie key={movies.id} id={movies.id} year={movies.year} title={movies.title} summary={movies.summary} poster={movies.medium_cover_image} genres={movies.genres}/>
				})}
				</div>
				}
			</section>
		)
		
		
	}	
}	


export default App;
