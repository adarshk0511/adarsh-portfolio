import { Geist, Geist_Mono, Inter, Space_Grotesk, JetBrains_Mono , Pacifico, Anton, Press_Start_2P  } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],       // ExtraLight
  style: ["italic"],     // Italic
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300","400","500","600"],
  variable: "--font-jetbrains",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-space-grotesk",
});


const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pixel",
});

export const metadata = {
  title: "Adarsh K Poojary - Portfolio",
  description: "Welcome to my portfolio! I'm Adarsh K Poojary, a passionate web developer with expertise in frontend and backend technologies. Explore my projects, experience, and skills as you navigate through my digital showcase. Let's connect and create something amazing together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} 
          ${spaceGrotesk.variable}
          ${jetbrainsMono.variable} ${pacifico.variable} ${anton.variable} ${pressStart.variable}`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
