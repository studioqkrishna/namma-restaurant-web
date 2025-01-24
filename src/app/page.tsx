import { Suspense } from "react";
import HomePage from "./home/page";


export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  );
}
