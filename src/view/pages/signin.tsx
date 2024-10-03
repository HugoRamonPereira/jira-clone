import { useState } from "react";
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
import { CircleX, Mail, Lock, UserCheck } from "lucide-react"
import { InputPassword } from "../../components/ui/input-password";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "../components/spinner/spinner";
import { signIn } from "../../services/sign-in";
import { GreenCheck } from "../../assets/illustrations/green-check";

const signinSchema = z.object({
  email: z.string().email({ message: 'Email is not valid' }),
  password: z.string({ message: 'Password is required' }).min(8, { message: 'Password too short' }).max(100, 'Password too long')
})

type SigninSchema = z.infer<typeof signinSchema>

export function Signin() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [circleBtn, setCircleBtn] = useState<boolean>(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<SigninSchema>({ 
    resolver: zodResolver(signinSchema), 
    defaultValues: {
      email: "ramone.techie@gmail.com",
      password: "hRp12345666"
    } 
  });
  
  // async function signinHandler({ email, password }: SigninSchema) {
  //   try {
  //     setIsLoading(true)
  //     const response = await fetch('http://localhost:3000/auth/signIn', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': "application/json"
  //       },
  //       body: JSON.stringify({ email, password })
  //     })
  //     if (response.status === 200) {
  //       reset();
  //       setIsLoading(false)
  //       navigate('/dashboard')
  //       toast.success('You have successfully logged in!', {
  //         position: 'top-right'
  //       })
  //     }
  //   } catch (error ) {
  //     if (error instanceof Error && error) {
  //       toast.error('There was an error with your login!', {
  //         position: 'top-right',
  //         action: <Button variant={"outline"} className="ml-auto p-1.5"><X size={18} /></Button>
  //       })
  //       console.error(error);
  //       setIsLoading(false)
  //       reset()
  //     }
  //   }
  // }

  async function signinhandler(data: SigninSchema) {
    try {
      setIsLoading(true)
      await signIn({
        email: data.email,
        password: data.password
      })
      reset()
      setIsLoading(false)
      setCircleBtn(true)
      setTimeout(() => {
        navigate('/dashboard')
      }, 3000)
    } catch {
      setIsLoading(false)
      reset()
    }
  }

    return (
    <Card 
      className="w-full max-w-sm mx-auto translate-y-1/2 select-none"
    >      
    <form onSubmit={handleSubmit(signinhandler)} noValidate >
        <CardHeader>
          <CardTitle className="text-2xl tracking-wide">Sign in</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid">
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
              {...register("password")} 
              required 
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
              Don&apos;t have an account
            </p>
            <Link 
              to="/signup"
                className="hover:text-black hover:underline-2 transition-colors duration-200 underline underline-offset-4"
            >
              Sign up
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
                <Spinner className="w-4" />
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
                    <p>Sign in</p>
                    <UserCheck size={18} strokeWidth={1.7} />
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

