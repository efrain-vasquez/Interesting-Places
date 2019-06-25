
import React from 'react'
import ListItem from './ListItem.jsx'

const IntereestingPlacesList = ({ list, handleRemove }) => (
  <ul className='items'>
    {list.map(item => (
      <ListItem
        address={item.address}
        locationName={item.locationName}
        description={item.description}
        removeItem={() => handleRemove('/items', item.id)}
      />
    ))}
  </ul>
)

export default IntereestingPlacesList
