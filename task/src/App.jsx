import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'
import Component4 from './components/Component4'
import Component5 from './components/Component5'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Component1/>
     <Component2/>
     <Component3/>
     <Component4/>
     <Component5/>
     
     
     <footer>
      <p>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
     </footer>
    </>
  )
}

export default App
