// pages/404.js
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center fixed top-0 left-0 bottom-0 right-0 z-[999] justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
      <Image
        src={"/mockup/not-found.svg"}
        alt="Not Found"
        height={400}
        width={400}
        priority
      />
      <Link
        href="/"
        className="btn-3d text-lg text-white bg-primary px-4 py-2 rounded-md hover:bg-primary-dark"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
