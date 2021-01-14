import { useMenu, useWorkDays } from './menu';
import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { useState } from 'react';
import './App.css';

console.log(moment.locale());
moment().locale('ru');
console.log(moment.locale());

function App() {
	const [diff, setDiff] = useState(0);
	const days = useWorkDays(moment().add(diff, 'days'), 20);
	return (
		<div>
			<div className='tools'>
				<div onClick={() => setDiff(diff - 7)} className='tool prev'>
					❮Prev
				</div>
				<div onClick={() => setDiff(diff + 7)} className='tool next'>
					Next❯
				</div>
			</div>
			<div>
				{days.map((d, idx) => (
					<div key={idx}>
						<h2> {d.format('dddd DD MMMM')}</h2>
						<Day dt={d} />
					</div>
				))}
			</div>
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
