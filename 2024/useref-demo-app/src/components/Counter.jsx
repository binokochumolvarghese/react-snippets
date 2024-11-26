import React, { useRef } from "react";

const Counter = () => {
  // Create a ref to persist the counter value across renders
  const ref = useRef(0);

  // Function to handle button clicks
  const handleClick = () => {
    ref.current += 1; // Increment the ref value
    console.log(`You clicked ${ref.current} times!`); // Log the updated value
  };

  console.log("Rendering happened");

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      {/* Show the current value of ref in the DOM */}
      <p>Counter value: {ref.current}</p>
    </div>
  );
};

export default Counter;
