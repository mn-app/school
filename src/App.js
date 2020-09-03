import { useMenu } from './menu';
import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

console.log(moment.locale());
moment().locale('ru');
console.log(moment.locale());

function App() {
	const today = moment();
	const tomorrow = moment().add(1, 'day');
	return (
		<div>
			<h2>Сегодня {today.format('dddd')}</h2>
			<Day dt={today} />
			<h2>Завтра {tomorrow.format('dddd')}</h2>
			<Day dt={tomorrow} />
		</div>
	);
}

export default App;

const Day = ({ dt }) => {
	const m = useMenu(dt);

	return m && m.breakfast ? (
		<div className='day'>
			<div>
				<div className='title'>Завтрак</div>
				{m.breakfast.map((x, idx) => (
					<div key={idx} className='name'>
						{x}
					</div>
				))}
			</div>
			<div>
				<div className='title'>Обед</div>
				{m.lunch.map((x, idx) => (
					<div className='name' key={idx}>
						{x}
					</div>
				))}
			</div>
		</div>
	) : (
		'No data'
	);
};
