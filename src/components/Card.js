import React from 'react';
import './Card.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Card = (props, { in: inProp }) => {
	const {
		name,
		temp,
		description,
		icon,
		country,
		speed,
		humidity,
		deg,
		tempMin,
		tempMax,
		feelsLike,
	} = props;

	const Direction = () => {
		if (deg >= 0 && deg < 90) {
			return 'North';
		} else if (deg >= 90 && deg < 180) {
			return 'East';
		} else if (deg >= 180 && deg < 270) {
			return 'South';
		} else return 'West';
	};

	const isDay = icon.includes('d') ? 'isDay' : 'isNight';
	const isRaining = description.includes('rain') ? 'isRaining' : '';
	const isStorm = description.includes('thunderstorm') ? 'isStorm' : '';

	return (
		<div className={`card ${isDay} ${isRaining} ${isStorm}`}>
			<div className="location">
				<div className="location__div">
					<h1 className="city">
						<i class="bi bi-geo-alt"></i>
						{name}, {country}
					</h1>
					<img
						src={`/icons/${icon}.svg`}
						alt="weather-icon"
						className="condition"
					/>
				</div>
			</div>
			<div className="location-data">
				<h2 className="temperature">{temp.toFixed()}˚C</h2>
				<span className="description">{description}</span>
			</div>
			<section className="conditions">
				<div className="item">
					<span className="item__value">{tempMax.toFixed()}˚C</span>
					<h3 className="item__title">Max Temperature</h3>
				</div>
				<div className="item">
					<span className="item__value">{tempMin.toFixed()}˚C</span>
					<h3 className="item__title">Min Temperature</h3>
				</div>
				<div className="item">
					<span className="item__value">{feelsLike.toFixed()}˚C</span>
					<h3 className="item__title">Feels Like</h3>
				</div>
				<div className="item">
					<span className="item__value">{humidity}%</span>
					<h3 className="item__title">Humidity</h3>
				</div>
				<div className="item">
					<span className="item__value">{speed} km/h</span>
					<h3 className="item__title">Wind</h3>
				</div>
				<div className="item">
					<span className="item__value">{Direction()}</span>
					<h3 className="item__title">Wind Direction</h3>
				</div>
			</section>
		</div>
	);
};

export default Card;
