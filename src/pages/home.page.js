import { MovieCard } from "../component/Cards/movie.card";

const Home = ({ Movies, LikeMovie, DisLikeMovie }) => {
  return (
    <div className="row">
      {Movies.map((movie) => {
        return (
          <div className="col-md-4 mb-4">
            <MovieCard
              key={movie.id}
              movie={movie}
              LikeMovie={LikeMovie}
              DisLikeMovie={DisLikeMovie}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
