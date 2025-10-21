// pages/404.js
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center fixed top-0 left-0 bottom-0 right-0 z-[999] justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg text-center mb-4">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="text-lg text-white bg-primary px-4 py-2 rounded hover:bg-primary-dark transition-colors">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
