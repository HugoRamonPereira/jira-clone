import { toast } from "sonner";

interface SignInProps {
  email: string;
  password: string;
}

export async function signIn({ email, password }: SignInProps) {
  const response = await fetch("http://localhost:3000/auth/signIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password })
  });

  if (response.status === 200) {
    toast.success('You have successfully logged in', {
      position: 'top-right'
    })
    return response.json();
  } else {
    toast.error("There was an error with your login", {
      position: "top-right",
    });
    throw new Error("Login failed");
  }
}
