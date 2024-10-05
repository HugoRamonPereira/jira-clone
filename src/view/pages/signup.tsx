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
import { UserPlus, User, Mail, Lock, CircleX } from "lucide-react";
import { InputPassword } from "../../components/ui/input-password";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Spinner } from "../components/spinner";
import { signUp } from "../../services/sign-up";
import { GreenCheck } from "../../assets/illustrations/green-check";

const signupSchema = z.object({
  username: z.string().min(1, { message: 'Username is required'}),
  email: z.string().email({ message: 'Email is not valid' }),
  password: z.string().min(8, { message: 'Password too short' }).max(20, 'Password too long')
})

type SignupSchema = z.infer<typeof signupSchema>

export function Signup() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [circleBtn, setCircleBtn] = useState<boolean>(false);

  const { 
    register, 
    handleSubmit,
    formState: { errors },
    reset 
  } = useForm<SignupSchema>({ resolver: zodResolver(signupSchema) });
  
  async function signupHandler(data: SignupSchema) {
    try {
      setIsLoading(true)
      await signUp({
        username: data.username,
        email: data.email,
        password: data.password
      })
      reset()
      setIsLoading(false)
      setCircleBtn(true)
      setTimeout(() => {
        navigate('/signin')
      }, 3000)
    } catch {
      setIsLoading(false)
      reset()
    }
  }

  // const mutation = useMutation({
  //   mutationFn: async ({ username, email, password }: SignupSchema) => {
  //     return await fetch("http://localhost:3000/users/signUp", {
  //       method: "POST",
  //       body: JSON.stringify({ username, email, password })
  //     })
  //   },
  //   onSuccess: () => {
  //     setCircleBtn(true)
  //     setIsLoading(false)
  //   }
  // })

  return (
    <Card 
      className="w-full max-w-sm mx-auto translate-y-1/3 select-none"
    >      
    <form onSubmit={handleSubmit(signupHandler)} noValidate>
        <CardHeader>
          <CardTitle className="text-2xl tracking-wide">Sign up</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-1">
          <div className="grid gap-2">
            <Label 
              htmlFor="username"
              className="tracking-wide"
            >
              Username
            </Label>
            <Input 
              id="username" 
              type="text" 
              autoComplete="off"
              placeholder="Enter your username" 
              iconStart={<User size={15} strokeWidth={1.5} />}
              {...register("username")} 
            />
            {errors.username ? (
              <p className="text-red-600 text-xs flex gap-1 items-center h-4">
                <CircleX size={14} strokeWidth={1.5} />
                {errors.username.message}
              </p>
            ) : (
              <p className="h-4 invisible">
                {' '}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label 
              htmlFor="email"
              className="tracking-wide"
            >
              Email
            </Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email" 
              autoComplete="off"
              iconStart={<Mail size={14} strokeWidth={1.5} />}
              {...register("email")} 
              required 
            />
            {errors.email ? (
              <p className="text-red-600 text-xs flex gap-1 items-center h-4">
                <CircleX size={14} strokeWidth={1.5} />
                {errors.email.message}
              </p>
            ) : (
              <p className="h-4 invisible">
                {' '}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label 
              htmlFor="password"
              className="tracking-wide"
            >
              Password
            </Label>
            <InputPassword 
              id="password" 
              type="password" 
              placeholder="Enter your password" 
              iconStart={<Lock size={14} strokeWidth={1.5} />}
              iconEnd
              required 
              {...register("password")} 
            />
            {errors.password ? (
              <p className="text-red-600 text-xs flex gap-1 items-center h-4">
                <CircleX size={14} strokeWidth={1.5} />
                {errors.password.message}
              </p>
            ) : (
              <p className="h-4 invisible">
                {' '}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="flex items-center gap-2 mb-5 text-sm text-muted-foreground">
            <p>
              Already have an account
            </p>
            <Link 
              to="/signin"
              className="text-sm text-muted-foreground hover:text-black transition-colors duration-200 hover:underline hover:underline-offset-4"
            >
              Sign in
            </Link>
          </div>
          <Button 
            className={circleBtn ? "w-fit rounded-full transition-all duration-300 px-1.5 bg-green-500" : "w-full flex gap-2 font-nauman-regular"}     
            type="submit"        
            disabled={isLoading}
          >
            {isLoading 
              ? 
                <div className="flex items-center gap-2">
                  <Spinner className="size-4" />
                  <p>Loading</p>
                </div>
              :
              <div>
                {circleBtn ? 
                  <GreenCheck />
                  :
                  <div 
                    className="flex items-center gap-2 tracking-wide"
                  >
                    <p>Sign up</p>
                    <UserPlus size={18} strokeWidth={1.7} />
                  </div>
                }
              </div>
            }
          </Button>
        </CardFooter>
    </form>
    </Card>
  )
}

