import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//Avatars Import

import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrow={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="John Deo 1" />
        <div className="myCarousel">
          <h3>Abhijeet Gaekwad</h3>
          <p>
            Rahul had the vision to see the benefits and the passion to turn
            that into measurable results for FirstSource Advantage LLC.
            Dedicated and goal-oriented strategist that cannot be overestimated.
            Rahul makes the impossible possible. He is a reliable individual and
            I will always hold him in the highest esteem.
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Jene Deo 2" />
        <div className="myCarousel">
          <h3>Nicole Aniston</h3>
          <p>
            Rahul always amazed me with his business insight and unique ways of
            solving problems. When you really get to connect with him, you'll
            find a fantastic person with exceptional skills! Loyal, insightful,
            and independent.He is the MOZARTS of web design.
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="John Deo 3" />
        <div className="myCarousel">
          <h3>Kristian Hanby</h3>
          <p>
            Rahul is vested in our success, making us want to celebrate even
            further. We value the cutting-edge technology, reliability, and
            easy-to-use platform API.
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt="John Deo 4" />
        <div className="myCarousel">
          <h3>Jackson Stones</h3>
          <p>
            Rahul has always been a great partner for us because he had all the
            tools and technologies out of the box that we really need and we
            don't have to spend our own time kind of reinventing.
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
