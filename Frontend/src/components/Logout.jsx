import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser(null);
            toast.success("Logout successfully")
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div>
            <button className="cursor-pointer font-medium p-1.5 px-3 rounded-md bg-black text-white hover:bg-slate-600 " onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout
