// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Banner = () => {
//   const [productImage, setProductImage] = useState('');

//   useEffect(() => {
//     axios
//       .get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
//       .then(response => {
//         const randomProduct = response.data[Math.floor(Math.random() * response.data.length)];
//         setProductImage(randomProduct.image_link);
//       })
//       .catch(error => {
//         console.error('Error fetching product image:', error);
//       });
//   }, []);

//   return (
//     <div className="banner bg-light text-black text-center py-5 shadow">
//       {productImage && (
//         <img src={productImage} alt="Banner" className="img-fluid rounded-circle mb-4" />
//       )}
//       <h2 className="display-4 ">Greetings Gorgeous Ladies!</h2>
//       <p className="lead fst-italic">
//         Shop the latest makeup products & enjoy a seamless shopping experience.
//       </p>
//     </div>
//   );
// };

// export default Banner;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Banner = () => {
  const [productImage, setProductImage] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => { const fetchRandomProduct = () => {
      axios
        .get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        .then(response => {
          const randomProduct = response.data[Math.floor(Math.random() * response.data.length)];
          setProductImage(randomProduct.image_link);
         
        })
        .catch(error => {
          console.error('Error fetching product image:', error);
        });
    };

    // Fetch initial random product
    fetchRandomProduct();

    // Set interval to fetch new random product every 15 seconds
    const interval = setInterval(fetchRandomProduct, 10000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="banner bg-light text-black text-center py-5 shadow">
      {productImage && (
        <img src={productImage} alt="Banner" className="img-fluid rounded-circle mb-4" />
      )}
      <h2 className="display-4">Greetings Gorgeous Ladies!</h2>
      <p className="lead fst-italic">
        Shop the latest makeup products & enjoy a seamless shopping experience.
      </p>
    </div>
  );
};

export default Banner;

