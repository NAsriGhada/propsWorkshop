import React from 'react'
import Item from '../Item/Item'

const ListItem = ({itemArray}) => {
  const handleVision = (name) => {
    alert(`The product's name is ${name}`)
  }
  return (
    <div className='container'>
        <table className='table'>
        <thead>
          <tr>
            <th scope="col">Click</th>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
        {itemArray.map((el, i) => (
            <Item el={el} key={i} handleVision={handleVision}/>
          ))}
        </tbody>
        </table>
    </div>
  )
}

export default ListItem