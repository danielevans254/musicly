import CardWrapper from "@/components/auth/login/card-wrapper";
import Image from "next/image";

interface LoginPageProps {
  email: string;
  username: string;
  password: string;
}

const LoginPage: React.FC<LoginPageProps> = ({
  email,
  username,
  password
}) => {
  return (
    <>
      <div className="h-24 bg-black">
        <Image src="logo.svg" alt="logo" width={20} height={20} />
      </div>
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-gray-700 to-black">
        <CardWrapper />
      </div>
    </>
  );
}

export default LoginPage;
