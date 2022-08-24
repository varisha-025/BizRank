// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import SellerForm from '../components/SellerFormComponents/SellerForm';

const Register = () => {
	// const navigate = useNavigate();

	// const [name, setName] = useState('')
	// const [email, setEmail] = useState('')
	// const [password, setPassword] = useState('')
    // const [phoneNumber, setPhoneNumber] = useState()
    // const [dob, setDob] = useState()
	// async function registerUser(event) {
	// 	event.preventDefault()

	// 	const userDetails = {name,email,password};

		// const response = await fetch('http://localhost:1337/api/auth/register', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify(userDetails),
		// })

		// const data = await response.json()
		// console.log(data.status)

		// if (data.status === 'ok'){
		// 	setEmail('')
		// 	setName('')
		// 	setPassword('')
		// 	console.log("User added" ,data.user)
		// 	navigate("/login")
		// }
		// else{
		// 	console.log("Some error ocurred")
		// }
		
	// }

	return (
		<>
 <h1 className='text-center font-extrabold mt-6 text-3xl'>Register for sellers</h1>
   
  {/* <section class="step-indicator">
      <div class="step step1 active">
          <div class="step-icon">1</div>
        <p>Personal Details</p>
      </div>
    <div class="indicator-line active"></div>
    <div class="step step2">
        <div class="step-icon">2</div>
      <p className='mt-6'>Business Details</p>
    </div>
    <div class="indicator-line"></div>
    <div class="step step3">
        <div class="step-icon">3</div>
      <p>Confirmation</p>
    </div>
  </section> */}
						{/* // <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
						// 	<form onSubmit={registerUser}>
						// 		<div className="mb-6">
						// 			<input
						// 				className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										
						// 				value={name}
						// 				onChange={(e) => setName(e.target.value)}
						// 				type="text"
						// 				placeholder="Name"
						// 			/>
						// 		</div> */}
								
			<SellerForm/>
		</>

	)
}

export default Register