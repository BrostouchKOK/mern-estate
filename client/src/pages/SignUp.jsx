import {Link} from "react-router-dom"

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center my-7 font-bold'>Sign Up</h1>
      <form className='flex flex-col gap-4'>

        <input type="text" placeholder='username' id='username' className='p-3 rounded-lg border outline-none' />
        <input type="email" placeholder='email' id='email' className='p-3 rounded-lg border outline-none' />
        <input type="password" placeholder='password' id='password' className='p-3 rounded-lg border outline-none' />

        <button className='uppercase p-3 rounded-lg bg-blue-500 text-white hover:opacity-95 disabled:opacity-80 cursor-pointer'>Sign Up</button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link>
          <span className="text-blue-700 hover:underline">Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp
