import { motion } from "framer-motion";
import { Link } from "react-scroll";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Services", "Works", "Contact"];
  return (
    <motion.div className="Links" variants={variants}>
      {items.map((item) => (
        <Link
          key={item}
          to={item} // Replace "sectionId" with the actual ID of the section you want to scroll to
          smooth={false}
        >
          <motion.a className="pointer" key={item} variants={itemVariants}>
            {item}
          </motion.a>
        </Link>
      ))}
    </motion.div>
  );
};
export default Links;
