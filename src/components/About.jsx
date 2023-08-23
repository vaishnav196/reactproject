import React from "react";
import "./About.css";

function About() {
  return (
    <div className="About">
      <section className="about-us py-5 px-3  p-0 ">
        <div className="container-lg p-0   ">
          <div className="row flex-wrap-reverse ">
            <div className="col-lg-6 about-img px-3">
              <img src="img/AboutGIF.gif" alt="" className=" img-fluid  gif" />
              <img src="img/About.jpg" alt="" className="img-fluid " />
            </div>
            <div className="col-lg-6 about-text mb-5 ">
              <h3>ABOUT US</h3>
              <p>
                Hygiene Care is a division of Empire Industries Limited, a
                century-old conglomerate with a repertoire of business interests
                and a legacy of trust. Empire Industries is a public limited
                company that is headquartered in Mumbai, India. In addition to
                its diverse portfolio of businesses, Empire Industries Limited
                has established a strong market presence in the manufacturing
                and marketing of machine tools, industrial equipment, glass
                bottles and frozen foods; while also subleasing out business
                centers along with integrated industrial and residential
                townships and introducing the concept of vending in India.
                Grabbit+: Premium Vending Solutions is the pioneer and market
                leader in the vending industry and has evolved to be the most
                preferred vending service provider in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default About;
