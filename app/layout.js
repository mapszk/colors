import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Colors"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="overflow-x-hidden">
        <Image 
          src="/img1.png" 
          width={200} 
          height={200} 
          alt="Decorative image"
          className="z-[-1] blur-[1px] selection-none fixed opacity-50 left-[-2rem] md:left-0 scale-[1.5] md:scale-[1.9] top-32" 
        />
        <Image 
          src="/img2.png" 
          width={200} 
          height={200} 
          alt="Decorative image"
          className="z-[-1] blur-[1px] selection-none fixed opacity-50 rotate-[25deg] scale-[1.5] md:scale-[2.2] top-1/3 md:top-32 right-[-4rem] md:right-0" 
        />
        <Image 
          src="/img3.png" 
          width={200} 
          height={200} 
          alt="Decorative image"
          className="z-[-1] blur-[1px] selection-none fixed opacity-50 rotate-[5deg] scale-[2.2] bottom-1 md:bottom-[-1rem] left-1/4 md:left-96" 
        />
		    <main className="w-11/12 max-w-[800px] mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
