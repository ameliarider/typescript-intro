import React, { useState } from 'react';

export function InferenceExamples() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  interface User {
    id: number;
    name: string;
  }
  const [user, setUser] = useState<User | null>(null);

  const product = {
    id: 1,
    name: "Laptop",
    price: 999.99
  };

  const dynamicData: { [key: string]: any } = {}; // Must be explicit

  // ✅ Array methods - TypeScript is smart about these
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(n => n * 2); // TypeScript infers: number[]
  const strings = numbers.map(n => n.toString()); // TypeScript infers: string[]

  // ✅ Event handlers - TypeScript knows React event types
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!", event.currentTarget.innerText);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input value:", event.target.value);
  };

  // ✅ Async functions - return type inferred from what you return
  const fetchUserData = async (id: number) => {
    // Return type automatically inferred as: Promise<User>
    return {
      id: id,
      name: "Alice"
    };
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Type Inference in Real Scenarios</h2>

      <div style={{ marginBottom: '15px' }}>
        <h3>React State (hover to see inferred types):</h3>
        <p><strong>Count:</strong> {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p><strong>Name:</strong> {name}</p>
        <input
          value={name}
          onChange={handleInputChange}
          placeholder="Type a name"
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <h3>Object Inference:</h3>
        <p><strong>Product:</strong> {product.name} - ${product.price}</p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <h3>Array Method Inference:</h3>
        <p><strong>Original:</strong> [{numbers.join(', ')}]</p>
        <p><strong>Doubled:</strong> [{doubled.join(', ')}]</p>
        <p><strong>As Strings:</strong> [{strings.join(', ')}]</p>
      </div>

      <div>
        <h3>Event Handling:</h3>
        <button onClick={handleButtonClick}>
          Click me (check console)
        </button>
      </div>

      <div style={{
        marginTop: '15px',
        padding: '10px',
        backgroundColor: '#e7f3ff',
        borderRadius: '4px'
      }}>
        <h4>💡 Pro Tip: When to be explicit vs let TypeScript infer</h4>
        <ul style={{ marginBottom: 0 }}>
          <li><strong>Let TypeScript infer:</strong> Variable assignments, array methods, simple function returns</li>
          <li><strong>Be explicit:</strong> Function parameters, empty arrays, complex state, API responses</li>
          <li><strong>Rule of thumb:</strong> If TypeScript can't figure it out or the type isn't obvious to other developers, be explicit!</li>
        </ul>
      </div>
    </div>
  );
}