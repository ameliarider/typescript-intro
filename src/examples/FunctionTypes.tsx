import React, { useState } from 'react';

// Basic function syntax: function name(parameter: type): returnType
//                                              ↑              ↑
//                                      parameter type    return type
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Default parameter values: parameter: type = defaultValue
function greetUser(name: string, isVip: boolean = false): string {
  //                              ↑
  //                    default value (optional parameter)
  if (isVip) {
    return `Welcome, VIP ${name}!`;
  }
  return `Hello, ${name}!`;
}

// Functions that don't return anything use 'void'
function logMessage(message: string): void {
  //                                   ↑
  //                              'void' means "returns nothing"
  console.log(message);
}

// Arrow functions: same parameter types, same return type syntax
const multiplyNumbers = (x: number, y: number): number => {
  return x * y;
};

// Advanced: Functions that accept OTHER functions as parameters
function processNumber(num: number, operation: (n: number) => number): number {
  //                                          ↑
  //                              This parameter IS a function!
  //                              It takes a number and returns a number
  return operation(num);
}

export function FunctionTypes() {
  const [result, setResult] = useState<string>("");

  const handleCalculation = () => {
    const sum = addNumbers(5, 10);
    const product = multiplyNumbers(5, 10);
    const greeting = greetUser("Alice", true);
    const doubled = processNumber(10, (n) => n * 2);
    logMessage("Calculation performed!");

    setResult(`Sum: ${sum}, Product: ${product}, Greeting: ${greeting}, Processed Number: ${processNumber}`);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Function Types Example</h2>

      <div style={{ marginBottom: '15px' }}>
        <h3>Try it out:</h3>
        <button onClick={handleCalculation} style={{ padding: '10px', marginBottom: '10px' }}>
          Run Calculations (check console too!)
        </button>
      </div>

      <div>
        <h3>Function calls with different parameters:</h3>
        <p><strong>Basic greeting:</strong> {greetUser("Alice")}</p>
        <p><strong>VIP greeting:</strong> {greetUser("Bob", true)}</p>
        {result && <p><strong>Calculation results:</strong> {result}</p>}
      </div>

      <div style={{
        marginTop: '15px',
        padding: '10px',
        backgroundColor: '#fff3cd',
        borderRadius: '4px'
      }}>
        <h4>🔍 What TypeScript is checking:</h4>
        <ul style={{ marginBottom: 0, fontSize: '14px' }}>
          <li><strong>Parameter types:</strong> You can't pass a string where a number is expected</li>
          <li><strong>Parameter count:</strong> You must provide all required parameters</li>
          <li><strong>Return types:</strong> Functions return what they promise to return</li>
          <li><strong>Function signatures:</strong> Functions passed as parameters must match the expected signature</li>
        </ul>
      </div>
    </div>
  );
}