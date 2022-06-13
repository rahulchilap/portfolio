import React from "react";
import { Button, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          The pig game
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>More Description</h4>
        <p>
          I will explain the rules in the game. 1:User should roll a dice and
          player should reach the score upto 100. 2:If the user gets 1 then the
          player gets switched.3:If any player is rolling a dice then the score
          gets added to current block and if player click on hold then the
          current score gets added to main score.4:Once any player reach 100
          points then the player wins and the players can play again by fireing
          up the new game button.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button>
          <a
            href="https://rahulchilap.github.io/The_Pig_Game/"
            target="_"
            className="btnToWebsite"
          >
            Visit to Website
          </a>
        </Button>
        <Button>
          <a
            href="https://github.com/rahulchilap/The_Pig_Game"
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
export default MyVerticallyCenteredModal2;
