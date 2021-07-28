import React from 'react'
import Content from './Content';
import Header from './Header'
import Profil from './Profil'
import { useMediaQuery } from 'react-responsive'
import settings from '../base/settings.json';


const Dashboard = () => {
  
  const isBigScreen = useMediaQuery({ query: '(min-width: '+settings.bigScreenBreakpoint+')' });
  const isMobileScreen = useMediaQuery({ query: '(min-width: '+settings.mobileScreenBreakpoint+')' });
  return (
  
  <div className= {`dashboard ${isBigScreen ? "dashboard_bigScreen" : isMobileScreen ? "dashboard_MobileScreen" : "dashboard_smallScreen"}`}>
    <div className={`dashboard__profil ${isBigScreen ? "dashboard__profil_bigScreen" : isMobileScreen ? "dashboard__profil_MobileScreen" : "dashboard__profil_smallScreen"}`}>
      <Profil></Profil>
    </div>
    <div className={`dashboard_headerContent ${isBigScreen ? "dashboard_headerContent_bigScreen" : isMobileScreen ? "dashboard_headerContent_MobileScreen" : "dashboard_headerContent_smallScreen"}`}>
      <Header></Header>
      <Content></Content>
    </div>
  </div>
)};

export default Dashboard;