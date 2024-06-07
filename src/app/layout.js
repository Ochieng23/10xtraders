// Import the Poppins font from Google Fonts
import { Poppins } from "next/font/google";
// Import global styles
import "./globals.css";
// Import clsx for conditional class name merging
import clsx from "clsx";

// Configure the Poppins font
const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // Specify the font weights you need
  subsets: ["latin"], // Subsets for the font
  display: "swap", // Use font-display swap for better loading performance
  variable: "--font-poppins", // Custom CSS variable for the font
});

// Metadata for the application
export const metadata = {
  title: "10xtraders.ai",
  description: "Natural Language Trading Automation",
};

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html
      className={clsx(
        "h-full scroll-smooth bg-white antialiased", // Default styles
        poppins.variable // Apply the Poppins font variable
      )}
      lang="en" // Set the language attribute for the HTML tag
    >
      <body className={poppins.className}>
        {" "}
        {/* Apply the Poppins font */}
        {children} {/* Render the child components */}
      </body>
    </html>
  );
}
