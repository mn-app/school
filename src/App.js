import { useMenu, useWorkDays } from './menu';
import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

console.log(moment.locale());
moment().locale('ru');
console.log(moment.locale());

function App() {
	const days = useWorkDays(moment(), 10);
	return (
		<div>
			{days.map((d, idx) => (
				<div key={idx}>
					<h2> {d.format('dddd DD MMMM')}</h2>
					<Day dt={d} />
				</div>
			))}
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
