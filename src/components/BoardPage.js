import React, { useState, useEffect } from "react";
import IMAGES from "./images/index.js";
import { Link } from 'react-router-dom';
import OutputIcon from '@mui/icons-material/Output';
import './BoardPage.css';

function BoardPage() {
  const [state, setState] = useState(0);
  const [selectedCellId, setSelectedCellId] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(IMAGES.imgDefault);
  const defaultMessage = 'No Message';
  const [message, setMessage] = useState(defaultMessage);
  const initialMoney = 800;
  const [currentMoney, setCurrentMoney] = useState(initialMoney);
  const [cost, setCost] = useState(true);
  const [selectedCell, setSelectedCell] = useState(null); // selectedCell'i burada tanımla
  const [isTrue, setIsTrue] = useState(false);
  const [harvestIsDone,setharvestIsDone] = useState(false);
  const [cellsAffectedByState1, setCellsAffectedByState1] = useState([]);
  const [countdown, setCountdown] = useState(15);
  const [selectedTag, setSelectedTag] = useState(0);

  const [tableContent, setTableContent] = useState([
    {id: 0, timer: 0},
    {id: 1, timer: 0},
    {id: 2, timer: 0},
    {id: 3, timer: 0},
    {id: 4, timer: 0},
    {id: 5, timer: 0},
    {id: 6, timer: 0},
    {id: 7, timer: 0},
    {id: 8, timer: 0},
    {id: 9, timer: 0},
  ]);

  const [appleHarvest,setIsAppleHarvest]   =   useState(false);
  const [orangeHarvest,setIsOrangeHarvest] =   useState(false);
  const [grapeHarvest,setIsGrapeHarvest]   =   useState(false);
  const [scarrotHarvest,setIsScarrotHarvest]   =  useState(false);
  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible); // Tablonun görünürlüğünü tersine çevir
  };

  let applePrice = 200;
  let orangePrice = 100;
  let grapePrice = 100;
  let carrotPrice = 100;
  let CounterA = 0;
  let CounterB = 0;
  let CounterC = 0;
  let CounterD = 0;

  useEffect(()=>{
   if (initialMoney <= 0) {
       alert("Yeterli paranız kalmadı");
       setMessage("Yeterli Paranız Kalmadı");
       setCurrentMoney(0);
     }
  },[currentMoney])
  
  const handleState1 = (id) => {
      setState(1);
    console.log('state one active');
    setCurrentMoney(initialMoney => initialMoney - applePrice);
    if (currentMoney <= 0) {
      setMessage("Yeterli Paranız Kalmadı");
      alert("Yeterli paranız kalmadı");
      setCurrentMoney(0);
    }
    setCost(true);
    setCellsAffectedByState1([...cellsAffectedByState1, id]);
  }
  
  const handleState2 = () => {
    setState(2);
    console.log('state one active');
    setCurrentMoney(initialMoney => initialMoney - orangePrice);
    if (currentMoney <= 0) {
      setMessage("Yeterli Paranız Kalmadı");
      alert("Yeterli paranız kalmadı");
      setCurrentMoney(0);
    }
    setCost(true); // Butona basma hakkınızı kullandıktan sonra cost'u true olarak ayarlayın
  }
  
  const handleState3 = () => {
    setState(3);
    console.log('state one active');
    setCurrentMoney(initialMoney => initialMoney - grapePrice);
    if (currentMoney <= 0) {
      setMessage("Yeterli Paranız Kalmadı");
      alert("Yeterli paranız kalmadı");
      setCurrentMoney(0);
    }
    setCost(true); // Butona basma hakkınızı kullandıktan sonra cost'u true olarak ayarlayın
  }
  
  const handleState4 = () => {
    setState(4);
    console.log('state one active');
    setCurrentMoney(initialMoney => initialMoney - carrotPrice);
    if (currentMoney <= 0) {
      setMessage("Yeterli Paranız Kalmadı");
      alert("Yeterli paranız kalmadı");
      setCurrentMoney(0);
    }
    setCost(true); // Butona basma hakkınızı kullandıktan sonra cost'u true olarak ayarlayın
  }
  const handleState5 = () => {
    setState(5);
    console.log(state);
   
    setCost(true); // Butona basma hakkınızı kullandıktan sonra cost'u true olarak ayarlayın
  }

  const [board, setBoard] = useState([
    [{}, {}, {}],
    [{}, {}, {}],
    [{}, {}, {}]
  ]);
 
  const handleCellClick = (id) => {
    let selectedElement;
    if (cost) {
      setCost(false); // Sadece bir hücreye basma hakkını burada kontrol ediyoruz
      console.log("Clicked cell ID:", id);
      selectedElement = document.getElementById(`cell-${id}`);
      console.log(id);
    
      if (selectedElement) {
        const startCountdown = (imageURL, duration) => {
          // Geri sayım süresi
          let count = duration;
          tableContent[id].timer = duration;
          console.log(tableContent[id]);
          
          // Her saniyede geri sayımı güncelleyen interval
          const countdownInterval = setInterval(() => {
            // Geri sayımı bir saniye azalt
            if (tableContent[id].timer !== 0) {
              tableContent[id].timer--;
            }
    
            setCountdown(tableContent[id].timer);
            // Geri sayım değerini görsel olarak gösterebilirsiniz
            console.log(`${tableContent[id].timer} saniye kaldı`);
    
            // Süre dolduğunda interval'i temizle ve ilgili işlemleri gerçekleştir
            if (count <= 0) {
              clearInterval(countdownInterval);
              tableContent[id].timer = 0;
              console.log("Ready to harvest");
              selectedElement.style.backgroundImage = `url(${IMAGES.imgDefault})`;
              setIsTrue(true); // Boolean olarak ayarla
              setharvestIsDone(true);
              console.log(isTrue);
              console.log(state);
            }
          }, 1000); // Her saniye güncelle
        };
    
        switch (state) {
          case 1:
            selectedElement.style.backgroundImage = `url(${IMAGES.imgMedium})`;
            setSelectedCellId(id);
            setSelectedCell(selectedElement);
            startCountdown(IMAGES.imgOne, 15);
            setTimeout(() => {
              console.log("Ready to harvest");
              selectedElement.style.backgroundImage = `url(${IMAGES.imgOne})`;
              setIsTrue(true); // Boolean olarak ayarla
              setharvestIsDone(true);
              setIsAppleHarvest(true);
              console.log(isTrue);
              console.log(state);
              
            }, 15000);
            break;
          case 2:
            selectedElement.style.backgroundImage = `url(${IMAGES.imgMedium})`;
            setSelectedCellId(id);
            setSelectedCell(selectedElement);
            startCountdown(IMAGES.imgTwo, 15);
            setTimeout(() => {
              console.log("Ready to harvest");
              selectedElement.style.backgroundImage = `url(${IMAGES.imgTwo})`;
              setIsTrue(true); // Boolean olarak ayarla
              setharvestIsDone(true);
              console.log(isTrue);
              console.log(state);
            }, 15000);
            break;
          case 3:
            selectedElement.style.backgroundImage = `url(${IMAGES.imgMedium})`;
            setSelectedCellId(id);
            setSelectedCell(selectedElement);
            startCountdown(IMAGES.imgThree, 15);
            setTimeout(() => {
              console.log("Ready to harvest");
              selectedElement.style.backgroundImage = `url(${IMAGES.imgThree})`;
              setIsTrue(true); // Boolean olarak ayarla
              setharvestIsDone(true);
              console.log(isTrue);
              console.log(state);
            }, 15000);
            break;
          case 4:
            selectedElement.style.backgroundImage = `url(${IMAGES.imgMedium})`;
            setSelectedCellId(id);
            setSelectedCell(selectedElement);
            startCountdown(IMAGES.imgFour, 15);
            setTimeout(() => {
              console.log("Ready to harvest");
              selectedElement.style.backgroundImage = `url(${IMAGES.imgFour})`;
              setIsTrue(true); // Boolean olarak ayarla
              setharvestIsDone(true);
              console.log(isTrue);
              console.log(state);
            }, 15000);
            break;
          case 5:
            if (isTrue && harvestIsDone) {
              console.log("You can click");
              setSelectedCellId(id);
              setSelectedCell(selectedElement);
              selectedElement.style.backgroundImage = `url(${IMAGES.imgDefault})`;
              setCurrentMoney(initialMoney => initialMoney + carrotPrice);
            }
            break;
          default:
            break;
        }
      }
    }
          

  };
  
  return (
  <>
  <div className="Menu-Button-Container">
    {/* Menu Buttons */}
    <button className= "apple-button" onClick={handleState1}>🍎</button>
    <button className= "orange-button" onClick={handleState2}>🍊</button>
    <button className= "grape-button" onClick={handleState3}>🍇</button>
    <button className= "carrot-button" onClick={handleState4}>🥕</button>
    <div className="Harvest-Button-Container">
    <button className="Harvest-Button" onClick={handleState5}>🌾</button>
    </div>
  </div> 
  <div>
  <span className="price-info">{applePrice}$</span>
  <span className="price-info">{orangePrice}$</span>
  <span className="price-info">{grapePrice}$</span>
  <span className="price-info">{carrotPrice}$</span>
  </div>

  <div className="money-block"> 
    <div>
        <span>💰Total Money</span>
    </div>
    <div className="money-block-display">
        <span>{currentMoney}</span> 
        <span>$</span>
    </div>
  </div>

  <div className="top-level-bar">
    <div className="star-symbol">⭐</div>
    <div className="level-finish-bar">
      <div>1/18</div>
      <div className="level-bar-container">
        <div className="bar-f"></div>
      </div>
      </div>
  </div>
   <div className="board-container">
    
    {/* Board */}
    {board.map((row, rowIndex) => {
      return (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => {
            const id = rowIndex * 3 + colIndex + 1; // Hücrenin ID'sini hesaplayın
            return (
              <div
                key={colIndex}
                className="cell"
                id={`cell-${id}`}
                style={{
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(${cell.backgroundImage || backgroundImage})`
                }}
                onClick={() => handleCellClick(id)}
              >
                {cell.emoji} {id}
              </div>
            );
          })}
        </div>
      );
    })}
  </div>
  <div className="time-table-button-container">
    <button className="time-table-button" onClick={toggleTableVisibility}>⏳</button>
  </div>

  <div className={`Time-Table ${isTableVisible ? 'active' : ''}`} id="timeTable">
    <div className="Harvest-Table-Title">
      <h1>Time Table</h1>
    </div>
    <div className="table-container">
  <button className="table-close-button" onClick={toggleTableVisibility}>X</button>
  <div className="row">
    <div className="header">Field-1:</div>
    <div className="data">
      {tableContent[1].timer}
      <div className="loading-container">
        <div className="progress-bar" style={{ height: `${(tableContent[1].timer / 15) * 100}%` }}></div>
      </div>
    </div>
    <div className="header">Field-4:</div>
    <div className="data">
      {tableContent[4].timer}
      <div className="loading-container">
        <div className="progress-bar" style={{ height: `${(tableContent[4].timer / 15) * 100}%` }}></div>
      </div>
      </div>
    <span className="loading"></span>
    <div className="header">Field-7:</div>
    <div className="data">
      {tableContent[7].timer}
      <div className="loading-container">
        <div className="progress-bar" style={{ height: `${(tableContent[7].timer / 15) * 100}%` }}></div>
      </div>
      </div>
  </div>
  <div className="row">
    <div className="header">Field-2:</div>
    <div className="data">
      {tableContent[2].timer}
      <div className="loading-container">
        <div className="progress-bar" style={{ height: `${(tableContent[2].timer / 15) * 100}%` }}></div>
      </div>
      </div>
    <div className="header">Field-5:</div>
    <div className="data">
      {tableContent[5].timer}
      <div className="loading-container">
        <div className="progress-bar" style={{ height: `${(tableContent[5].timer / 15) * 100}%` }}></div>
      </div>
      </div>
    <div className="header">Field-8:</div>
    <div className="data">
      {tableContent[8].timer}
      <div className="loading-container">
        <div className="progress-bar" style={{ height: `${(tableContent[8].timer / 15) * 100}%` }}></div>
      </div>
      </div>
  </div>
  <div className="row">
    <div className="header">Field-3:</div>
    <div className="data">
      {tableContent[3].timer}
      <div className="loading-container">
        <div className="progress-bar" style={{ height: `${(tableContent[3].timer / 15) * 100}%` }}></div>
      </div>
      </div>
    <div className="header">Field-7:</div>
    <div className="data">
      {tableContent[7].timer}
      <div className="loading-container">
        <div className="progress-bar" style={{ height: `${(tableContent[6].timer / 15) * 100}%` }}></div>
      </div>
      </div>
    <div className="header">Field-9:</div>
    <div className="data">
      {tableContent[9].timer}
      <div className="loading-container">
        <div className="progress-bar" style={{ height: `${(tableContent[9].timer / 15) * 100}%` }}></div>
      </div>
      </div>
  </div>
</div>
</div>


  <div className="Exit-Game">
  <Link to="/home"><OutputIcon>Home</OutputIcon></Link>
  </div>


<div className="User">
  <div className="User-Icon">
  <a>👨🏻‍💼</a>
  </div>
</div>


  </>
   
  );
}

export default BoardPage;
