import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../assets/TechIcons/Google Chrome.svg";
import vsCode from "../../assets/TechIcons/vscode.svg";
import intelliJ from "../../assets/TechIcons/intellij-idea.svg";
import pycharm from "../../assets/TechIcons/pycharm.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">macOS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="intellij" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={pycharm} alt="PyCharm" className="tech-icon-images" />
        <div className="tech-icons-text">PyCharm</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
