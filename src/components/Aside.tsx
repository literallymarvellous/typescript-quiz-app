import { Container, Sidebar } from "../styles/Aside.styles";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "../styles/scss/App.module.scss";

const Aside = () => {
  return (
    <Sidebar>
      <Container>
        <div className={styles.flexCol}>
          <div className={styles.mb20}>
            <a href="https://github.com/literallymarvellous">
              <FaInstagram fontSize="20px" />
            </a>
          </div>
          <div className={styles.mb20}>
            <a href="https://instagram.com/literallymarvellous">
              <FaGithub fontSize="20px" />
            </a>
          </div>
          <div className={styles.mb20}>
            <a href="https;//twitter.com/literallymarvel">
              <FaTwitter fontSize="20px" />
            </a>
          </div>
        </div>
      </Container>
    </Sidebar>
  );
};

export default Aside;
