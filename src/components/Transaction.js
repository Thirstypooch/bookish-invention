import React from 'react'

export const Transaction = ({ transaction }) => {
  return (
    <li className="minus">
      {transaction.text} <span></span> <button className="delete-btn">x</button>
    </li>
  )
}
