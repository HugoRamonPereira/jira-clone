import { toast } from "sonner";

interface SignUpProps {
  username: string;
  email: string;
  password: string;
}

export async function signUp({ username, email, password }: SignUpProps) {
  const response = await fetch("http://localhost:3000/users/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password })
  });

  if (response.status === 201) {
    toast.success("User created successfully!", {
      position: "top-right",
    });
    return response.json();
  } else {
    toast.error("There was an error with your user registration", {
      position: "top-right",
    });
    throw new Error("Signup failed");
  }
}
