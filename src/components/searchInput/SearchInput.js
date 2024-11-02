import React from 'react'
import './searchInput.css'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../redux/Filter/FİlterSlice'

function SearchInput() {
  const dispatch = useDispatch()
  const searchKey = useSelector((state) => state.filter)

  return (
    <div className='search-input'>
        <input placeholder='Search...' value={searchKey} onChange={(e) => dispatch(setFilter(e.target.value))}/>
    </div>
  )
}

export default SearchInput
