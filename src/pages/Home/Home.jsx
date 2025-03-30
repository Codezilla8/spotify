import { motion } from "framer-motion";
import logoHome from "../../assets/logoHome.png";
import './Home.css'

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <motion.img
        src={logoHome}
        alt="Spotify Logo"
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-32 h-32"
      />
    </div>
  );
};

export default Home;
