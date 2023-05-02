import React from 'react'
import SingleColor from './singleColor'
import { nanoid } from 'nanoid'
const ColorList1 = ({colors}) => {

  return (
    <section className='colors'>
    {colors.map((color, index)=>{
        return <SingleColor key={nanoid()} color={color} index={index}/>
    })}
    </section>
  )
}

export default ColorList1