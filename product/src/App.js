
import React, { useState } from 'react';
import ProductCard from './component/product/ProductCard'; 

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      setCart(cart.map((item) => 
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const products = [
    {
      id: 1,
      imageUrl: 'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg',
      title: 'Product 1',
      description: 'A short description of Product 1 that tells you more about its features.',
      price: 199.99,
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Product 2',
      description: 'A short description of Product 2 that tells you more about its features.',
      price: 249.99,
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Product 3',
      description: 'A short description of Product 3 that tells you more about its features.',
      price: 299.99,
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Product 4',
      description: 'A short description of Product 4 that tells you more about its features.',
      price: 249.99,
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Product 5',
      description: 'A short description of Product 5 that tells you more about its features.',
      price: 449.99,
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Product 6',
      description: 'A short description of Product 6 that tells you more about its features.',
      price: 249.99,
    },
   

  
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
   
      <div className="text-right mb-4">
        <span className="text-xl font-semibold text-gray-800">
          Cart: {cart.length} item(s)
        </span>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-4 mt-6 ">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
            price={product.price}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
