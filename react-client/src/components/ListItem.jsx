
import React from 'react'

const ListItem = ({ address, locationName, description, removeItem }) => (<li onClick={removeItem}> ${`${address}; ${locationName}; ${description}`}</li>
)

export default ListItem
