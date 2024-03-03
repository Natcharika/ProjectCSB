import React from 'react'
import ReactDOM from 'react-dom/client'
import SignIn from './login.jsx'
import './login.jsx'
import FormPropsTextFields from './CSB01.jsx'
import './CSB01.jsx'
import MyComponent from './component/UplinkS2.jsx'
import TestSpecial2 from './component/S2.jsx'
import TestSpecial1 from './component/S1.jsx'
import LinkS2 from './component/UplinkS2.jsx'
import LinkS1 from './component/UplinkS1.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignIn />
    <FormPropsTextFields/>
    <AverageScoreCalculator/>
    <MultipleSelectChip/> 
    <MyComponent/>
    <TestSpecial2/>
    <TestSpecial1/>
    <LinkS2/>
    <LinkS1/>

  </React.StrictMode>,
)
