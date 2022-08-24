// import { useState } from 'react'
import React from 'react'

const Login = () => {
	// const [email, setEmail] = useState('')
	// const [password, setPassword] = useState('')

	// async function loginUser(event) {
	// 	event.preventDefault()
	// 	const userDetails = {email, password}
	// 	const response = await fetch('http://localhost:1337/api/auth/login', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(userDetails),
	// 	})

	// 	const data = await response.json()

	// 	if (data.user) {
	// 		localStorage.setItem('token', data.user)
	// 		alert('Login successful')
	// 		window.location.href = '/dashboard'
	// 	} else {
	// 		alert('Please check your username and password')
	// 	}
	// }

  return (
	<div>
		<h1 className='text-center font-extrabold mt-6 text-3xl'>Login for sellers</h1>
		
	</div>
  )
}

export default Login