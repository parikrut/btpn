import { Link } from "react-router-dom";

export const Header = () => (
  <>
    <div className="d-flex flex-column justify-content-between flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <Link href="/" to="/">
        <h5 className="cursor-pointer my-0 mr-md-auto font-weight-normal">
          Movie List
        </h5>
      </Link>
      <div className="d-flex flex-row gap-3">
        <Link href="/liked" to="/liked">
          <button className="btn btn-outline-primary">Liked Movies</button>
        </Link>
        <Link href="/unliked" to="/unliked">
          <button className="btn btn-outline-danger">UnLiked Movies</button>
        </Link>
      </div>
    </div>
    <div>
      <h5 className="h6 text-danger text-center m-4">
        *** Liked/Unliked Data is saved in state so on refresh you will loss
        state ***
      </h5>
    </div>
  </>
);
