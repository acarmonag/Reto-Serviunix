import React, { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {

  const [textColor, setTextColor] = useState("black");

  const handleRedButtonClick = () => {
    setTextColor("red");
  };

  const handleBlueButtonClick = () => {
    setTextColor("blue");
  };

  const cells = useCallback((cell) => {
    const otherCells = [0, ...cell, 0];
    const start = 0;
    const end = otherCells.length - 1;

    const result = otherCells.map((cell, index) => {
      if (index === start || index === end) {
        return 0;
      }
      return otherCells[index - 1] === otherCells[index + 1] ? 0 : 1;
    });

    const correctResult = result.filter(
      (cell, index) => index !== start && index !== end
    );

    return correctResult;
  }, [])

  const [vecinos, setVecinos] = useState({
    vecino1: 0,
    vecino2: 0,
    vecino3: 0,
    vecino4: 0,
    vecino5: 0,
    vecino6: 0,
    vecino7: 0,
    vecino8: 0,
  })
  const [resultVecinos, setResultVecinos] = useState([])
  const [Dias, setDias] = useState(1)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVecinos((current) => ({
      ...current,
      [name]: parseInt(value)
    }))
  }

  const handleDias = (e) => {
    const { value } = e.target;
    setDias(() => parseInt(value))
  }

  useEffect(() => {
    let currentResult = Object.values(vecinos)
    for (let index = 0; index < Dias; index++) {
      currentResult = cells(currentResult)
    }
    setResultVecinos([...currentResult])
  }, [vecinos, Dias])

  return (
    <div className="App">
    <div className="textColor">
        <div style={{ color: textColor }}>Prueba Básica React</div>
        <button style={{ backgroundColor: "red"}} onClick={handleRedButtonClick}>
          Botón Rojo
        </button>
        <button style={{ backgroundColor: "blue" }} onClick={handleBlueButtonClick}>
          Botón Azul
        </button>
    </div>
      <div>
        <span>Vecino 1</span>
        <select onChange={handleChange} name="vecino1" value={vecinos.vecino1} >
          <option value="0" >0</option>
          <option value="1" >1</option>
        </select>
      </div>
      <div>
        <span>Vecino 2</span>
        <select onChange={handleChange} name="vecino2" value={vecinos.vecino2} >
          <option value="0" >0</option>
          <option value="1" >1</option>
        </select>
      </div>
      <div>
        <span>Vecino 3</span>
        <select onChange={handleChange} name="vecino3" value={vecinos.vecino3}>
          <option value="0" >0</option>
          <option value="1" >1</option>
        </select>
      </div>
      <div>
        <span>Vecino 4</span>
        <select onChange={handleChange} name="vecino4" value={vecinos.vecino4}>
          <option value="0" >0</option>
          <option value="1" >1</option>
        </select>
      </div>
      <div>
        <span>Vecino 5</span>
        <select onChange={handleChange} name="vecino5" value={vecinos.vecino5}>
          <option value="0" >0</option>
          <option value="1" >1</option>
        </select>
      </div>
      <div>
        <span>Vecino 6</span>
        <select onChange={handleChange} name="vecino6" value={vecinos.vecino6}>
          <option value="0" >0</option>
          <option value="1" >1</option>
        </select>
      </div>
      <div>
        <span>Vecino 7</span>
        <select onChange={handleChange} name="vecino7" value={vecinos.vecino7}>
          <option value="0" >0</option>
          <option value="1" >1</option>
        </select>
      </div>
      <div>
        <span>Vecino 8</span>
        <select onChange={handleChange} name="vecino8" value={vecinos.vecino8}>
          <option value="0" >0</option>
          <option value="1" >1</option>
        </select>
      </div>

      <div>
        <span>
          Dias
        </span>
        <input type="number" value={Dias} onChange={handleDias} />
      </div>
      <div className="resultados">
      {
        resultVecinos && resultVecinos?.map(vecino => (
          <span>{vecino}</span>
        ))
      }
      </div>
    </div>
  );
}

export default App;
