import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  return <SignUp />
}

// You need to provide generateStaticParams for dynamic routes
export function generateStaticParams() {
  return [
    // If you have possible values for your dynamic segment (e.g. `sign-iup/something`), include them here.
    { signUp: [] },  // Example static params for the route
  ];
}
