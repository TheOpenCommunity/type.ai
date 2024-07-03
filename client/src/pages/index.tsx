import Footer from "@/components/footer/footer";
import Language from "@/components/language/language";
import Navbar from "@/components/navbar/navbar";
import Option from "@/components/options/options";
 
 
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div className={`flex flex-col min-h-screen ${inter.className}`}>
      <header>
        <Navbar />
      </header>
      <main className="flex-grow">
        <Option/>
         
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
