import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
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
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        toast.error(data.message)
        // setError(data.message);
        return
      }
      setLoading(false);

      if(data.success === true){
        toast.success(data.message);
        navigate("/")
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);

    }
  };

  return (
    <div className="py-5 px-7 max-w-lg mx-auto mt-7 rounded-md shadow-lg">
      <h1 className="text-3xl text-center font-bold">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4">
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
          {loading ? "Loading" : "Sign In"}
        </button>
      </form>

      <div className="flex gap-2 my-5">
        <p>don't have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700 hover:underline">Sign Up</span>
        </Link>
      </div>
      
    </div>
  );
};

export default SignIn;
