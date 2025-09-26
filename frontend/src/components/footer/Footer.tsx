// src/components/footer/Footer.jsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faSquareLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bottom-0 z-90 bg-black rounded-xl">
      {/* Thanh Footer */}
      <div className="py-5 flex flex-col gap-5">
        <div>
          <p className="text-white text-3xl text-center">Minhhung7</p>
        </div>

        <div className="flex items-center justify-center">
          {/* Github */}
          <div
            className="cursor-pointer hover:bg-[#242424] p-3 rounded-lg"
            onClick={() =>
              window.open("https://github.com/MinhHung7", "_blank")
            }
          >
            <FontAwesomeIcon icon={faGithub} className="text-white" size="2x" />
          </div>
          <div
            className="cursor-pointer hover:bg-[#242424] p-3 rounded-lg"
            onClick={() =>
              window.open("https://www.linkedin.com/in/nmh7/", "_blank")
            }
          >
            <FontAwesomeIcon
              icon={faSquareLinkedin}
              className="text-white"
              size="2x"
            />
          </div>
          <div
            className="cursor-pointer hover:bg-[#242424] p-3 rounded-lg"
            onClick={() => window.open("https://x.com/hung0434", "_blank")}
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-white"
              size="2x"
            />
          </div>
        </div>

        <div>
          <p>© 2025 MinhHung7. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
