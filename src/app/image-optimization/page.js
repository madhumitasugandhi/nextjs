import React from 'react'
import Image from 'next/image'
import Img from '../../../public/next.svg';
const ImageOptimization = () => {
  return (
    <>
        <h2>Image Optimization</h2>
        <br/>
        <Image
            src={Img}
            alt='next js Image'
        /><br/><br/>
        <Image
            src='https://images.pexels.com/photos/32386044/pexels-photo-32386044.jpeg'
            alt='next js Image'
            width={400}
            height={200}
        />
    </>
  )
}

export default ImageOptimization