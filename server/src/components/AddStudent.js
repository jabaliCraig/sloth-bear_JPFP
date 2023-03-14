import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudentAsync } from '../features/allStudents/allStudentsSlice';

const AddStudent = () => {
	const dispatch = useDispatch();
	//set local state variables for each part of the form
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [gpa, setGPA] = useState('');
	const [imageUrl, setImageUrl] = useState('');
  //define a function for submitting that takes in the event object as a parameter; this function will...
	const onSubmit = (e)=> {
		//...prevent the submit from loading a new page
		e.preventDefault();
		//...verify that all *required* fields are filled out
		if(!firstName || !lastName || !email) {
			alert('You must complete all required fields: First Name, Last Name, and Email');
			return
		}
		//...create a new object from input fields (stored from the form as state variables)
		const newStudent = { 
			firstName, 
			lastName, 
			email, 
			gpa: gpa || null,
		}
		//...run the onAdd function with the new student object passed in
		dispatch(addStudentAsync(newStudent))
		//...and reset the form
		setFirstName('');
		setLastName('');
		setEmail('');
		setGPA('');
		setImageUrl('');
	}

	//JSX should return the form with a 'form-control' section for... 
	return (
		<form 
		  className='add-form' 
			onSubmit={onSubmit}
		>
			{/*...first name */}
			<div className='form-control'>
				<label>Student's First Name</label>
				<input 
				  type='text' 
					placeholder='**REQUIRED**' 
					value={firstName} 
					onChange={(e)=> setFirstName(e.target.value)} 
			  />
			</div>
			{/*...last name */}
			<div className='form-control'>
				<label>Student's Last Name</label>
				<input 
				  type='text' 
					placeholder='**REQUIRED**' 
					value={lastName} 
					onChange={(e)=> setLastName(e.target.value)} 
				/>
			</div>
			{/*...email */}
			<div className='form-control'>
				<label>Student's Email</label>
				<input 
				  type='text' 
					placeholder='**REQUIRED**' 
					value={email} 
					onChange={(e)=> setEmail(e.target.value)} 
			  />
			</div>
			{/*...GPA */}
			<div className='form-control'>
				<label>Student's GPA</label>
				<input 
				  type='text' 
					placeholder='**REQUIRED**' 
					value={gpa} 
					onChange={(e)=> setGPA(e.target.value)} 
				/>
			</div>
			{/*...image URL */}
			<div className='form-control'>
				<label>Student's Image URL</label>
				<input 
				  type='text' 
					placeholder='(optional)' 
					value={imageUrl} 
					onChange={(e)=> setImageUrl(e.target.value)} 
				/>
			</div>
			{/*...and a submit button down at the very bottom🔘 */}
			<input 
			  type='submit' 
				value='Save' 
			/>
		</form>
	)
}

export default AddStudent
