import React from "react";
import "./IT.css";

function IT() {
  return (
    <div>
      <section className="inn">
        <div className="container-fluid">
          <div className="row card rounded-0 ">

          <img src="img/IT.png" alt="" className="img-fluid p-0 inn " />
          <div className="card-img-overlay d-flex   justify-content-center align-items-center ">
            <h1 className="  text-white mt-5 ">INNOVATION</h1>
          </div>
          </div>
        </div>
      </section>
      <section id="it">
        <div className="container-lg ">
          <div className="row">
            <div className="col-md-6  k ">
              <img  
                src="img/Micellar.png"
                alt=""
                className="img-fluid mi m-auto d-block  "
              />
            </div>
            <div className="col-md-6 p-0  m-0 ">
              <p className="px-3">
                Recently, the world has faced the COVID-19 pandemic situation,
                which has taught the importance of hygiene solutions. This
                encouraged us to provide effective and innovative hygiene care
                solutions that ultimately contribute to promote healthy living.
                Based on various studies, surfactant plays a vital role in all
                cleaning formulations. Moreover, its structure and properties
                provide a greater opportunity for smart modifications.
                Therefore, Empire Industries Limited utilizes “SMART MICELLAR
                TECHNOLOGY” in all cleaning ranges of products with the brand
                name “EMPERIA 1900″.
              </p>
              <p className="px-3">
                The technology is enabled by smart action techniques for
                cleaning surfaces. This technology employs a technically
                designed surfactant that works on the fundamental principle of
                “like attracts like”. This suggests that the polar head group is
                water-loving and the long hydrophobic hydrocarbon tail is
                water-repelling. This techno-enabled surfactant is smart enough
                for all types of stains, dirt and soil.
              </p>
            </div>
            <p>
              In order to understand Smart Micellar Technology, we should first
              understand surfactant, factors affecting cleaning such as surface
              tension, Hydrophilic-Lipophilic Balance, and the essential need
              for cleaning, as highlighted below.
            </p>

            <h3>Surfactants</h3>
            <p>
              Surfactants are the primary components of cleaning detergents.
              Surfactants are also called surface active agents that are
              amphiphilic in nature, i.e. dual-natured molecules. The general
              structure possesses a polar group that is “water-loving” and
              called a “hydrophilic head” and another non-polar group that is
              “water-repelling” (or oil loving) which is denoted as a
              “hydrophobic tail”. Generally, the polar head group is composed of
              anionic/cationic or non-ionic charge molecules and a long chain of
              hydrocarbons denoted as the tail of the surfactant, which is the
              hydrophobic part of the surfactant. Surfactants are used as a key
              component in many of the diverse industrial products or in their
              processes. Due to their dual nature, they are helpful in
              decreasing the interfacial tension (also called surface tension)
              between two phases.
            </p>

            <h3>Factors affecting cleaning</h3>
            <h5> Surface Tension</h5>
            <p>
              The water molecule consists of hydrogen and oxygen atoms. Due to
              the difference in their electronegativity, the hydrogen atoms are
              polarized toward the oxygen atom. This causes the development of a
              charge on the water molecule. These charges may vary from bulk
              water molecules to those present on the top layer. The bulk water
              molecules are surrounded by other water molecules, which stabilize
              their charge. However, the surface water molecules are in an
              unstable position as they hang between the liquid and air medium
              and therefore, these unstabilized dangling molecules react to
              achieve stability faster. Therefore when any molecule touches the
              surface, the unstable water molecule attracts the material thereby
              lowering the surface tension of the water molecule. This way it
              plays a vital role in dissolving the dirt.
            </p>

            <h5>Hydrophilic - Lipophilic Balance</h5>
            <p>
              The Hydrophilic-Lipophilic Balance (HLB) scale is a standard scale
              used to measure the hydrophilic to lipophilic balance ratio. The
              HLB value is significantly important in dissolving the dirt and
              prevents its redeposition.
            </p>
            <div className="col-lg-6">
              <h5>Essential need for Cleaning</h5>

              <ol className="px-3">
                <li>
                  <b>SURFACTANT:</b> Based on the charge on its head group it is
                  classified as cationic, anionic, non-ionic and amphoteric.
                </li>
                <li>
                  <b>HYDROTROPES:</b> It is usually used to increase the
                  solubility of surfactant.
                </li>
                <li>
                  <b>CHELATOR:</b> It entraps the hard water elements from the
                  water and smoothen the cleaning action.
                </li>
                <li>
                  <b>BUILDER:</b> Helps in emulsifying and dispersion of dirt
                  molecules and prevents its redeposit ion.
                </li>
                <li>
                  <b>CARRIERS:</b> Helps in the final step of cleaning in
                  decomposing or entrapment of dirt/soil particles.
                </li>
              </ol>
            </div>
            <div className="col-lg-6 bg-light rounded-3">
              <img
                src="img/surfact.png"
                alt=""
                className="img-fluid m-auto d-block p-2 w-75"
              />
            </div>
          </div>

          <h5>Micellar Formation and Cleaning Action</h5>
          <p>
            The characteristic nature of soil particles varies from water-loving
            (hydrophilic) to oil loving (liophilic). Based on the nature of soil
            particles and surrounds the soil by the accumulation of the
            surfactant’s tail in the soil, which leads to the formation of a
            spherical structure known as a micelle structure. The micelle
            structure aligns the head group in such a way that they are exposed
            to the water while the tail part is away from the water. The micelle
            encloses the soil particle and appears in a spherical form, which
            minimizes the contact of the soil with the surface. Finally, with
            ample water washing, the micelles burst into fine particles and the
            soil particle disintegrates into very small fine particles, which
            can easily be washed away.
          </p>
          <img src="img/dirt.jpg" alt=""  className="img-fluid rounded-3 "/>
          <p>Empire Industries Limited strives to be a company that calibrates the standard of excellence and makes a positive impact on the environment and communities, it serves. EMPERIA 1900 envisions promoting public health and contributing to making a meaningful difference in the lives of individuals and communities. This has led us to work constantly to build EMPERIA 1900, enabled with “Smart Micellar Technology” in providing effective and innovative hygiene care solutions that in turn enable individuals and communities to maintain a clean and healthy living. We are guided by our principles such as a customer centric approach, passion & integrity and continuous improvement & innovation.  We have leveraged our decades of experience in research and development to create products that are safe, effective and easy to use.
Emperia 1900 is steadfastly committed to improving and carefully formulating solutions to meet the highest standards of quality and safety.</p>
        </div>
      </section>
    </div>
  );
}

export default IT;
