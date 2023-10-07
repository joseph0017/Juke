import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, password, password2);
  };

  return (
<section>
<br />
<br />
  <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
<div class="px-6 py-4">

    <h3 class="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

    <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

    <form onSubmit = {handleSubmit}>
        <div class="w-full mt-4">
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-fuchsia-400 dark:focus:border-fuchsia-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-fuchsia-300" 
            type="text"
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required 
            aria-label="Email Address" />
        </div>

        <div class="w-full mt-4">
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-fuchsia-400 dark:focus:border-fuchsia-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-fuchsia-300"
             type="password"
             id="password"
             onChange={e => setPassword(e.target.value)}
             placeholder="Password"
             required
            aria-label="Password" />
        </div>

        <div class="w-full mt-4">
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-fuchsia-400 dark:focus:border-fuchsia-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-fuchsia-300"
             type="password"
            id="confirm-password"
            onChange={e => setPassword2(e.target.value)}
            placeholder="Confirm Password"
            required
            aria-label="Password" />
        </div>

        <p>{password2 !== password ? "Passwords do not match" : ""}</p>

        <div class="flex items-center justify-between mt-4">
            <button class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-fuchsia-500 rounded-lg hover:bg-fuchsia-400 focus:outline-none focus:ring focus:ring-fuchsia-300 focus:ring-opacity-50">
                Sign In
            </button>
        </div>
    </form>
</div>

<div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
    <span class="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

    <Link to="/register" class="mx-2 text-sm font-bold text-fuchsia-500 dark:text-fuchsia-400 hover:underline">Register</Link>
</div>
</div>
</section>
  );
}
export default Register;
