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
import { CircleAlert, Mail, Lock } from "lucide-react"
import { InputPassword } from "../../components/ui/input-password";

const signinSchema = z.object({
  email: z.string().email({ message: 'Email is not valid' }),
  password: z.string({ message: 'Password is required' }).min(8, { message: 'Password too short' }).max(20, 'Password too long')
})

type SigninSchema = z.infer<typeof signinSchema>

export function Signin() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<SigninSchema>({ resolver: zodResolver(signinSchema) });
  
  async function signinHandler({ email, password }: SigninSchema) {
    await fetch('http://localhost:3000/auth/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ email, password })
    })
    reset();
  }
  return (
    <div className="w-full h-screen bg-green-200"> 
      <Card 
        className="w-full max-w-sm mx-auto translate-y-1/2"
      >      
      <form onSubmit={handleSubmit(signinHandler)} noValidate >
          <CardHeader>
            <CardTitle className="text-2xl">Sign in</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email" 
                iconStart={<Mail size={14} />}
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
              <InputPassword 
                id="password" 
                type="password" 
                placeholder="Enter your password" 
                iconStart={<Lock size={14} />}
                iconEnd
                {...register("password")} 
                required 
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
            <Button className="w-full" type="submit">Sign in</Button>
          </CardFooter>
      </form>
      </Card>
    </div>
  )
}

