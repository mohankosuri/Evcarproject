// Explore.js
import React, { useState } from 'react';
import CarwithDesp from '../components/CarwithDesp';

const Carsdata = [
  { title: "Chevrolet", image: "https://cgi.chevrolet.com/mmgprod-us/dynres/prove/image.gen?i=2024/1XR26/1XR26__1LT/GXP_gmds1&v=deg01&std=true&country=US", description: "Chevrolet Cruze price in India starts from ₹ 13.38 Lakh. Cruze is available in 7 colours - Summit White, Velvet Red, Caviar Black, Diamond White, Sandrift Grey, Switchblade Silver, and Burnt Coconut. Cruze seating capacity is 5 People. Cruze mileage is 14.81 - 17.3 km/l." },
  { title: "Chrysler", image: "https://ik.imagekit.io/maxabout/all/images/autos/cars_india//C/2015/3/chrysler-300-p.jpg", description: "The company was founded by Walter P. Chrysler on June 6, 1925, when the Maxwell Motor Company was re-organized into the Chrysler Corporation.[3] Walter Chrysler had originally arrived at the ailing Maxwell-Chalmers company in the early 1920s, having been hired to take over and overhaul the company's troubled operations (just after having done a similar rescue job at the Willys car company). In late 1923 production of the Chalmers automobile was ended,Then in January of 1924 Walter Chrysler launched the well-received Chrysler automobile." },
  { title: "Ford", image: "https://stat.overdrive.in/wp-content/odgallery/2020/09/57752_2020_Ford_Endeavour_468x263.jpg", description: "Ford entered India back in 1995 and has since invested billions of US dollars to setup manufacturing facilities and a network of sales and service centres for new and existing customers across the country. These facilities not only produce engines and vehicles for the domestic market, but for various export markets as well. Ford's facilities in Chennai, Tamil Nadu and Sanand, Gujarat have a combined manufacturing capacity of 6.1 lakh engines and 4.4 lakh vehicles." },
  { title: "GMC", image: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2019/11/yukon-2020-featured.jpg", description: "GMC is one of those vehicle manufacturers that belongs to the centenarian club. The company was established 106 years ago in the year 1911, just before the advent of the First World War. The company’s name is an acronym of the General Motors Truck Company and, as the name states, they focus only on making pick-up trucks, SUVs and other utility vehicles. GMC soon earned its reputation of building reliable vehicles by having its trucks driven across the entire width of the United States. The company also produced well over half a million trucks to be used by the U.S. military in World War II." },
  { title: "BMW", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-EdENLxQnCTp76ez16I1Sx0wi6cdmpvfeg&s", description: "BMW India has a wide range of products ranging from sedan to SUV’s and even sports-cars. The model line-up includes the 3 Series, 5 Series, 7 Series, X1, X3, X4, X5, X7, 3 Series GT, 6 Series GT. Models from the M and Z range including the M2 Competition, M4 Coupe, M5 Competition, M760 Li and the Z4 are CBU units imported into the country." }
];

const Explore = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleViewDetails = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className='mx-[100px]'>
      {selectedCar ? (
        <div>
          <h1 className="text-3xl font-bold mb-4 text-white">{selectedCar.title}</h1>
         <div className='flex justify-center'> <img src={selectedCar.image} alt={selectedCar.title} className="rounded-lg shadow-md mb-4"/></div>
          <p className="text-lg text-white">{selectedCar.description}</p>
          <button 
            onClick={() => setSelectedCar(null)} 
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Go Back
          </button>
        </div>
      ) : (
        Carsdata.map((car, index) => (
          <CarwithDesp
            key={index}
            title={car.title}
            images={car.image}
            description={car.description}
            onClick={() => handleViewDetails(car)}
          />
        ))
      )}
    </div>
  );
};

export default Explore;
