import {React,useState} from 'react'

function CategoryItem() {
    const [value, setValue] = useState('All');

 const handleChange = (event) => {

   setValue(event.target.value);

 };
  return (
    <div className=' flex gap-2'>
    <select value={value} onChange={handleChange}>

        <option value="All">All</option>

        <option value="Politics">Politics</option>

    </select>
    <p >{value}</p>
    </div>
  )
}

export default CategoryItem
