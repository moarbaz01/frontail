import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" backdrop-blur-md bg-gray-100 text-gray-700 py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex justify-between lg:flex-row md:flex-wrap lg:flex-nowrap flex-col gap-8">
          {/* Logo and Description */}
          <div className="flex-[1]">
            <div className="cursor-pointer w-fit">
              <Image
                src={"/logo.svg"}
                height={200}
                width={1000}
                className="w-full h-14"
                alt="Frontail Logo"
              />
            </div>
            <p className="text-sm text-gray-600 mb-6">
              We offer the services you need to succeed online. Get in touch
              with us and let us help you transform your online presence.
            </p>
            {/* <div className="flex gap-3 mb-6">
              <a
                href="https://www.linkedin.com/company/105953083/admin/dashboard/"
                className="hover:text-gray-900 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Frontail"
                className="hover:text-gray-900 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/Frontail"
                className="hover:text-gray-900 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          {/* Pages */}
          <div className="flex-[1]">
            <h3 className="text-gray-800 font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-gray-900 transition-colors"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex-[1]">
            <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#faqs"
                  className="hover:text-gray-900 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-900 transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2023 Frontail. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 mt-4 md:mt-0">
            Powered by Nuvex LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
