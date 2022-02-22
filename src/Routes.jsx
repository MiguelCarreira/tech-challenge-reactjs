import React from 'react';
import {Routes, Route} from 'react-router-dom'
import UserInformation from './components/UserInformation';
import Home from './Home';

const MainRoutes = () => ( 
 
    <Routes>              
        <Route path="/" exact element={<Home />}/>                        
        <Route path="user/:id" element={<UserInformation/>}/>                    
    </Routes>

  )
  
  export default MainRoutes