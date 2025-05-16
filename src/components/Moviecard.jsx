function Moviecard({ movie }) {
  function onFavouriteClick() {
    alert("Clicked");
  }

  return (
    <>
      <div className="movie-card">
        <div className="movie-post">
          <img src={movie.url} alt={movie.title} />
          <div className="movie-overlay">
            <button className="favourite-btn" onClick={onFavouriteClick}>
              ❤️
            </button>
          </div>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </>
  );
}

export default Moviecard;
