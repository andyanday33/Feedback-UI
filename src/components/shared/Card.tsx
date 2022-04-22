import React from 'react'

interface ICardProps {
    children: React.ReactNode,
}

function Card({ children } : ICardProps) {
  return (
    <div className='card'>{ children }</div>
  )
}

export default Card