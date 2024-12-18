import AuthButton from "@/components/AuthButton";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-black text-center mb-6">
          Welcome Back
        </h1>

        <div className="space-y-4">
          <AuthButton />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
