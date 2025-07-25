import React, { useState } from 'react';
// Import types from our separate types file
import type { User, Product, ApiResponse, Status } from '../types';

export function TypeImports() {
  // Using imported types
  const [user, setUser] = useState<User | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<Status>('loading');

  // Example data using our imported types
  const sampleUser: User = {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    isAdmin: false
  };

  const sampleProducts: Product[] = [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      category: "Electronics",
      inStock: true,
      tags: ["computer", "portable"]
    },
    {
      id: 2,
      name: "Coffee Mug",
      price: 15.99,
      category: "Kitchen",
      inStock: false,
      tags: ["ceramic", "beverage"]
    }
  ];

  // Example API response using generic type
  const apiResponse: ApiResponse<Product[]> = {
    data: sampleProducts,
    success: true,
    message: "Products fetched successfully",
    timestamp: new Date()
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Using Types from Separate Files</h2>

      <div style={{ marginBottom: '15px' }}>
        <h3>User Data (imported User type):</h3>
        <p><strong>Name:</strong> {sampleUser.name}</p>
        <p><strong>Email:</strong> {sampleUser.email}</p>
        <p><strong>Admin:</strong> {sampleUser.isAdmin ? 'Yes' : 'No'}</p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <h3>Products (imported Product[] type):</h3>
        {sampleProducts.map(product => (
          <div key={product.id} style={{ marginBottom: '10px', paddingLeft: '20px' }}>
            <p><strong>{product.name}</strong> - ${product.price}</p>
            <p>Category: {product.category} | In Stock: {product.inStock ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <h3>API Response (imported ApiResponse type):</h3>
        <p><strong>Success:</strong> {apiResponse.success ? 'Yes' : 'No'}</p>
        <p><strong>Message:</strong> {apiResponse.message}</p>
        <p><strong>Data Count:</strong> {apiResponse.data.length} products</p>
      </div>

      <div style={{
        padding: '15px',
        backgroundColor: '#e8f5e8',
        borderRadius: '5px'
      }}>
        <h4>💡 File Organization Tips</h4>
        <ul style={{ marginBottom: 0, fontSize: '14px' }}>
          <li><strong>src/types/index.ts</strong> - Main types file for shared interfaces</li>
          <li><strong>src/types/api.ts</strong> - API-specific types (requests, responses)</li>
          <li><strong>src/types/user.ts</strong> - User-related types if you have many</li>
          <li>Use <strong>export type</strong> for type aliases, <strong>export interface</strong> for object shapes</li>
          <li>Import with <strong>import type</strong> for better build optimization</li>
        </ul>
      </div>
    </div>
  );
}