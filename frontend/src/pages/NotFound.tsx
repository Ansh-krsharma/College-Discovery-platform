import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-24 text-center">
        <h1 className="font-display text-7xl text-slate-950 dark:text-white">404</h1>
        <p className="mt-4 text-muted">This page does not exist.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Go home
        </Link>
      </main>
    </>
  );
}
