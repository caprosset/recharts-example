import React from 'react';
import './App.css';
import data from './totalCoronavirusCases'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, PieChart, Pie, Cell, Bar, ComposedChart, Legend } from 'recharts'

var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
      
function App() {
  return (
    <div className="App">
      <h1>Recharts Demo</h1>

      <div>
        <h3>LineChart</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart  width={700} height={350} data={data.totalCoronavirusCases}>
            <Line dataKey="cases" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <CartesianGrid />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3>PieChart</h3>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart >
            <Pie data={data.distributionOutsideChina} dataKey="cases" label>
            {
              data.distributionOutsideChina.map((entry, index) => (
                <Cell fill={colorArray[index]}/>
              ))
            }
            </Pie>
           <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3>BarChart / ComposedChart</h3>
        <ResponsiveContainer width="100%" height={350}>
        <ComposedChart width={730} height={250} data={data.dailyDeathsAndRecoveries}>
            <Bar dataKey="deaths" barSize={20} />
            <Line dataKey="recoveries" />
            <XAxis dataKey="date" />
            <YAxis type="number" />
            <Tooltip />
            <Legend />
        </ComposedChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default App;
