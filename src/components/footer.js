import { Fragment, useState } from "react";
import Modal from "./modal";
const Footer = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <Fragment>
      <footer className="footer">
        <div className="attribution">
          Challenge by
          <a
            className="link"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by
          <a
            className="link"
            href="https://www.facebook.com/profile.php?id=1196972374"
            target="_blank"
            rel="noreferrer"
          >
            Mohamed A.Ismaiel
          </a>
          .
        </div>
        <button onClick={toggle} className="rules">
          RULES
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </Fragment>
  );
};
export default Footer;
