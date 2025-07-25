import React from 'react';

interface Person {
  name: string;
  age: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  tags: string[];
}

export function ObjectTypes() {
  const person: Person = {
    name: "John Doe",
    age: 28
  };

  const user: User = {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    isAdmin: true
  };

  const product: Product = {
    id: 101,
    name: "Wireless headphones",
    price: 99.99,
    category: "Electronics",
    inStock: true,
    tags: ["wireless", "bluetooth", "audio"]
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Interfaces in Action</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3>Simple Person Interface</h3>
        <p><strong>Name:</strong> {person.name}</p>
        <p><strong>Age:</strong> {person.age}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>User Interface (with more properties)</h3>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Admin:</strong> {user.isAdmin ? 'Yes' : 'No'}</p>
      </div>

      <div>
        <h3>Product Interface (with arrays)</h3>
        <p><strong>Name:</strong> {product.name}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>In Stock:</strong> {product.inStock ? 'Yes' : 'No'}</p>
        <p><strong>Tags:</strong> {product.tags.join(', ')}</p>
      </div>

      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f0f8ff',
        borderRadius: '5px'
      }}>
        <h4>💡 Key Takeaway</h4>
        <p>
          Interfaces ensure that every object of the same type has the same structure.
          If you try to create a User without an email, or a Product without a price,
          TypeScript will catch the error before your code runs!
        </p>
      </div>
    </div>
  );
}