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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowAltCircleUp, faCheckCircle, faLeaf, faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

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

export const SummaryBoxIndicateursLogo = ({ item }) => {
  return (
    <Box>
    <div className="summary-box">
      <div className="summary-box__info__indicateur">
        <div className="summary-box__info__indicateur__value"><FontAwesomeIcon icon={faLeaf} /></div>
        <div className="summary-box__info__indicateur__title">
          <CircleBox item={item} />
        </div>
        <div className="row">
          <div className="col-6">
            <div className="summary-box__info__indicateur__value"><FontAwesomeIcon icon={faPlusCircle} />Collecte</div>
          </div>
          <div className="col-6">
            <div className="summary-box__info__indicateur__value"><FontAwesomeIcon icon={faMinusCircle} />Compostage</div>
          </div>
        </div>
      </div>
    </div>
    </Box>
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

export const SummaryBoxSpecialEcosystemique = ({ item, item2, widthGiven }) => {
  const chartData = {
    labels: [
      "Fonction de maintien de la matière organique et de la qualité du sol",
      "Fonction de maintien de la biodiversité",
      "Fonction hydrologique",
      "Fonction brise-vent et diminution des températures",
      "Fonction de stockage du carbone",
      "Fonction de régulation de la qualité de l'air",
      "Fonction de régulation des nuisances et des risques naturels",
    ],
    datasets: [{
      label: 'Avant ',
      data: item.chartData.data.values,
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Après ',
      data: item2.chartData.data,
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
