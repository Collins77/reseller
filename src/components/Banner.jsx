import { FaPhone } from "react-icons/fa6"
import { IoLocation } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="w-full bg-slate-100 px-2 py-1 flex justify-between items-center">
        <div className="flex gap-3">
            <p className="flex gap-1 text-sm items-center justify-center">
                <FaPhone className="text-green-500" />
                +25413144386
            </p>
            <p className="flex gap-1 text-sm items-center justify-center">
                <IoLocation className="text-blue-500" />
                Ambank House
            </p>
            <p className="flex gap-1 text-sm items-center justify-center">
                <IoMail className="text-red-500" />
                admin@resellersprint.com
            </p>
        </div>
        <div>
            <p className="text-sm">Welcome to ResellerSprint. All in one catalogue</p>
        </div>
        <div>
            <a href="/supplier-login" className="text-orange-500 text-sm flex gap-2 underline items-center justify-center">
            Supplier Login/Register
            <FaArrowRight />
            </a>
        </div>
    </div>
  )
}

export default Banner