import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return <SignIn />;
}

async function generateStaticParams() {
  // Define the static paths for this route
  return [
    { signIn: [""] },          // Matches `/` or `/sign-in`
    { signIn: ['example'] }, // Matches `/sign-in/example`
    // Add more paths as needed
  ];
}
