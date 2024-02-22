import { useState, useLayoutEffect, useEffect } from "react";
import Button from "./Button";

export default function CounterFunction() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    alert(count);
  }, [count]);

  useEffect(() => {
    alert(count);
  }, [count]);

  return (
    <>
      <Button handleCounter={() => setCount(count - 1)} label="-" />
      <h1>{count}</h1>
      <Button handleCounter={() => setCount(count + 1)} label="+" />
    </>
  );
}
