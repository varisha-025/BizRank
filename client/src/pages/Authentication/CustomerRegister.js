import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
	const navigate = useNavigate();

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [cpassword, setCpassword] = useState('')

	function checkPassword(str) {
		var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
		return re.test(str);
	}

	async function registerUser(event) {
		event.preventDefault()

		if (cpassword !== password) {
			setCpasswordvalidator('block')
			return;
		}

		else if (cpassword === password) {
			setCpasswordvalidator('none')
		}



		const userDetails = { name, email, password };

		const response = await fetch('http://localhost:1337/api/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userDetails),
		})

		const data = await response.json()
		console.log(data.status)

		if (data.status === 'ok') {
			setEmail('')
			setName('')
			setPassword('')
			console.log("User added", data.user)
			navigate("/login")
		}
		else {
			console.log("Some error ocurred")
		}

	}


	const [namevalidator, setNamevalidator] = useState('none');
	const [passwordvalidator, setPasswordvalidator] = useState('none')
	const [cpasswordvalidator, setCpasswordvalidator] = useState('none');

	const OnnameChange = (e) => {
		setName(e.target.value)
		if (name.length <= 10) {
			setNamevalidator('block')
		}
		else if (name.length > 10) {
			setNamevalidator('none')
		}
	}

	const OnpasswordChange = (e) => {
		setPassword(e.target.value)
		if (!checkPassword(password)) {
			setPasswordvalidator('block')
		}
		else {
			setPasswordvalidator('none')
		}
	}

	return (
		<>
			<div className='bg-AuthBackground font-sans font-light'>

				<section className="h-screen px-16 mx-12  ">
					<div className="px-6 h-full text-gray-800   border-white text-center flex items-center justify-center ">
						<div
							className="  border-white flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-fit w-fit g-6 flex-col rounded-2xl text-white bg-AuthForm "
						>
							<h1 className='text-center font-light mt-2 text-3xl  border-red-400 '>Signup</h1>

							<div className="mb-0 md:mb-0  border-white mx-auto p-8 w-full">



								<form onSubmit={registerUser} className=' border-white'>

									<div className="mb-[0.75rem]  border-white">
										<div className="text-white text-left ml-4 text-xl mb-[0.8rem]">
											Name
										</div>
										<input

											className={`form-control block xl:w-96 px-4 py-2 text-xl font-normal text-white bg-AuthInput bg-clip-padding rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-800 focus:outline-none border-none`}

											placeholder="Username"
											value={name}
											onChange={(e) => OnnameChange(e)}
											type="text"
										/>
										<div className={`text-red-400 text-left mt-1 d-${namevalidator}`}>
											* username must have for than 10 chararcter
										</div>
									</div>

									<div className="mb-[0.75rem]  border-white">
										<div className="text-white text-left ml-4 text-xl mb-[0.8rem]">
											Email
										</div>
										<input

											className="form-control block xl:w-96 px-4 py-2 text-xl font-normal text-white bg-AuthInput bg-clip-padding rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-800 focus:outline-none border-none"

											placeholder="Email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											type="email"

										/>
									</div>

									<div className="mb-[0.75rem]">
										<div className="text-white text-left ml-4 text-xl mb-[0.8rem]">
											Password
										</div>
										<input
											className="form-control block xl:w-96 px-4 py-2 text-xl font-normal text-white bg-AuthInput bg-clip-padding  transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-800  focus:outline-none rounded-full border-none"

											placeholder="Password"
											value={password}
											onChange={(e) => OnpasswordChange(e)}
											type="password" />

										<div className={`text-red-400 text-left mt-1 border-white d-${passwordvalidator} xl:w-96`}>
											* Password must have min 8 letter with at least a symbol, upper and lower case letters and a number
										</div>
									</div>

									<div className="mb-4">
										<div className="text-white text-left ml-4 text-xl mb-[0.8rem]">
											Confirm Password
										</div>
										<input
											className="form-control block xl:w-96 px-4 py-2 text-xl font-normal text-white bg-AuthInput bg-clip-padding  transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-800  focus:outline-none rounded-full border-none"

											placeholder="Confirm Password"
											value={cpassword}
											onChange={(e) => setCpassword(e.target.value)}
											type="password" />

										<div className={`text-red-400 text-left mt-1 border-white d-${cpasswordvalidator}`}>
											* password do not match
										</div>
									</div>

									<div className="text-center lg:text-left">
										<button
											type="submit"
											className="inline-block px-7 py-3 bg-AuthButton text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
										>
											Signup
										</button>

										<p className="text-md font-light mt-2 pt-1 mb-0 flex justify-center items-center  border-white p-4 ">
											<div className='mx-4  border-white'>Already a user?</div>
											<a
												href="/login"
												className="text-blue-500 underline hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out mr-6  border-white"
											>Login</a
											>
										</p>
									</div>
								</form>

							</div>
						</div>
					</div>
				</section>
			</div>
		</>

	)
}

export default Register