import "./globals.css";
import Navbar from '@/components/Navbar'


export const metadata = {
  title: "Next App",
  description: "App de contactos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto h-[calc(100vh - 7rem)] flex justify-center item-center p-4 ">
          {children}
        </main>
      </body>
    </html>
  );
}
