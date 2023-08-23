import React from "react";
import "./summary-box.scss";
import Box from "../box/Box";

import { Line, Bar, Doughnut, Radar, PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadarController,
  RadialLinearScale,
  ArcElement,
} from "chart.js";

import CircleBox from "./CircleBox";
import { Button } from "@mui/material";

import InfoCard from './InfoCard';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faPlusCircle, faMinusCircle, faArrowDown, faArrowUpRightFromSquare, faArrowUpLong} from "@fortawesome/free-solid-svg-icons";

import { useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadarController,
  RadialLinearScale,
  ArcElement
);

const SummaryBox = ({ item }) => {
  return (
    <Box>
      <div className="summary-box">
        <div className="summary-box__info">
          <div className="summary-box__info__title">
            <div>{item.title}</div>
          </div>
          <div className="summary-box__info__value">{item.value}</div>
        </div>
      </div>
    </Box>
  );
};
export const SummaryBoxIndicateurs = ({ item }) => {


  return (
    <div className="summary-box">
      <div className="summary-box__info__indicateur">
        <div className="summary-box__info__indicateur__title">
          <CircleBox item={item} />
        </div>
        <div className="summary-box__info__indicateur__value">{item.title}</div>
      </div>
    </div>
  );
};

// export const SummaryBoxIndicateursLogo = ({ item }) => {
//   const [isCardOpen, setIsCardOpen] = useState(false);

//   const [isHovered, setIsHovered] = useState(false);

//   const toggleCard = () => {
//     setIsCardOpen(!isCardOpen);
//   };

//   return (
//     <Box>
//       <div className={`summary-box ${isCardOpen ? 'open' : 'close'}`}>
//         <div className="summary-box__info__indicateur">
//         <div
//             className={`summary-box__info__indicateur__value ${isHovered ? 'hovered' : ''}`}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <FontAwesomeIcon icon={faLeaf} />
//             {isHovered && <span className="hover-text"> </span>}
//           </div>
//           <div className="summary-box__info__indicateur__title">
//             <CircleBox item={item} />
//           </div>

//           <button className="toggle-button" onClick={toggleCard}>
//             {isCardOpen ? 'Close' : 'Open'} More Info
//           </button>
//           {isCardOpen && (
//             <div className="more-info">
//               {/* Add your additional information here */}
//               <div className="row">
//             <div className="col-6">
//               <div className="summary-box__info__indicateur__value">
//                 <FontAwesomeIcon icon={faPlusCircle} />
//                 <span className="hover-text">Collecte</span>
//               </div>
//             </div>
//             <div className="col-6">
//               <div className="summary-box__info__indicateur__value">
//                 <FontAwesomeIcon icon={faMinusCircle} />
//                 <span className="hover-text">Test</span>
//               </div>
//             </div>
//           </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </Box>
//   );
// };

// export const SummaryBoxIndicateursLogo = ({ item }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <div>
//       <div className="summary-box">
//         <div className="summary-box__info__indicateur">
//           <div className="summary-box__info__indicateur__value" onClick={toggleModal}>
//             <span className="hover-text">{item.title}</span>
//           </div>
//           <div className="summary-box__info__indicateur__title">
//             <CircleBox item={item} />
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <div className="modal-content">
//               {/* Add your additional information here */}
//               <div className="row">
//                 <div className="col-6">
//                   <div className="summary-box__info__indicateur__value">
//                     <FontAwesomeIcon icon={faPlusCircle} />
//                     <Typography className="hover-text">Collecte</Typography>
//                   </div>
//                 </div>
//                 <div className="col-6">
//                   <div className="summary-box__info__indicateur__value">
//                     <FontAwesomeIcon icon={faMinusCircle} />
//                     <Typography className="hover-text">Méthanisation</Typography>
//                   </div>
//                 </div>
//               </div>
//               <button className="close-button" onClick={toggleModal}>
//                 Fermer
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export const SummaryBoxIndicateursLogo = ({ item, currentData }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   console.log(currentData.impactEcosysteme[0].chartData.data.values)

//   return (
//     <div>
//       <div className="summary-box">
//         <div className="summary-box__info__indicateur">
//           <div className="summary-box__info__indicateur__value" onClick={toggleModal}>
//             <span className="hover-text">{item.title}</span>
//             <FontAwesomeIcon icon={faArrowUpLong} bounce style={{color: "#00ff00",}} />
//             <FontAwesomeIcon icon={faArrowDown} bounce style={{color: " #FF0000",}} />
//             <sup> {currentData.impactEcosysteme[0].chartData.data.values[0]}</sup>
//           </div>
//           <div className="summary-box__info__indicateur__title">
//             <CircleBox item={item} />
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <InfoCard
//           title={item.title}
//           text={item.text}
//           list={item.list}
//           onClose={toggleModal} // Pass the toggleModal function to close the modal
//         />
//       )}
//     </div>
//   );
// };


export const SummaryBoxIndicateursLogo = ({ item, currentData, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };



  return (
<div>
  <div className="summary-box">
    <div className="summary-box__info__indicateur">
      <div className="summary-box__info__indicateur__value" key={index} onClick={toggleModal}>
        <span className="hover-text">{item.title}</span>
        {item.value_after < item.value ? (
          <>
            <FontAwesomeIcon icon={faArrowDown} bounce style={{ color: "#ff0000" }} />
            <sup> - {item.value - item.value_after} </sup>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faArrowUpLong} bounce style={{ color: "#00ff00" }} />
            <sup> + {item.value_after - item.value} </sup>
          </>
        )}
        <CircleBox item={item} />
      </div>
    </div>
  </div>
  
      {isModalOpen && (
        <InfoCard
          title={item.title}
          text={item.text}
          list={item.analyse}
          advice={item.advices}
          onClose={toggleModal}
        />
      )}
    </div>
  );
  
      };    

