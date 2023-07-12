import React from 'react';
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
    RadialLinearScale
} from 'chart.js'

import { Radar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend,
    RadarController
)



const RadarChart = () => {
    const data = {
        labels: [
          'Fonction de maintien de la matière organique et de la qualité du sol',
          'Fonction de maintien de la biodiversité',
          'Fonction hydrologique',
          'Fonction brise-vent et diminution des températures',
          'Fonction de stockage du carbone',
          "Fonction de régulation de la qualité de l'air",
          'Fonction de régulation des nuisances et des risques naturels'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132,)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        },]
      };
  
      const config = {
        type: 'radar',
        data: data,
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        },
      };
  
    return (
      <div>
        <Radar data={data} options={config} />
      </div>
    );
  };
  
export default RadarChart;