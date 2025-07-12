import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <pre
        className="text-lg leading-none mb-6 -translate-x-5"
        style={{ fontFamily: "Roboto" }}
      >
        {`A_A
                (╹ -╹)   - huh ?`}
      </pre>
      <h1 className="text-6xl font-bold mb-4">404</h1>

      <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
        Page not found.
      </p>

      <Link
        href="/"
        className="px-6 py-2 text-white bg-purple-700 hover:bg-purple-800 rounded-md transition"
      >
        Go back home
      </Link>
    </div>
  );
}
