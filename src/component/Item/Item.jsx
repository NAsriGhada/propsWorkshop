import React from 'react'
import Image from '../../assets/vision.png'
import './Item.css'

const Item = ({ el, handleVision }) => {
  return (
    <>
        <tr>
            <th scope="row">
            <img 
                  className='clickImg'
                  src={Image}
                  alt='Vision'
                  onClick={ () => handleVision(el.name) }
                />
            </th>
            <td>
                <img className='rounded' src={el.imgSrc} alt={el.name} />
            </td>
            <td>
                <h3>{el.name}</h3>
            </td>
            <td>
                <h3>{el.price}</h3>
            </td>
        </tr>
    </>
  )
}

export default Item