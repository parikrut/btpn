export const MovieCard = ({ movie, LikeMovie, DisLikeMovie }) => {
  const likeClass = movie.liked ? "btn btn-primary" : "btn btn-secondary";
  const unlikeClass = movie.unliked ? "btn btn-danger" : "btn btn-secondary";

  return (
    <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded">
      <div className="card-body d-flex flex-column justify-between">
        <div>
          <h5 className="card-title">
            <u>{movie?.title}</u>
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {movie?.release_date}
          </h6>
          <p className="card-text">{movie?.overview}</p>
        </div>
        <div className="mt-auto d-flex flex-row justify-content-between">
          {movie?.unliked ? (
            <div></div>
          ) : (
            <button className={likeClass} onClick={() => LikeMovie(movie?.id)}>
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
          )}
          {movie?.liked ? (
            <div></div>
          ) : (
            <button
              className={unlikeClass}
              onClick={() => DisLikeMovie(movie?.id)}
            >
              <i className="fa-solid fa-thumbs-down"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
