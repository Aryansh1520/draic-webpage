import React, { useState } from "react";

import logo from "../assets/logo_white (1).png";
import Home from "../assets/home-solid.svg";
import Contact from "../assets/contact-svgrepo-com.svg";
import Achievements from "../assets/achievement-svgrepo-com.svg";
import Projects from "../assets/task-svgrepo-com.svg";
import Team from "../assets/about-us-svgrepo-com.svg";
import About from "../assets/noun_about_2225145.svg"
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const Container = styled.div`
  position: fixed;
  .active {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.div`
  width: 2rem;
  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
  padding: 2rem 0;
  position: absolute;
  top: 6rem;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;


const Sidebar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);




    return (
        <Container>
            <Button clicked={click} onClick={() => handleClick()}>
                
            </Button>
            <SidebarContainer>
                <Logo>
                    <img src={logo} alt="logo" />
                </Logo>
                <SlickBar clicked={click}>
                    <Item
                        onClick={() => setClick(false)}
                        exact
                        activeClassName="active"
                        to="/"
                    >
                        <img src={Home} alt="Home" />
                        <Text clicked={click}>Home</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/about"
                    >
                        <img src={About} alt="About" />
                        <Text clicked={click}>About</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/team"
                    >
                        <img src={Team} alt="Team" />
                        <Text clicked={click}>Team</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/projects"
                    >
                        <img src={Projects} alt="Project" />
                        <Text clicked={click}>Projects</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/achievements"
                    >
                        <img src={Achievements} alt="Achievements" />
                        <Text clicked={click}>Achievements</Text>
                    </Item>

                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/contact"
                    >
                        <img src={Contact} alt="Contact Us" />
                        <Text clicked={click}>Contact Us</Text>
                    </Item>

                </SlickBar>


            </SidebarContainer>
        </Container>
    );
};

export default Sidebar;