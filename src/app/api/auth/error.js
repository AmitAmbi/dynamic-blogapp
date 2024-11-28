import { useRouter } from "next/router";

export default function AuthError() {
  const { query } = useRouter();
  return (
    <div>
      <h1>Authentication Error</h1>
      <p>{query.error || "An unknown error occurred"}</p>
    </div>
  );
}
