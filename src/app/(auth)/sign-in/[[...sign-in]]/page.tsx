import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return <SignIn />;
}

export function generateStaticParams() {
  return [
    // If you have possible values for your dynamic segment (e.g. `sign-in/something`), include them here.
    { signIn: ['/sign-in'] },  // Example static params for the route
  ];
}
