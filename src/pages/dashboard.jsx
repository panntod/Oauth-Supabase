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
        if (value.data?.user) {
          setUser(value.data.user);
        } else {
          navigate("/");
        }
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
        {/* <!-- Card start --> */}
        <div className="max-w-sm bg-gray-800 rounded-lg p-12 overflow-hidden shadow-md shadow-gray-600">
          <div className="text-center my-4">
            {userData?.picture ? (
              <img
                className="h-32 w-32 rounded-full mx-auto my-4"
                src={userData?.picture}
                alt={userData?.name}
              />
            ) : (
              <div className="h-32 w-32 rounded-full flex justify-center items-center bg-yellow-300 mx-auto my-4">
                <h1 className="text-6xl font-bold">
                  {userData?.email.charAt(0)}
                </h1>
              </div>
            )}

            <div className="py-2">
              <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                {userData?.custom_claims
                  ? `${userData?.custom_claims?.global_name}  (${userData?.name})`
                  : userData?.email.split(".")[0]}
              </h3>
              <div className="text-gray-700 dark:text-gray-300 items-center">
                {userData?.full_name}
              </div>
              <div className="text-gray-700 dark:text-gray-300 items-center">
                {userData?.email}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Card end --> */}
      </main>
    </>
  );
};

export default Dashboard;
