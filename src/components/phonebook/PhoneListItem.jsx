import React from 'react'

const PhoneListItem = ({item}) => {
  return (
    <li>
      {item.name + ' ' + item.phoneNumber}
    </li>
  )
}

export default PhoneListItem