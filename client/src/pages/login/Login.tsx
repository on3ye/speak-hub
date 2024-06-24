import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";
import { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });

  return (
    <div className="h-dvh flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Already have an account?</CardTitle>
          <CardDescription>
            Login to start using our app. Join people from all around the world
            to share ideas!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username:</Label>
                <Input
                  id="username"
                  value={inputs.username}
                  onChange={(e) => setInputs({
                    username: e.target.value,
                    password: inputs.password,
                  })}
                  autoComplete="username"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password:</Label>
                <PasswordInput
                  id="password"
                  value={inputs.password}
                  onChange={(e) => setInputs({
                    username: inputs.username,
                    password:  e.target.value,
                  })}
                  autoComplete="password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Sign up</Button>
          <Button type="submit">Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;