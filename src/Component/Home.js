

const Home = (props) => {

    return (
        <div className='Movie-container'>
            {
                props.movies.map(data => {
                    return (
                        <div class="card">
                            <img src={data.Poster} class="card-img-top" alt="movie"></img>
                            <div onClick={() => props.handleFavourite(data)} className="Overlay">
                                <span>Add to Favourites <i class="fa-thin fa-heart"></i>   </span>
                            </div>
                            <div class="card-body">
                                <p class="card-text">{data.Title}</p>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home