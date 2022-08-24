import { useState } from 'react'
import React from 'react'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()
		const userDetails = {email, password}
		const response = await fetch('http://localhost:1337/api/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userDetails),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/dashboard'
		} else {
			alert('Please check your username and password')
		}
	}

  return (
	<div>
		<h1 className='text-center font-extrabold mt-6 text-3xl'>Login User</h1>
		<section className="h-screen px-16 mx-12">
				<div className="px-6 h-full text-gray-800">
					<div
						className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
					>
						<div
							className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
						>
							<img
								src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
								className="w-full"
								alt="Sample"
							/>
						</div>
						<div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
							<form onSubmit={loginUser}>
								
								<div className="mb-6">
									<input

										className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										
										placeholder="Email address"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										type="email"

									/>
								</div>

								<div className="mb-6">
									<input
										className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										
										placeholder="Password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										type="password" />
								</div>

								<div className="flex justify-end items-center mb-6">
									

									<a href="#!" className="text-gray-800">Forgot password?</a>
								</div>

								<div className="text-center lg:text-left">
									<button
										type="submit"
										className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
									>
										Login
									</button>
									{/* <p className="text-md font-semibold mt-2 pt-1 mb-0">
										Have an account?
										<a
											href="/login"
											className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
										> Login</a
										>
									</p> */}
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
	</div>
  )
}

export default Login