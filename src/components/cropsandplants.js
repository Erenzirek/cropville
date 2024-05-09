import React, { useState } from 'react';

// Crop bileşeni
function Crop({ name, icon, growTime, buyPrice, sellPrice, timeStamp, plotID }) {
    const [state, setState] = useState({
        icon: icon,
        name: name,
        growTime: growTime,
        buyPrice: buyPrice,
        sellPrice: sellPrice,
        plotID: plotID,
        timeStamp: timeStamp,
        finishTime: timeStamp + growTime,
        state: "Growing",
        remGrowTime: null,
        remDecayTime: null,
        decayTime: null
    });

    return (
        <div>
            <h2>{state.name}</h2>
            <img src={state.icon} alt={state.name} />
            <p>Grow Time: {state.growTime}</p>
            <p>Buy Price: {state.buyPrice}</p>
            <p>Sell Price: {state.sellPrice}</p>
            <p>Plot ID: {state.plotID}</p>
            <p>Time Stamp: {state.timeStamp}</p>
            <p>Finish Time: {state.finishTime}</p>
            <p>State: {state.state}</p>
        </div>
    );
}

// CropsAndPlants bileşeni
function CropsAndPlants() {
    // Örnek birkaç bitki ekleyelim
    const crops = [
        {
            name: "Carrot",
            icon: "carrot_icon.png",
            growTime: 5,
            buyPrice: 10,
            sellPrice: 5,
            timeStamp: Date.now(),
            plotID: 1
        },
        {
            name: "Potato",
            icon: "potato_icon.png",
            growTime: 7,
            buyPrice: 15,
            sellPrice: 8,
            timeStamp: Date.now(),
            plotID: 2
        }
    ];

    return (
        <div>
            <h1>My Farm</h1>
            <div>
                {/* Her bitki için Crop bileşenini kullan */}
                {crops.map((crop, index) => (
                    <Crop
                        key={index}
                        name={crop.name}
                        icon={crop.icon}
                        growTime={crop.growTime}
                        buyPrice={crop.buyPrice}
                        sellPrice={crop.sellPrice}
                        timeStamp={crop.timeStamp}
                        plotID={crop.plotID}
                    />
                ))}
            </div>
        </div>
    );
}

export default CropsAndPlants;
