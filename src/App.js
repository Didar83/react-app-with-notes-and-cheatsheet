import Costs from "./components/Costs";

const App = () => {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Refrigerator",
      amount: 999.95
    },
    {
      date: new Date(2021, 11, 5),
      description: "MacBook",
      amount: 1259.95
    },
    {
      date: new Date(2021, 3, 1),
      description: "T-Shirt",
      amount: 19.95
    }
  ];

  return (
    <div>
      <h1>React learning</h1>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
