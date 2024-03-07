import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { useSelector } from "react-redux";

export default function Navbar() {
  const navigator = useNavigate();
  const { loggedIn } = useContext(AuthContext);
  const { items = [] } = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-6">
            <a className="navbar-brand" href="#">
              Vishnu Blog Site
            </a>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-9">
                <ul className="nav">
                  <li className="nav-item">
                    <NavLink
                      to="/all"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "nav-link active"
                          : "nav-link"
                      }
                      aria-current="page"
                    >
                      All Courses
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/fsd"
                      className={({ isActive, isPending }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      aria-current="page"
                    >
                      Full Stack Development
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/db"
                      className={({ isActive, isPending }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      aria-current="page"
                    >
                      Database
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/be"
                      className={({ isActive, isPending }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      aria-current="page"
                    >
                      Backend Technologies
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/cart"
                      className={({ isActive, isPending }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      aria-current="page"
                    >
                      Cart ({items.length})
                    </NavLink>
                  </li>
                </ul>
              </div>
              {!loggedIn && (
                <div className="col-3 d-grid gap-2 d-md-block">
                  <button
                    type="button"
                    className="btn btn-outline-primary mx-2"
                    onClick={() => navigator("/login")}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => navigator("/signup")}
                  >
                    Signup
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
