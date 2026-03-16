import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:3000/user/login", userInfo)
            .then((res) => {
                if (res.data) {
                    toast.success('Login successfull!');
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user))
            })
            .catch((error) => {
                if (error.response) {
                    toast.error(error.response.data.message);
                }
            })
    }

    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle bg-black/10">

                <div className="modal-box bg-white/70 backdrop-blur-md relative">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <button
                            type="button"
                            onClick={() => document.getElementById("my_modal_5")?.close()}
                            className="btn btn-circle btn-ghost absolute right-2 top-3 text-xl"
                        >
                            ✕
                        </button>


                        <h3 className="font-bold text-2xl text-center">Login</h3>

                        <div className="mt-8">
                            <label className="text-lg font-semibold text-gray-800">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="border border-pink-500 rounded-lg w-full h-12 px-3 outline-none mt-2
                                focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-700'>This field is required*</span>}

                            <label className="text-lg text-gray-800 font-semibold mt-4 block">Password</label>

                            <div className="relative mt-2">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter Your Password"
                                    className="border border-pink-500 rounded-lg w-full h-12 px-3 pr-12 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className='text-red-700'>This field is required*</span>}

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="modal-action justify-center mt-6">
                            <button className="btn bg-pink-500 hover:bg-pink-600 text-white w-full rounded-lg mb-2 h-12">
                                Login
                            </button>
                        </div>
                        <div className='text-center text-sm mt-2'>
                            <p>New to Bookst@re? <span className="cursor-pointer text-pink-500 hover:underline"><Link to={"/signup"}>Sign up</Link></span></p>
                        </div>

                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
