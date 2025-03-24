import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#4880FF]">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-800">
          Oops! Page Not Found
        </p>
        <p className="mt-2 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-[#4880FF] text-white font-semibold rounded-lg shadow-md hover:bg-[#3a6ccc] transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
