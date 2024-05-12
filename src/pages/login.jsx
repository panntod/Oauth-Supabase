import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import supabase from "@/utils/supabase";

const Login = () => {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event === "SIGNED_IN") {
      // Forward to dashboard
      toast.success("Login Successfully");
      navigate("/dashboard");
    }
  });

  return (
    <main>
      <section className="w-96 p-12 h-auto bg-gray-800 rounded-2xl shadow-md shadow-gray-600">
        <Auth
          supabaseClient={supabase}
          theme="dark"
          redirectTo="/"
          providers={["discord"]}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "blue",
                  brandAccent: "darkblue",
                },
              },
            },
          }}
        />
      </section>
    </main>
  );
};

export default Login;
