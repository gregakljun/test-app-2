import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return <SignUp />;
}

// Named export for generateStaticParams
export function generateStaticParams() {
  return [
    // If you have possible values for your dynamic segment (e.g. `sign-up/something`), include them here.
    { signUp: [] }, // Example static params for the route
  ];
}
