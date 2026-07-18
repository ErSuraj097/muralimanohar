// import type { Metadata } from "next";
// import { Poppins, Playfair_Display } from "next/font/google";
// import { LanguageProvider } from "@/context/LanguageContext";
// import "./globals.css";

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
// });

// const playfairDisplay = Playfair_Display({
//   variable: "--font-playfair",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
// });

// export const metadata: Metadata = {
//   title: "Murli Manohar Jaiswal | Official Website",
//   description: "Official portfolio website of Murli Manohar Jaiswal - Politician, Social Worker, Youth Leader, and Samajwadi Party Candidate from Barhaj Assembly Constituency, Deoria, Uttar Pradesh.",
//   keywords: "Murli Manohar Jaiswal, Samajwadi Party, Barhaj, Deoria, Uttar Pradesh, Politician, Youth Leader, Social Worker, Solu Jaiswal",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${poppins.variable} ${playfairDisplay.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 transition-colors duration-300">
//         <LanguageProvider>
//           {children}
//         </LanguageProvider>
//       </body>
//     </html>
//   );
// }
