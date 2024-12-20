import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("grey");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed
      flex
      flex-wrap
      justify-center 
      bottom-12 inset-x-0 px-2"
      >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <Button onClick={() => setColor("red")} value="red" />
          <Button onClick={() => setColor("green")} value="green" />
          <Button onClick={() => setColor("blue")} value="blue" />
          <Button onClick={() => setColor("yellow")} value="yellow" />
          <Button onClick={() => setColor("black")} value="black" />
          <Button onClick={() => setColor("purple")} value="purple" />
          <Button onClick={() => setColor("pink")} value="pink" />
          <Button onClick={() => setColor("lavender")} value="lavender" />
        </div>
      </div>
    </div>
  );
}

export default App;
