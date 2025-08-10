import React from 'react'
import "./Dashboard.css";
import DashboardCarousel from '../../components/deshboardCarousel/DashboardCarousel'
import Batch from '../../components/batch/Batch';

function Dashboard() {
  return (
    <div className='main-dashboard'>
      <DashboardCarousel />
      <Batch/>
    </div>

  )
}

export default Dashboard