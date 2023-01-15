import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SellerForm from '../../components/Forms/BrandFormComponents/BrandForm';

const Register = () => {
	const navigate = useNavigate();

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState()
    const [dob, setDob] = useState()
	async function registerUser(event) {
		event.preventDefault()

		const userDetails = {name,email,password};

		const response = await fetch('http://localhost:1337/api/auth/brandRegister', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userDetails),
		})

		const data = await response.json()
		console.log(data.status)

		if (data.status === 'ok'){
			setEmail('')
			setName('')
			setPassword('')
			console.log("User added" ,data.user)
			navigate("/login")
		}
		else{
			console.log("Some error ocurred")
		}
		
	}

	return (
		<>
 			<h1 className='text-center font-extrabold mt-6 text-3xl'>Register for sellers</h1>
			<SellerForm/>
		</>

	)
}

export default Register