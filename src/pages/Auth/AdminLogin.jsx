import apiClient from '@/lib/api-client'
import { ADMIN_LOGIN } from '@/lib/constants'
import { useAppStore } from '@/redux/store'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const AdminLogin = () => {
    const navigate = useNavigate()
    const {setAdminInfo} = useAppStore()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const validateLogin = () => {
        if(!email.length) {
            toast.error("Email is required.");
            return false;
        }
        if(!password.length) {
            toast.error("Password is required.");
            return false;
        }
        return true;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        if(validateLogin()){
            const response = await apiClient.post(ADMIN_LOGIN, {email, password}, {withCredentials: true});   

            if(response.data.admin.id) {
                setAdminInfo(response.data.admin)
                setLoading(false)
                toast.success("Login Successful")
                navigate("/admin");
            } else {
                console.log(response.data.admin)
                setLoading(false)
            }
        } else {
            setLoading(false)
        }
    }
    return (
        <div className='bg-white w-full h-[100vh]'>
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <div>
                    <h1 className='text-center font-bold text-3xl'>Admin Login</h1>
                </div>
                <form onSubmit={handleLogin} className='w-[400px] bg-white shadow-lg rounded-md p-4'>
                    <div className='flex flex-col gap-2 mb-4'>
                        <label htmlFor="email" className=''>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your account email address"
                            className='p-2 rounded-md outline-none border'
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-2 mb-4'>
                        <label htmlFor="email" className=''>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="************"
                            className='p-2 rounded-md outline-none border'
                            required
                        />
                    </div>
                    <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-1 rounded-md"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? 'Logging in...' : 'LOGIN'}
                        </button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin