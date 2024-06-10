import { useState } from "react";

const Greeting = () => {
  const [text, setText] = useState(false);

  const handleChangeText = () => {
    setText(true);
  }

  return (
    <div>
      <h2>Hello World</h2>
      <p>{text ? 'I love my job' : 'Nothing is impossible'}</p>
      <button onClick={handleChangeText}>Change text</button>
    </div>
  );
};

export default Greeting;