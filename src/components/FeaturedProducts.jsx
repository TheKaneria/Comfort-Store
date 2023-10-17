import React from 'react'
import SectionTitle from './sectionTitle'
import ProductGrid from './productGrid'

const FeaturedProducts = () => {
  return (
    <div className='pt-24'>
      <SectionTitle  text='Featured Products'/>
      <ProductGrid />
    </div>
  )
}

export default FeaturedProducts