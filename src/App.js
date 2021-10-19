import { Route, Switch, useLocation } from "react-router";
import Sidebar from "./sidebar/index";
import Home from "./Pages/home";
import Projects from "./Pages/projects";
import Achievements from "./Pages/achievements";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Team from "./Pages/team";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const location = useLocation();
  return (
    <>
      <Sidebar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/achievements" component={Achievements} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/team" component = {Team} />
          </Switch>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
