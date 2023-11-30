import { Link } from "react-router-dom";

import './not-found.css';

const NotFound = () => {
  return (
    <>
      <section className="not-found">
        <div className="container-not-found">
          <h1>404</h1>
          <p>
            Sorry, the page you are looking for might be in another restaurant.
          </p>
          <Link to="/">Go back to the home page</Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
