import Navbar from "@/components/navbar/navbar";
import Text from "@/components/textarea/text";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {

  return (
    
    <div className="min-h-screen">
      <Navbar />
      <Text/>
    </div >
  )
}

export default Home;