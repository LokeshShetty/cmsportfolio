import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { useEffect, useState } from "react";
import { AppWrap } from "../../wrapper";
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    async function getAboutDetails() {
      const query = '*[_type == "abouts"]';
      await client.fetch(query).then((data) => setAbouts(data));
    }

    getAboutDetails();
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Development</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts?.map((about, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={urlFor(about?.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
