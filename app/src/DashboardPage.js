import React, { useEffect, useRef } from 'react';
//import { Bar, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './DashboardPage.css';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    const barChartCtx = barChartRef.current.getContext('2d');
    const pieChartCtx = pieChartRef.current.getContext('2d');

    const barChart = new Chart(barChartCtx, {
      type: 'bar',
      data: {
        labels: ['Guest', 'User'],
        datasets: [
          {
            label: 'Number of Users',
            data: [10, 20],
            backgroundColor: ['#4caf50', '#2196f3'],
            borderColor: ['#4caf50', '#2196f3'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
            labels: ['Guest', 'User'],
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const pieChart = new Chart(pieChartCtx, {
      type: 'pie',
      data: {
        labels: ['Product A', 'Product B', 'Product C'],
        datasets: [
          {
            data: [30, 40, 30],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
            hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
          },
        ],
      },
    });

    return () => {
      barChart.destroy();
      pieChart.destroy();
    };
  }, []);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-item">Boards</div>
        <div className="sidebar-item">Transactions</div>
        <div className="sidebar-item">Schedules</div>
        <div className="sidebar-item">Users</div>
        <div className="sidebar-item">Settings</div>
        <Link to="/add-profile">
        <button>Add Profile</button>
      </Link>
      </div>

      <div className="dashboard-part">
        <div className="dashboard-part-header">Dashboard</div>
        <div className="summary-container">
          <h3>Total Revenue</h3>
          <p>$50,000</p>
        </div>
        <br></br>
       
        

        <div className="summary-container">
          <h3>Total Transactions</h3>
          <p>2000</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      

      <div>
      <div className="dashboard-part">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <div className="dashboard-part-header">Activities</div>
        <div className="dashboard-graph">
          <canvas ref={barChartRef} />
        </div>
      </div>
      </div>
      <div className="dashboard-part">
        <div className="dashboard-part-header">Top Product</div>
        <div className="summary-container">
          <h3>Top Products</h3>
          <p>Product A: 30</p>
          <p>Product B: 40</p>
          <p>Product C: 30</p>
        </div>
        <div className="add-profile-link">
          
        </div>
      </div>
      <div className="dashboard-pie-chart">
        <canvas ref={pieChartRef} />
      </div>
    </div>
  );
};

export default DashboardPage;