export const SummaryBoxNotes = ({ item }) => {
  return (
    <Box>
      <div className="summary-box">
        <div className="summary-box__info__indicateur">
          <div className="summary-box__info__indicateur__title">
            {item.value}
          </div>
          <div className="summary-box__info__indicateur__value">
            {item.title}
          </div>
        </div>
      </div>
    </Box>
  );
};

export const SummaryBoxNotesBtn = ({ item }) => {
  return (
    <Box>
      <div className="summary-box">
        <div className="summary-box__info__indicateur">
          <div className="summary-box__info__indicateur__title">
            {item.value}
          </div>
          <div className="summary-box__info__indicateur__value">
            {item.title}
          </div>
        </div>
        <Button variant="outlined">
          En savoir plus
        </Button>
      </div>
    </Box>
  );
};

export const SummaryBoxSpecialGES = ({ item }) => {
  const chartOptions = {
    responsive: true,
    scales: {
      xAxis: {
        display: true,
      },
      yAxis: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const chartData = {
    labels: item.chartData.labels,
    datasets: [
      {
        label: "Revenue",
        data: item.chartData.data,
        borderColor: "blue",
        tension: 0.5,
        backgroundColor: "#FF9066",
      },
    ],
  };
  return (
    <Box>
      <div className="summary-box-special">
        <div className="summary-box-special__title">{item.title}</div>
        <div className="summary-box-special__value">{item.value}</div>
        <div className="summary-box-special__chart">
          <Bar options={chartOptions} data={chartData} width={`250px`} />
        </div>
      </div>
    </Box>
  );
};

export const SummaryBoxSpecialEconomique = ({ item, widthGiven }) => {
  const chartOptions = {
    responsive: true,
    scales: {
      xAxis: {
        display: true,
      },
      yAxis: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const chartData = {
    labels: item.chartData.labels,
    datasets: [
      {
        label: "Revenue",
        data: item.chartData.data,
        borderColor: "blue",
        tension: 0.5,
        backgroundColor: "#6fa8dc",
      },
    ],
  };
  return (
    <Box>
      <div className="summary-box-special">
        <div className="summary-box-special__title">{item.title}</div>
        <div className="summary-box-special__value">{item.value}</div>
        <div className="summary-box-special__chart">
          <Bar options={chartOptions} data={chartData} width={widthGiven} />
        </div>
      </div>
    </Box>
  );
};

export const SummaryBoxSpecialEcosystemique = ({ item, widthGiven }) => {

  const data = []
  const data_after = []

  for (let i = 0; i < item.length; i++) {
    data.push(item[i].value)
    data_after.push(item[i].value_after)
  }

  const chartData = {
    labels: [ 'Qualité du sol', 'Biodiversité', 'Hydrologique', 'Brise-vent et diminution des températures', 'Stockage du carbone', "Qualité de l'air", 'Risques naturels' ],
    datasets: [{
      label: 'Avant ',
      data: data,
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Après ',
      data:data_after,
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]}

    const chartOptions = {
      responsive: true,
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
        r: {
          pointLabels: {
            font: {
              size: 11,
            },
          },
        }
        
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: 'rgb(255, 99, 132)',
            usePointStyle: true, // Use the point style (marker) for dataset labels
            font: {
              size: 16, // Adjust the font size for dataset labels
            },
          },
        },
      },
      elements: {
        point: {
          radius: 5,
        },
      },
    };

  return (
    <Box>
      <div className="summary-box-special">
        <div className="summary-box-special__chart">
          <Radar
            options={chartOptions}
            data={chartData}
            width={widthGiven}
          />
        </div>
      </div>
    </Box>
  );
};

export default SummaryBox;
