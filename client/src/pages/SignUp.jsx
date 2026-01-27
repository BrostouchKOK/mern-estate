import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return
      }
      setLoading(false);
      setError(null)

      if(data.success === true){
        toast.success(data.message);
        navigate("/sign-in")
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);

    }
  };

  return (
    <div className="py-5 px-7 max-w-lg mx-auto mt-7 rounded-md shadow-lg">
      <h1 className="text-3xl text-center font-bold">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="p-3 rounded-lg border outline-none"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="p-3 rounded-lg border outline-none"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="p-3 rounded-lg border outline-none"
          onChange={handleChange}
        />

        <button className="uppercase p-3 rounded-lg bg-blue-500 text-white hover:opacity-95 disabled:opacity-80 cursor-pointer">
          Sign Up
        </button>
      </form>

      <div className="flex gap-2 my-5">
        <p>Have an account?</p>
        <Link to={"/"}>
          <span className="text-blue-700 hover:underline">Sign in</span>
        </Link>
      </div>
      {
        error && <p className="text-red-500 mt-5">{error}</p>
      }
    </div>
  );
};

export default SignUp;
