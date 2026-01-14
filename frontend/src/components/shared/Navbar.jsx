import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { User2, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <div className="bg-black border-b border-gray-700 text-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Talent<span className="text-[#F83002]">Flow</span>
        </h1>

        <div className="flex items-center gap-12">
          
          {/* Navigation Links */}
          <ul className="flex font-medium items-center gap-5">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link className="hover:text-gray-400" to="/admin/companies">
                    Companies
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-400" to="/admin/jobs">
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="hover:text-gray-400" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-400" to="/jobs">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-400" to="/browse">
                    Browse
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Auth Section */}
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline" className="bg-gray-800 hover:bg-gray-700 text-white">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] text-white">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.profile?.profilePhoto} alt={user?.fullname} />
  <AvatarFallback className="bg-gray-700 text-white">
    {user?.fullname ? user.fullname.split(" ").map(n => n[0]).join("").toUpperCase() : "U"}
  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-72 bg-black border border-gray-700 text-white">
                
                {/* User Info */}
                <div className="flex gap-3 mb-4">
                  <Avatar>
  <AvatarImage src={user?.profile?.profilePhoto} alt={user?.fullname} />
  <AvatarFallback className="bg-gray-700 text-white">
    {user?.fullname ? user.fullname.split(" ").map(n => n[0]).join("").toUpperCase() : "U"}
  </AvatarFallback>
</Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-gray-400">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>

                {/* Student Profile Link */}
                {user && user.role === "student" && (
                  <div className="flex items-center gap-2 cursor-pointer mb-2 hover:text-gray-400">
                    <User2 size={18} />
                    <Link to="/profile">
                      <Button variant="link" className="text-white p-0">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                )}

                {/* Logout */}
                <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400">
                  <LogOut size={18} />
                  <Button
                    onClick={logoutHandler}
                    variant="link"
                    className="text-white p-0"
                  >
                    Logout
                  </Button>
                </div>

              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
