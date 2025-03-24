// import "./globals.css";
import NavBar from "@/Components/home/NavBar";
import { Footer } from "@/Components/home/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
