import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        {" "}
        <BsTwitterX />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
