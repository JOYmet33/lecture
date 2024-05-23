import { useState } from "react";

const Clock = () => {
  const [show, setShow] = useState(false);

  setInterval(() => {
    // setShow(!show)
    setShow((prev) => !prev);
  }, 1000);

  return (
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재 시간: {show && new Date().toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
