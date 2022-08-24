import React, { useEffect, useState } from "react"
import BusinessCard from '../components/Layout/BusinessCard'
import { Container } from '@mui/system';

const Dashboard = () => {
  const [sellers, setSellers] = useState([])
  const fetchData = () => {
    fetch("http://localhost:1337/api/sellers")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setSellers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (

    <Container sx={{ my: "5rem" }}>
      
      {sellers.length > 0 && (
        <ul>
          {sellers.map(seller => (
            <BusinessCard key={seller._id} brandName={seller.brandName} paymentOptions={seller.paymentOptions} deliveryTime={seller.deliveryTime} socialMediaHandles={seller.socialMediaHandles} productCategories={seller.productCategories} brandDesc={seller.brandDesc} brandContactEmail={seller.brandContactEmail} brandContactNumber={seller.brandContactNumber} brandLogo={seller.brandLogo} brandWebsite={seller.brandWebsite} />
          ))}
        </ul>
      )}
    </Container>
// data()
// {
//   var
// }
  )
}

export default Dashboard