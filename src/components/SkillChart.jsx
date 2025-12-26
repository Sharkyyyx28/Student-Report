import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SkillChart = ({ skills }) => {
  const data = {
    labels: ['Pronunciation', 'Fluency', 'Vocabulary', 'Grammar'],
    datasets: [
      {
        label: 'Candidate Score',
        data: [skills.pronunciation, skills.fluency, skills.vocabulary, skills.grammar],
        backgroundColor: 'rgba(99, 102, 241, 0.2)', 
        borderColor: 'rgba(99, 102, 241, 1)',      
        borderWidth: 2,
        pointBackgroundColor: '#fff',
        pointBorderColor: 'rgba(99, 102, 241, 1)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(99, 102, 241, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { color: 'rgba(0,0,0,0.05)' },
        grid: { color: 'rgba(0,0,0,0.05)' },
        pointLabels: {
          font: { size: 11, family: 'sans-serif', weight: '600' },
          color: '#64748b', 
        },
        ticks: { display: false, stepSize: 2 }, 
        min: 0,
        max: 9,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e293b',
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
      }
    },
  };

  return (
    <div className="relative w-full h-[300px]">
      <Radar data={data} options={options} />
    </div>
  );
};

export default SkillChart;