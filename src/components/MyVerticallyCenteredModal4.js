import React from "react";
import { Button, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal4(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          The Pig Game
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>More Description</h4>
        <p>
          This game has been played by everyone in thier childhood so i thought
          to recreate it with adding more functionality to it.Created a
          beautiful UI for the same also I have added high score feature to it
          so that you can get to know who is actually wining the game.Button is
          also added so that user can play the game round the clock.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button>
          <a
            href="https://rahulchilap.github.io/guess_the_number/"
            target="_"
            className="btnToWebsite"
          >
            Visit to Website
          </a>
        </Button>
        <Button>
          <a
            href="https://github.com/rahulchilap/guess_the_number"
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
export default MyVerticallyCenteredModal4;
