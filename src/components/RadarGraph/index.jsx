// RadarGraphMock.jsx
import React from 'react';
import { Radar } from 'react-chartjs-2';
import { useTheme } from '../../context/ThemeContext';
import { color } from 'chart.js/helpers';


export const RadarGraph = () => {
    const { theme } = useTheme();
    const mockRadarData = {
        labels: ['', '', '', '', '', '', '', '', '', '', ''],
        datasets: [
            {
                label: 'Distribuição de Pontuações',
                data: [9, 8, 8, 5, 9, 10, 9, 5, 6, 7, 8],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                color : theme === "light" ? "black" : 'white',
            },
        ],
    };

    const mockRadarOptions = {
        responsive: true,
        scales: {
            r: {
                min: 0,
                max: 10,
                grid: {
                    color: theme === "light" ? "lightgrey" : 'white',
                },
                angleLines: {
                    color: theme === "light" ? "lightgrey" : 'white',
                },
                ticks: {
                    backdropColor: theme === "light" ? "white" : 'lightgrey',
                    color: theme === "light" ? "black" : 'black',
                },
                
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: theme === "light" ? "black" : 'white',
                    font: {
                        size: 14,
                    },
                },
            },
        },
    };

    return (
        <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <Radar
                role="img"
                aria-label="Gráfico de Radar mostrando a distribuição de pontuações de acessibilidade"
                data={mockRadarData}
                options={mockRadarOptions}
            />
        </div>
    );
};

export default RadarGraph;
