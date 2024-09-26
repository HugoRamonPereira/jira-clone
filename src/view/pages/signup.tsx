import { useForm } from "react-hook-form";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter,
  CardHeader, 
  CardTitle 
} from "../../components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleAlert, UserPlus } from "lucide-react";

const signupSchema = z.object({
  username: z.string().min(1, { message: 'Username is required'}),
  email: z.string().email({ message: 'Email is not valid' }),
  password: z.string().min(8, { message: 'Password too short' }).max(20, 'Password too long')
})

type SignupSchema = z.infer<typeof signupSchema>

export function Signup() {
  const { 
    register, 
    handleSubmit,
    formState: { errors } 
  } = useForm<SignupSchema>({ resolver: zodResolver(signupSchema) });
  
  async function signinHandler({ username, email, password }: SignupSchema) {
    await fetch('http://localhost:3000/users/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ username, email, password })
    })
  }
  return (
    <div className="w-full h-screen bg-green-200"> 
      <Card 
        className="w-full max-w-sm mx-auto translate-y-1/2"
      >      
      <form onSubmit={handleSubmit(signinHandler)} noValidate>
          <CardHeader>
            <CardTitle className="text-2xl">Sign up</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input 
                id="username" 
                type="text" 
                placeholder="Enter your username" 
                {...register("username")} 
              />
              {errors.username && (
                <p className="text-red-600 text-xs flex gap-1 items-center">
                  <CircleAlert size={13} />
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email" 
                {...register("email")} 
                required 
              />
              {errors.email && (
                <p className="text-red-600 text-xs flex gap-1 items-center">
                  <CircleAlert size={13} />
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password" 
                required 
                {...register("password")} 
              />
              {errors.password && (
                <p className="text-red-600 text-xs flex gap-1 items-center">
                  <CircleAlert size={13} />
                  {errors.password.message}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full flex gap-2 font-light" type="submit">
              Sign up
              <UserPlus size={18} />
            </Button>
          </CardFooter>
      </form>
      </Card>
    </div>
  )
}

