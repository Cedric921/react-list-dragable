'use client';

import React from 'react';
export default function Home() {
	const [people, setPeople] = React.useState([
		{
			id: 1,
			name: 'John Doe',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu.',
			sets: '3x10',
		},
		{
			id: 2,
			name: 'Max Walters',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu.',
			sets: '3x10',
		},
		{
			id: 3,
			name: 'Adam Smith',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu.',
			sets: '3x10',
		},
		{
			id: 4,
			name: 'Tom Johnson',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu.',
			sets: '3x10',
		},
	]);

	const dragPerson = React.useRef<number>(0);
	const draggedOverPerson = React.useRef<number>(0);

	function handleSort() {
		const peopleClone = [...people];
		const temp = peopleClone[dragPerson.current];
		peopleClone[dragPerson.current] = peopleClone[draggedOverPerson.current];
		peopleClone[draggedOverPerson.current] = temp;
		setPeople(peopleClone);
	}

	return (
		<main className='flex min-h-screen flex-col w-[20rem] mx-auto items-center space-y-4'>
			<h1 className='text-xl font-bold mt-4'>List</h1>
			{people.map((person, index) => (
				<div
					key={index}
					className='relative flex space-x-3 border rounded p-2 bg-gray-100 text-black cursor-pointer w-full'
					draggable
					onDragStart={() => (dragPerson.current = index)}
					onDragEnter={() => (draggedOverPerson.current = index)}
					onDragEnd={handleSort}
					onDragOver={(e) => e.preventDefault()}
				>
					<p>{person.name}</p>
				</div>
			))}
		</main>
	);
}
