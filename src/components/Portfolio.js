import React from "react";
import { Button, Card } from "react-bootstrap";
import tea from "../images/betea.PNG";
import block from "../images/blockmanipulation.PNG";
import piggame from "../images/Capture.PNG";
import drumstick from "../images/drumbeat.PNG";
import guessthenumber from "../images/guessTheNumber.PNG";
import gym from "../images/gym.PNG";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import MyVerticallyCenteredModal1 from "./MyVerticallyCenteredModal1";
import MyVerticallyCenteredModal2 from "./MyVerticallyCenteredModal2";
import MyVerticallyCenteredModal3 from "./MyVerticallyCenteredModal3";
import MyVerticallyCenteredModal4 from "./MyVerticallyCenteredModal4";
import MyVerticallyCenteredModal5 from "./MyVerticallyCenteredModal5";

const Portfolio = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow4, setModalShow4] = React.useState(false);
  const [modalShow5, setModalShow5] = React.useState(false);

  return (
    <>
      <div id="portfolio" className="container p-5 ">
        <center>
          <h1>Portfolio</h1>
        </center>
        <div className="row p-3">
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={tea} />
              <Card.Body>
                <Card.Title>Betea</Card.Title>
                <Card.Text>
                  Being just an hour and a half away from the iconic tea gardens
                  of the world, we have devised a unique tea sourcing process.
                  We procure teas within 24-48 hrs of sampling and keep them
                  under 3-4% moisture levels. Next, we hand sort & clean whole
                  leaves for impurities, vacuum pack, and store them under
                  controlled environment.
                </Card.Text>
                {/* <Button variant="dark">Some more description</Button> */}
                <Button variant="dark" onClick={() => setModalShow(true)}>
                  Some more description
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={block} />

              <Card.Body>
                <Card.Title>Block Manipulation</Card.Title>
                <Card.Text>
                  A simple website to understand the DOM manipulation.I have
                  created range function in order to move the position of Block
                  in particular direction(X and Y axis).Change of Size and
                  Opacity can also be contolled along with changing the shape of
                  the block and adding HEX code and RGBA color format as well.
                </Card.Text>
                <Button variant="dark" onClick={() => setModalShow1(true)}>
                  Some more description
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={piggame} />
              <Card.Body>
                <Card.Title>The Pig Game</Card.Title>
                <Card.Text>
                  Created a game to play along with a friend if you are trying
                  to get rid of boredom.Added some animation as well to make the
                  UI look more engaging.Trasition property is being used in the
                  project along with many new ES6 features.Also game can be
                  reset if one of the player wins the game and in the middle of
                  the game as well.
                </Card.Text>
                <Button variant="dark" onClick={() => setModalShow2(true)}>
                  Some more description
                </Button>
              </Card.Body>
            </Card>
          </div>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <MyVerticallyCenteredModal1
            show={modalShow1}
            onHide={() => setModalShow1(false)}
          />
          <MyVerticallyCenteredModal2
            show={modalShow2}
            onHide={() => setModalShow2(false)}
          />
        </div>
        <div className="row">
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={drumstick} />
              <Card.Body>
                <Card.Title>The Drum Beat</Card.Title>
                <Card.Text>
                  This is one of my favourite website which I have created.If
                  you are a music lover then definately this website is for
                  you.Basically I have added event handler function so that if
                  user clicks on a keybord or screen via mouse then a sweet tone
                  is generated and you can even create a new music out of it.
                </Card.Text>
                <Button variant="dark" onClick={() => setModalShow4(true)}>
                  Some more description
                </Button>{" "}
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={guessthenumber} />
              <Card.Body>
                <Card.Title>Guess the number</Card.Title>
                <Card.Text>
                  This game has been played by everyone in thier childhood so i
                  thought to recreate it with adding more functionality to
                  it.Created a beautiful UI for the same also I have added high
                  score feature to it so that you can get to know who is
                  actually wining the game.Button is also added so that user can
                  play the game round the clock.
                </Card.Text>
                <Button variant="dark" onClick={() => setModalShow4(true)}>
                  Some more description
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={gym} />
              <Card.Body>
                <Card.Title>Zymmy Club</Card.Title>
                <Card.Text>
                  Managing your health in 21st century is one of the most
                  important thing which I feel ,so I have created a beautiful
                  responsive website for the same. Added Bootstrap framework to
                  enhance the UI part of the website along with contact me form
                  as well.Check out the source code if you want to use it in
                  your current project.
                </Card.Text>
                <Button variant="dark" onClick={() => setModalShow5(true)}>
                  Some more description
                </Button>{" "}
              </Card.Body>
            </Card>
          </div>
          <MyVerticallyCenteredModal3
            show={modalShow3}
            onHide={() => setModalShow3(false)}
          />
          <MyVerticallyCenteredModal4
            show={modalShow4}
            onHide={() => setModalShow4(false)}
          />
          <MyVerticallyCenteredModal5
            show={modalShow5}
            onHide={() => setModalShow5(false)}
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
