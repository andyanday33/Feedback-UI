import React from 'react'

function Card({ children } : ICardProps) {
  return (
    <div className='card'>{ children }</div>
  )
}

export default Card