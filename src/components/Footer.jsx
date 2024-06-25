import Image from "next/image";
import { Logo } from "./Logo";
import { FaTiktok } from "react-icons/fa";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const navigation = {
  solutions: [
    { name: "Home", href: "https://10xtraders.ai/" },
    { name: "Blog", href: "#" },
    { name: "Learning Center", href: "https://10xtraders.ai/how-it-works/" },
    { name: "Faqs", href: "https://10xtraders.ai/faqs/" },
    // { name: "Book a Session ", href: "#" },
    // { name: "For Traders ", href: "#" },
  ],
  support: [
    { name: "Stock", href: "https://10xtraders.ai/stock-market-snapshot/" },
    { name: "Forex", href: "https://10xtraders.ai/forex-market-snapshot/" },
    { name: "Crypto", href: "https://10xtraders.ai/crypto-market-snapshot/" },
  ],
  company: [
    { name: "About", href: "https://10xtraders.ai/about/" },
    { name: "Privacy", href: "https://10xtraders.ai/privacy-policy/" },
    { name: "Terms", href: "https://10xtraders.ai/terms-of-service/" },
    { name: "Disclaimer", href: "https://10xtraders.ai/disclaimer/" },
    { name: "Support", href: "https://10xtraders.ai/support/" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Reddit",
      href: "https://www.reddit.com/user/10XTradersAI/",
      icon: (props) => (
        <svg
          class="w-6 h-6 text-gray-800 dark:text-red"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12.008 16.521a3.84 3.84 0 0 0 2.47-.77v.04a.281.281 0 0 0 .005-.396.281.281 0 0 0-.395-.005 3.291 3.291 0 0 1-2.09.61 3.266 3.266 0 0 1-2.081-.63.27.27 0 0 0-.38.381 3.84 3.84 0 0 0 2.47.77Z"
          />
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-4.845-1.407A1.463 1.463 0 0 1 18.67 12a1.46 1.46 0 0 1-.808 1.33c.01.146.01.293 0 .44 0 2.242-2.61 4.061-5.829 4.061s-5.83-1.821-5.83-4.061a3.25 3.25 0 0 1 0-.44 1.458 1.458 0 0 1-.457-2.327 1.458 1.458 0 0 1 2.063-.064 7.163 7.163 0 0 1 3.9-1.23l.738-3.47v-.006a.31.31 0 0 1 .37-.236l2.452.49a1 1 0 1 1-.132.611l-2.14-.45-.649 3.12a7.11 7.11 0 0 1 3.85 1.23c.259-.246.6-.393.957-.405Z"
            clip-rule="evenodd"
          />
          <path
            fill="currentColor"
            d="M15.305 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4.625 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
          />
        </svg>
      ),
    },
    {
      name: "Discord",
      href: "https://www.reddit.com/user/10XTradersAI/",
      icon: (props) => (
        <svg
          class="w-6 h-6 text-gray-800 dark:text-purple"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
        </svg>
      ),
    },

    {
      name: "X",
      href: "https://x.com/10xtradersai",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },

    {
      name: "YouTube",
      href: "https://10xtraders.ai/crypto-market-snapshot/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Generate Scripts For
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Social
                </h3>
                <div className="flex flex-col md:flex-row py-5 space-x-0 md:space-x-6 md:order-2">
                  {navigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-black hover:text-gray-500 mb-4 md:mb-0"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 py-10 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="mt-8 text-sm text-center leading-5 text-black font-display md:order-1 md:mt-0">
              &copy; 2024 10xtraders.ai, LLC. All rights reserved.
            </p>
            <p className="mt-8 text-xs leading-6 text-center text-gray-600">
              Disclaimer: Any opinions, chats, messages, news, research, prices,
              or other information contained on this website are provided as
              general market information for educational and entertainment
              purposes only, and do not contribute investment advice. The
              website should not be relied upon as a substitute for extensive
              independent market research before making your actual trading
              decisions. 10XTraders.ai provides software only. Any references to
              trading, exchange, transfer, or wallet services, etc. are
              references to services provided by third-party service providers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
