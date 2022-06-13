import React from "react";
import { Button, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">BeTea</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>More Descrition</h4>
        <p>
          Tea is an aromatic beverage prepared by pouring hot or boiling water
          over cured or fresh leaves of Camellia sinensis, an evergreen shrub
          native to China, India and other East Asian countries.Tea is also
          rarely made from the leaves of Camellia taliensis. After water, it is
          the most widely consumed drink in the world.There are many different
          types of tea; some have a cooling, slightly bitter, and astringent
          flavour, while others have vastly different profiles that include
          sweet, nutty, floral, or grassy notes. Tea has a stimulating effect in
          humans primarily due to its caffeine content.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button>
          <a
            href="https://rahulchilap.github.io/betea/"
            target="_"
            className="btnToWebsite"
          >
            Visit to Website
          </a>
        </Button>
        <Button>
          <a
            href="https://github.com/rahulchilap/betea"
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
export default MyVerticallyCenteredModal;
