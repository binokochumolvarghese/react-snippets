import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <br/>
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;