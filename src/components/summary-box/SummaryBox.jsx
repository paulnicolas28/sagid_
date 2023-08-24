import React from "react";
import "./summary-box.scss";
import Box from "../box/Box";

import { Line, Bar, Doughnut, Radar, PolarArea, Pie } from "react-chartjs-2";
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
import { faLeaf, faPlusCircle, faMinusCircle, faArrowDown, faArrowUpRightFromSquare, faArrowUpLong, faArrowRight} from "@fortawesome/free-solid-svg-icons";

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
        ) : item.value_after > item.value ? (
          <>
            <FontAwesomeIcon icon={faArrowUpLong} bounce style={{ color: "#00ff00" }} />
            <sup> + {item.value_after - item.value} </sup>
          </>
        ) : (
          // Display an arrow to the right when item.value_after equals item.value
          <>
            <FontAwesomeIcon icon={faArrowRight} bounce style={{ color: "#0000ff" }} />
            <sup> 0 </sup>
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

  let value_sum = 0;
  let value_sum_after = 0;
  let percent = 0;

  for (let i = 1; i < item.length; i++) {
    value_sum += item[i].value;
    value_sum_after += item[i].value_after;
  }

  percent = Math.round((value_sum_after - value_sum) / value_sum * 100);

  return (
    <Box>
      <div className="summary-box">
        <div className="summary-box__info__indicateur">
          <div className="summary-box__info__indicateur__title">
            Avant : {value_sum} {item[0].unit} <br />
            Après : {value_sum_after} {item[0].unit} <br />
            Pourcent : {percent} %

            {value_sum < value_sum_after ? (
          <>
            <FontAwesomeIcon icon={faArrowDown} bounce style={{ color: "#ff0000" }} />
            <sup> - {value_sum - value_sum_after} </sup>
          </>
        ) : value_sum_after > value_sum ? (
          <>
            <FontAwesomeIcon icon={faArrowUpLong} bounce style={{ color: "#00ff00" }} />
            <sup> + {value_sum_after - value_sum} </sup>
          </>
        ) : (
          // Display an arrow to the right when item.value_after equals item.value
          <>
            <FontAwesomeIcon icon={faArrowRight} bounce style={{ color: "#0000ff" }} />
            <sup> 0 </sup>
          </>
        )}

          </div>
          <div className="summary-box__info__indicateur__value">
            {item[0].title} 
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

const datasetColors = [
  '#8624DB',
  '#FF9066',
  '#3F51B5',
  '#fff',
  '#4CAF50',
  '#DB190C',
  '#FFEB3B',];

export const SummaryBoxSpecialGES = ({ item }) => {
  const data = []
  const data_after = []
  const data_labels = []

  for (let i = 1; i < item.length; i++) {
    data.push(item[i].value)
    data_after.push(item[i].value_after)
    data_labels.push(item[i].title)
  }

  const chartOptions = {
    responsive: true,
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const chartData = {
    labels: data_labels,
    datasets: [
      {
        label: "Revenue",
        data: data,
        tension: 0.5,
        backgroundColor: datasetColors,
      },
      {
        label: "Revenue After",
        data: data_after,
        tension: 0.5,
        backgroundColor: datasetColors,
      },
    ],
  };
  return (
    <Box>
      <div className="summary-box-special">
        <div className="summary-box-special__title">{item.title}</div>
        <div className="summary-box-special__value">{item.value}</div>
        <div className="summary-box-special__chart">
          <Doughnut options={chartOptions} data={chartData} width={`250px`} />
        </div>
      </div>
    </Box>
  );
};

export const SummaryBoxSpecialEconomique = ({ item, widthGiven }) => {

  const data = []
  const data_after = []
  const data_labels = []

  for (let i = 1; i < item.length; i++) {
    data.push(item[i].value)
    data_after.push(item[i].value_after)
    data_labels.push(item[i].title)
  }

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
        display: true,
      },
    },
    elements: {
      point: {
        radius: 1,
      },
    },
  };

  const chartData = {
    labels: data_labels,
    datasets: [
      {
        label: "Revenue",
        data: data,
        borderColor: "blue",
        tension: 0.5,
        backgroundColor: "blue",

      },
      {
         label: "Revenue After",
         data: data_after,
         borderColor: "blue",
         tension: 0.5,
         backgroundColor: "#FF9066",

       }
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
  const data_labels = []

  for (let i = 0; i < item.length; i++) {
    data.push(item[i].value)
    data_after.push(item[i].value_after)
    data_labels.push(item[i].title)
  }

  const chartData = {
    labels: data_labels,
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
