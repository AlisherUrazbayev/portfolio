import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function SocialLinks() {
  return (
    <>
      <div className="flex justify-center pl-20 basis-1/4 items-center gap-4">
        <a
          href="https://www.linkedin.com/in/alisher-u-aaa7b3128/"
          target="blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/AlisherUrazbayev" target="blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </>
  );
}

export default SocialLinks;
