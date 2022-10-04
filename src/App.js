import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [swname, swsetName] = useState("")
  // const [data1, setData1] = useState([]);
  // const [data2, setData2] = useState([])

  const spaceArray = []
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.dev/api/people/");
      const data = await response.json();
      setData(data);
      console.log(data.results[0].name);
      spaceArray.push(data.results[0].name)
      spaceArray.push(data.results[1].name)
      spaceArray.push(data.results[2].name)
      spaceArray.push(data.results[3].name)
      spaceArray.push(data.results[4].name)
      spaceArray.push(data.results[5].name)
      spaceArray.push(data.results[6].name)
      spaceArray.push(data.results[7].name)
      spaceArray.push(data.results[8].name)
      spaceArray.push(data.results[9].name)
      console.log(spaceArray)
    };
    fetchData();
  }, []);

  const randNum = Math.ceil(Math.random() * spaceArray.length)
  const randomChar = spaceArray[randNum]
  const clickHandler = () => { 
    swsetName(randomChar)
  }
  

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
      <h2>{swname}</h2>
      <button onClick={clickHandler}>TRY</button>
    </div>
  );
}

export default App;
