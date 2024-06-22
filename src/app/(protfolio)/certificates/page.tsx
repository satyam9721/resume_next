import React from 'react'
import SingleProject from '@/components/SingleProject';

const Certificates = () => {
  return (
    <div className=''
    title='click for certificate link'
    >
     <SingleProject
      gitUrl=''
      title='Mern Stack'
      previewUrl='https://mern-certificate-aman.tiiny.site'
      description='This certificate is awarded by Wipro and its learning partner, StackRoute, upon the successful completion of the internship in MERN stack and the successful passing of three tollgate examinations. It serves as a testament to my proficiency and skills in the MERN stack.'
      imgUrl='/certificates/mern.png'
     />
    </div>
  )
}

export default Certificates