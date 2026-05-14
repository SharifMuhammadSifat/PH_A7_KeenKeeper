import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-[#244D3F] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="bg-[#244D3F] text-white px-6 py-3 rounded-md hover:bg-[#1a3a2d]"
      >
        Go Back Home
      </Link>
    </div>
  );
}