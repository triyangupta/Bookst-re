import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Contact = () => {
const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        navigate('/')
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4  from-pink-100 via-white to-pink-200">

            <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 relative">

                <Link
                    to="/"
                    className="absolute right-3 top-3 btn btn-circle text-gray-500 hover:text-gray-800 text-xl"
                >
                    ✕
                </Link>

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Contact Us
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    <div>
                        <label className="text-sm font-semibold text-gray-700">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="mt-1 w-full border border-pink-400 rounded-lg h-12 px-3 outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="mt-1 w-full border border-pink-400 rounded-lg h-12 px-3 outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-gray-700">Message</label>
                        <textarea
                            placeholder="Enter your message"
                            className="mt-1 w-full border border-pink-400 rounded-lg h-28 px-3 py-2 outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                            {...register("message", { required: "Message is required" })}
                        />
                        {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full h-12 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition shadow-md"
                    >
                        Submit
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Contact
