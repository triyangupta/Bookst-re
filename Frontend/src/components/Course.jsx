import React from 'react'
import Cards from "../components/Cards"
import {Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

const Course = () => {
    const [book,setBook]=useState([]);

    useEffect(()=>{
        const getBook=async()=>{
            try {
               const res= await axios.get("http://localhost:3000/book");
            //    console.log(res.data)
               setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    },[])

    return (
        <div className="max-w-screen-2xl mx-auto px-4 md:px-20 py-16">

            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    We're delighted to have you{" "}
                    <span className="text-pink-500">Here! :)</span>
                </h1>

                <p className="mt-6 text-base md:text-lg leading-relaxed ">
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in classical Latin literature from 45 BC, making it
                    over 2000 years old. Discovered by Richard McClintock, this text
                    comes from Cicero’s work on ethics.
                </p>
                <Link to="/">
                    <button className="mt-8 px-6 py-2.5 rounded-lg bg-pink-500 text-white font-medium
                hover:bg-pink-600 transition duration-300 shadow-md hover:shadow-lg">
                        ← Back
                    </button>
                </Link>
            </div>

            <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                {book.map((item) => (
                    <Cards key={item.id} item={item} />
                ))}
            </div>

        </div>
    )
}

export default Course
