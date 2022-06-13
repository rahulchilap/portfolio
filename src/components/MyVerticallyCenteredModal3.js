import React from "react";
import { Button, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal3(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          The drumkit
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>More Description</h4>
        <p>
          This is one of my favourite website which I have created.If you are a
          music lover then definately this website is for you.Basically I have
          added event handler function so that if user clicks on a keybord or
          screen via mouse then a sweet tone is generated and you can even
          create a new music out of it.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button>
          <a
            href="https://rahulchilap.github.io/drumbeat/"
            target="_"
            className="btnToWebsite"
          >
            Visit to Website
          </a>
        </Button>
        <Button>
          <a
            href="https://github.com/rahulchilap/drumbeat"
            className="btnToSourceCode"
            target="_"
          >
            Source Code
          </a>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal3;
