import React from 'react'
import Content from './Content';
import Header from './Header'
import Profil from './Profil'

const Dashboard = () => (
  <div className="dashboardPage">
    <div className="profil">
      <Profil></Profil>
    </div>
    <div className="headerContent">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
);

export default Dashboard;