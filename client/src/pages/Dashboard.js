import React, { useEffect, useState } from "react"
import BusinessCard from '../components/Layout/BusinessCard'
import { Container } from '@mui/system';

const Dashboard = () => {
  const [brands, setBrands] = useState([])
  const fetchData = () => {
    fetch("http://localhost:1337/api/brands")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setBrands(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(brands.length, brands)

  return (

    <Container sx={{ py: "5rem" }}>
      {brands !== undefined && brands.length > 0 && (
        <ul>
          {brands.map(brand => (
            <BusinessCard key={brand._id} brandName={brand.brandName} paymentOptions={brand.paymentOptions} deliveryTime={brand.deliveryTime} socialMediaHandles={brand.socialMediaHandles} productCategories={brand.productCategories} brandDesc={brand.brandDesc} brandContactEmail={brand.brandContactEmail} brandContactNumber={brand.brandContactNumber} brandLogo={brand.brandLogo} brandWebsite={brand.brandWebsite} />
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