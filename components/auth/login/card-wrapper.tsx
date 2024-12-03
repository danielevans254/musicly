import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

const CardWrapper = () => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME;

  return (
    <Card className="border-0 text-white bg-black px-48 py-12 mb-48">
      <CardHeader>
        <CardTitle className="text-5xl mb-8">Log in to {appName}</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="flex flex-col item-center justify-start space-y-2">
            <Button className="rounded-full border-2 border-gray-600 flex items-center group hover:border-gray-200">
              <FcGoogle className="w-5 h-5 mr-2 relative -left-4" />
              <span className="font-semibold">Continue with Google</span>
            </Button>
            <Button className="rounded-full border-2 border-gray-600 flex items-center group hover:border-gray-200">
              <BiLogoFacebookSquare className="w-5 h-5 mr-2 relative -left-2" />
              <span className="font-semibold">Continue with Facebook</span>
            </Button>
            <Button className="rounded-full border-2 border-gray-600 flex items-center group hover:border-gray-200">
              <ImAppleinc className="w-5 h-5 mr-2 relative left-[-1.3rem]" />
              <span className="font-semibold">Continue with Apple</span>
            </Button>
          </div>
          <div className="py-8">
            <Separator className="text-gray-300 border-2 w-full" />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <Label htmlFor="email">Email or username</Label>
              <Input type="email" id="email" placeholder="Email or username" />
            </div>
            <div className="space-y-4">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
          </div>
          <Button type="submit" className="bg-emerald-500 text-black w-full rounded-full">Log In</Button>
          {/* FIXME: Why the fuck is the switch not visible */}
          <Switch className="flex items-center justify-between bg-green-400 border-2 border-white">
            <Label className="text-gray-300">Remember me</Label>
          </Switch>
          <Link href="#" className="text-center text-gray-300 underline flex flex-col pt-6 text-lg">Forgot your password?</Link>
        </form>
      </CardContent>
    </Card>
  );
};
export default CardWrapper;

