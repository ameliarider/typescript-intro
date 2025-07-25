import React from 'react';

export function BasicTypes() {
  const message: string = "Hello, Typescript!";
  const count: number = 42;
  const isActive: boolean = true;

  const inferredString = "I'm automatically a string";
  const inferredNumber = 100;
  const inferredBoolean = false;

  const explicitNumbers: number[] = [1, 2, 3, 4, 5];
  const inferredFruits = ["apple", "banana", "cherry"];

  const emptyItems: string[] = [];
  const colors: Array<string> = ["red", "green", "blue"];

  const calculateArea = (width: number, height: number) => {
    return width * height;
  }

  const area = calculateArea(10, 5);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Basic Types & Inference Example</h2>

      <div style={{ marginBottom: '15px' }}>
        <h3>Explicit Types:</h3>
        <p><strong>Message:</strong> {message}</p>
        <p><strong>Count:</strong> {count}</p>
        <p><strong>Is Active:</strong> {isActive ? 'Yes' : 'No'}</p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <h3>Inferred Types:</h3>
        <p><strong>Inferred String:</strong> {inferredString}</p>
        <p><strong>Inferred Number:</strong> {inferredNumber}</p>
        <p><strong>Inferred Boolean:</strong> {inferredBoolean ? 'Yes' : 'No'}</p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <h3>Arrays:</h3>
        <p><strong>Explicit Numbers:</strong> [{explicitNumbers.join(', ')}]</p>
        <p><strong>Inferred Fruits:</strong> [{inferredFruits.join(', ')}]</p>
        <p><strong>Empty Items:</strong> [{emptyItems.join(', ') || 'Empty array'}]</p>
        <p><strong>Colors:</strong> [{colors.join(', ')}]</p>
      </div>

      <div>
        <h3>Function Example:</h3>
        <p><strong>Area (10 × 5):</strong> {area}</p>
      </div>
    </div>
  );
}