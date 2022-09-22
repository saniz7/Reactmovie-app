import React from 'react'

const Favourite = (props) => {
  return (
    <div>
        <div className='Navbar-Heading'style={{marginLeft:"20px"}}>
            <h3 >Favourite</h3>
        </div>
        <div className='Movie-container'>
            {
                props.movies.map(data => {
                    return (
                        <div class="card">
                            <img src={data.Poster} class="card-img-top" alt="movie"></img>
                            <div onClick={() => props.handleFavourite(data)} className="Overlay">
                                <span>Remove Favourite <i class="fa-thin fa-heart"></i>   </span>
                            </div>
                            <div class="card-body">
                                <p class="card-text">{data.Title}</p>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    </div>
    
  )
}

export default Favourite