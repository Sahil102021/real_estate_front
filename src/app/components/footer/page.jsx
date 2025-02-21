import Link from "next/link";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaCcAmazonPay } from "react-icons/fa";
import "../../styles/globals.css";

export function Footer() {
  return (
    <footer className="border-t bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-lime-400">About</h3>
            <ul className="space-y-2">
              {["About Us", "Team", "Careers"].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-lime-400">Resources</h3>
            <ul className="space-y-2">
              {["Documentation", "Blog", "Support"].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-lime-400">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service"].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-lime-400">Connect</h3>
            <div className="flex space-x-4">
              {[CiTwitter, FaGithub, FaCcAmazonPay].map((Icon, i) => (
                <button
                  key={i}
                  className="p-2 rounded-full bg-gray-800 hover:bg-lime-600 transition duration-300 transform hover:scale-110"
                >
                  <Icon className="h-5 w-5 text-white" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} PromptMarket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
