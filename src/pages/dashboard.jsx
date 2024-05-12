import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import supabase from "@/utils/supabase";

const Dashboard = () => {
  const [user, setUser] = React.useState({});
  const navigate = useNavigate();

  React.useEffect(() => {
    async function handleUserData() {
      await supabase.auth.getUser().then((value) => {
        // Check Data
        if (value.data?.user) setUser(value.data.user);
        else navigate("/");
      });
    }

    handleUserData();
  }, [navigate]);

  async function handleSignOut() {
    const { error } = supabase.auth.signOut();
    if (error) toast.error(error.message);
    toast.success("Sign Out Successfully");
    navigate("/");
  }

  const userData = user.user_metadata;
  return (
    <>
      <nav className="bg-gray-800 py-4 px-24 fixed w-full">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-semibold text-lg">Supabase Auth</div>
          <button
            type="button"
            onClick={handleSignOut}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 hover:scale-105 rounded-full text-white font-semibold"
          >
            Logout
          </button>
        </div>
      </nav>

      <main>
        <h1 className="text-white font-bold text-4xl">
          Hello {userData?.full_name}
        </h1>
      </main>
    </>
  );
};

export default Dashboard;
