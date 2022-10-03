import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([])

  const randNumber = Math.floor(Math.random() * 9)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.dev/api/people/");
      const data = await response.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("");
  //     const data1 = await response.json();
  //     setData1(data1);
  //     console.log(data1);
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("");
  //     const data2 = await response.json();
  //     setData2(data2);
  //     console.log(data2);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <h1>What Star Wars Character Are You?</h1>
      <h2>TEMP</h2>
      <button>TEMP</button>
    </div>
  );
}

export default App;
