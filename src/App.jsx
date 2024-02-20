import "./App.css";
import Square from "./SquareComponent";

export default function App() {
  const data = [
    {
      title: "Square 1",
      value: 10,
    },
    {
      title: "Square 2",
      value: 20,
    },
    {
      title: "Square 3",
      value: 30,
    },
  ];
  return (
    <section>
      {data.map((d, index) => (
        <Square key={index} title={d.title} value={d.value} />
      ))}
    </section>
  );
}
