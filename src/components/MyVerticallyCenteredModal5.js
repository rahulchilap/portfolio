import React from "react";
import { Button, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal5(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Zymmy Club</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Show more description</h4>
        <p>
          Managing your health in 21st century is one of the most important
          thing which I feel ,so I have created a beautiful responsive website
          for the same. Added Bootstrap framework to enhance the UI part of the
          website along with contact me form as well.Check out the source code
          if you want to use it in your current project.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button>
          <a
            href="https://rahulchilap.github.io/gym/"
            target="_"
            className="btnToWebsite"
          >
            Visit to Website
          </a>
        </Button>
        <Button>
          <a
            href="https://github.com/rahulchilap/gym"
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
export default MyVerticallyCenteredModal5;
