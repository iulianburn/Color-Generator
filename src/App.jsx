import React, { useState } from 'react'
import Form from './Form'
import ColorList1 from './ColorList1'
import { ToastContainer,toast } from 'react-toastify'
import Values from 'values.js'


const App = () => {
  const[colors,setColors]=useState(new Values('#f15025').all(10));

  const addColor=(color)=>{
try {
    const newColors=new Values(color).all(5); 
    setColors(newColors);
} catch (error) {
  toast.error(error.message);
}  }

  return (
    <main>
      <Form addColor={addColor}/>
      <ColorList1 colors={colors}/>  
      <ToastContainer position='top-center'/>
    </main>
  )
}

export default App