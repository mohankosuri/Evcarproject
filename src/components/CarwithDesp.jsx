import React from 'react'

const CarwithDesp = ({title,images,description}) => {
  
    
  return (
    <div className="flex items-center p-4">
    <div className="w-1/3">
      <img 
        src= {images} 
        alt="Placeholder Image" 
        className="rounded-lg"
      />
    </div>
    <div className="w-2/3 pl-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="">
        {description}
      </p>
    </div>
  </div>
  )
}

export default CarwithDesp