import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="logo.png" alt="WonderTale Logo" className="logo" />
          </motion.span>
          <div className="social">
            <a href="#">
              <img src="facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="instagram.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
