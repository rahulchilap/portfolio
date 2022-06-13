import React from "react";
import { Button, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Block Manipulation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>More Description</h4>
        <p>
          This project is mainly build so that I can gain good knowlegde on what
          DOM is in Javascript.Working on this project took me alot of time
          eventhough it has simple UI.I have created a range function for
          controlling the X and Y axis. I have also created another range
          function to control the size and opacity of the block.The shape of the
          block can also be changed to cirle and rhombus as well.Another
          functionality i have added is that we can change the color of the
          block using two ways.The first method is by writing 6 digit HEX code
          and the second method is by selection the range function for
          contolling RGBA of the block.I have also added direct link along with
          the source code for the same.Please have a check on it.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button>
          <a
            href="https://rahulchilap.github.io/block_manipulation/"
            target="_"
            className="btnToWebsite"
          >
            Visit to Website
          </a>
        </Button>
        <Button>
          <a
            href="https://github.com/rahulchilap/block_manipulation"
            className="btnToSourceCode"
            target="_"
          >
            Github Source Code
          </a>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal1;
