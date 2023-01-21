import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Logo from './components/Logo';
import Card from './components/Card';
import Landing from './components/Landing';
import Error from './components/Error';
import Credentials from './Credentials';
import './App.css';

function App() {
	const [data, setData] = useState({});
	const [location, setLocation] = useState('');
	const [errIsVisible, setErrIsVisible] = useState(false);
	const [err, setErr] = useState('');

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${Credentials.weatherKey}&lang=en`;

	const searchLocation = event => {
		if (event.key === 'Enter') {
			axios
				.get(url)
				.then(response => {
					setData(response.data);
					setErrIsVisible(false);
					console.log(response.data);
				})
				.catch(response => {
					setErr(response.response.data.cod);
					setErrIsVisible(true);
				});
			setLocation('');
		}
	};

	return (
		<section className="app">
			{errIsVisible && <Error err={err} />}
			{data.main ? null : <Landing />}
			<header className="header">
				<div className="logo">
					<Logo />
				</div>
				<div className="search">
					<Search
						location={location}
						setLocation={setLocation}
						searchLocation={searchLocation}
					/>
				</div>
				<div className="social">
					<a href="https://github.com/tmsbenitez">
						<i class="bi bi-github"></i>
					</a>
					<a href="https://www.linkedin.com/in/tmsbenitez/">
						<i class="bi bi-linkedin"></i>
					</a>
				</div>
			</header>
			<div className="main">
				{data.main ? (
					<Card
						name={data.name}
						country={data.sys.country}
						temp={data.main.temp}
						description={data.weather[0].description}
						icon={data.weather[0].icon}
						speed={data.wind.speed}
						humidity={data.main.humidity}
						pressure={data.main.pressure}
						deg={data.wind.deg}
						lat={data.coord.lat}
						lon={data.coord.lon}
						tempMin={data.main.temp_min}
						tempMax={data.main.temp_max}
						feelsLike={data.main.feels_like}
					/>
				) : null}
			</div>
			<footer className="footer">
				<div className="footer_social">
					<a href="#a">
						<i class="bi bi-github"></i>
					</a>
					<a href="#a">
						<i class="bi bi-linkedin"></i>
					</a>
				</div>
			</footer>
		</section>
	);
}

export default App;
