import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  return (
    <Card className="w-full max-w-md p-6 space-y-3 bg-white shadow-md rounded-lg">
      <CardHeader className="text-center text-xl font-semibold">
        Tele-ID
      </CardHeader>

      <CardContent className="px-2 py-2">
        <form className="space-y-4">
          <div>
            <Label className="font-bold" htmlFor="phoneNumber">
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label className="font-bold" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              className="mt-1"
            />
          </div>

          <Button type="submit" className="w-full mt-4">
            Sign In
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex items-center justify-center">
        <Button variant={"link"} className="text-blue-600 hover:underline">
          Forgot Password?
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SignIn;
