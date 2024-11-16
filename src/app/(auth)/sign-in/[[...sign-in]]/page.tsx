import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return <SignIn />;
}

// Named export for generateStaticParams
export function generateStaticParams() {
  return [
    // If you have possible values for your dynamic segment (e.g. `sign-in/something`), include them here.
    { signIn: [] }, // Example static params for the route
  ];
}
