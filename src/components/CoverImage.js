import React from 'react'

const CoverImage = ({ data }) => {
  return (
    <img src={data.images.jpg.image_url} alt="cover"/>
  )
}

export default CoverImage