import React from 'react'

const CarwithDesp = ({title,images,description,onClick }) => {
  
    
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
      <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
      <p className="text-white">
        {description}
      </p>
      <button 
          onClick={onClick} 
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >View</button>
    </div>
  </div>
  )
}

export default CarwithDesp