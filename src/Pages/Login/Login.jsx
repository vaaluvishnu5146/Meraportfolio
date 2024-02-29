import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setLoggedIn } = useContext(AuthContext);
  const navigator = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          setLoggedIn(true);
          navigator("/all");
        }}
      >
        Login
      </button>
    </div>
  );
}
