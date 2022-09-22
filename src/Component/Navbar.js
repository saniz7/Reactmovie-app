import React from 'react'

const Navbar = (props) => {
    return (
    <div className='Navbar-container'>
        <div className='Navbar-Heading'>
            <h3>Movies</h3>
        </div>
        <div className='Navbar-search'>
            <input className='Searchbox' value={props.value}
            onChange={(event)=>props.setSearch(event.target.value)}
            placeholder='Enter a movie name... '></input>
        </div>
    </div>
    )
}

export default Navbar