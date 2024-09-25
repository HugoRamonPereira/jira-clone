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

const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: 'Password too short' }).max(20, 'Password too long')
})

type SigninSchema = z.infer<typeof signinSchema>

export function Signin() {
  const { register, handleSubmit } = useForm<SigninSchema>({ resolver: zodResolver(signinSchema) });
  
  async function signinHandler({ email, password }: SigninSchema) {
    await fetch('http://localhost:3000/auth/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ email, password })
    })
  }
  return (
    <div className="w-full h-screen bg-green-200"> 
      <Card 
        className="w-full max-w-sm mx-auto translate-y-1/2"
      >      
      <form onSubmit={handleSubmit(signinHandler)} >
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
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
                placeholder="m@example.com" 
                {...register("email")} 
                required 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                required 
                {...register("password")} 
              />
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

