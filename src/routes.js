import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Header } from "./component/Header";
import HomePage from "./pages/home.page";
import LikedPage from "./pages/liked.page";
import UnLikedPage from "./pages/unliked.page";
const Routes = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data, status } = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=d0f5f2e135336200362af8a1a73acb17`
        );

        if (status === 200) {
          setMovies(
            data?.results?.map((item) => {
              return {
                ...item,
                liked: false,
                unliked: false,
              };
            })
          );
        }
      } catch (error) {
        setError(true);
        setErrorMessage(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [page]);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{JSON.stringify(errorMessage)}</>;
  }

  const LikeMovie = (id) => {
    setMovies(
      movies?.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            liked: !item.liked,
          };
        }
        return item;
      })
    );
  };
  const DisLikeMovie = (id) => {
    setMovies(
      movies?.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            unliked: !item.unliked,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomePage
              Movies={movies}
              LikeMovie={LikeMovie}
              DisLikeMovie={DisLikeMovie}
            />
          )}
        />
        <Route
          exact
          path="/liked"
          render={() => (
            <LikedPage
              Movies={movies}
              LikeMovie={LikeMovie}
              DisLikeMovie={DisLikeMovie}
            />
          )}
        />
        <Route
          exact
          path="/unliked"
          render={() => (
            <UnLikedPage
              Movies={movies}
              LikeMovie={LikeMovie}
              DisLikeMovie={DisLikeMovie}
            />
          )}
        />
      </Switch>
    </div>
  );
};
export default withRouter(Routes);
