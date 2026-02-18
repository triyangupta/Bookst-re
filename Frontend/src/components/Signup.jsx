import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from "react-hook-form"

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm()
    
        const onSubmit = (data) => console.log(data)

    return (
        <div className="min-h-screen flex items-center justify-center  from-pink-100 via-white to-pink-200 px-4">
            <div className=" w-full max-w-md bg-white/80 backdrop-blur-lg btn-ghost rounded-2xl shadow-2xl p-8 relative">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    <button className="absolute right-3 top-3 btn btn-circle  text-gray-500 hover:text-gray-800 text-xl">
                        <Link to={"/"}>✕</Link>
                    </button>

                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Create Account
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Name</label>
                            <input
                                type="name"
                                placeholder="Enter your name"
                                className="mt-1 w-full border border-pink-400 rounded-lg h-12 px-3 outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                                 {...register("name", { required: true })}
                            />
                            {errors.name && <span className='text-red-700'>This field is required*</span>}

                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="mt-1 w-full border border-pink-400 rounded-lg h-12 px-3 outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                                 {...register("email", { required: true })}
                                />
                                 {errors.email && <span className='text-red-700'>This field is required*</span>}

                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-700">Password</label>
                            <div className="relative mt-1">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create password"
                                    className="w-full border border-pink-400 rounded-lg h-12 px-3 pr-12 outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className='text-red-700'>This field is required*</span>}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <button className="w-full h-12 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition shadow-md">
                            Sign Up
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-600 mt-6">
                        Already have an account?{" "}
                        <Link to={"/"} className="text-pink-600 font-semibold hover:underline"
                        >
                            Login
                        </Link>

                    </p>
                </form>
            </div>
        </div >
    )
}

export default Signup
