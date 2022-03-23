import { useContext } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../context/context";
import { Heading, Nav } from "../styles/Header.styles";
import Timer from "./Timer";

const Header = () => {
  const { showTimer } = useContext(QuizContext);

  return (
    <Heading>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        {showTimer ? <Timer /> : null}
      </Nav>
    </Heading>
  );
};

export default Header;
