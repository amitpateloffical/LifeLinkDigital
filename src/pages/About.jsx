import BreadCrumb from "../components/BreadCrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUsers } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <>
      <BreadCrumb page="About Us" />

      {/* <!-- About Start --> */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts">
                <img className="img-fluid" src="/gradient.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              {/* <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">About Us</div> */}
              <h3 className="mb-4">
                Welcome to Life Link Digital Private Limited – Your Gateway to
                Technological Excellence!
              </h3>
              <p className="mb-4">
                At Life Link Digital, we are pioneers in harnessing the power of
                cutting-edge technology to transform businesses and elevate
                digital experiences. As a leading player in the digital
                landscape, we specialize in providing innovative solutions that
                seamlessly integrate with the dynamic needs of today's
                fast-paced world.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Feature Start --> */}
      <div className="card-section container-fluid pt-5 pb-5">
        <div className="container pt-5 pb-5">
          <div className="row g-5">
            <div className="ms-3">
              <h2 className="text-center">Our Expertise</h2>
            </div>
            <div className="expertise-cards">
              <div className="card-expertise">
                <div className="img-card">
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/web-development-5374063-4496032.png?f=webp"
                    alt=""
                    className="card-img"
                  />
                </div>
                <div className="card-pera">
                  <div className="software">Software Development</div>
                  <div className="software-pera">
                    {" "}
                    Our team of seasoned developers is adept at creating
                    scalable, efficient, and secure software applications
                    tailored to your specifications.
                  </div>
                </div>
              </div>
              <div className="card-expertise">
                <div className="img-card">
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/web-security-5617614-4674325.png?f=webp"
                    alt=""
                    className="card-img"
                  />
                </div>
                <div className="card-pera">
                  <div className="software">Web Design</div>
                  <div className=" software-pera">
                    {" "}
                    Our web design services focus on creating responsive, user-friendly,robust backends with the latest web technologies, and visually captivating websites.
                  </div>
                </div>
              </div>{" "}
              <div className="card-expertise">
                <div className="img-card">
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/online-pharmacy-9711183-7909752.png"
                    alt=""
                    className="card-img"
                  />
                </div>
                <div className="card-pera">
                  <div className="software">Pharma Digitization</div>
                  <div className="software-pera">
                    {" "}
                    The pharma industry faces a paradigm shift, which paves the way for more efficient, patient-centric, and data-driven approaches.
                  </div>
                </div>
              </div>{" "}
              <div className="card-expertise">
                <div className="img-card">
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/ai-chip-in-hand-7356110-6020304.png?f=webp"
                    alt=""
                    className="card-img"
                  />
                </div>
                <div className="card-pera">
                  <div className="software">Artificial Intelligence</div>
                  <div className=" software-pera">
                    {" "}
                    Embrace the future with AI solutions tailored to enhance your business operations. From machine learning algorithms to natural language processing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col-lg-6 align-self-end text-center text-md-end wow fadeIn"
        data-wow-delay="0.5s"
      ></div>
      {/* <!-- Feature End --> */}

      {/* <!-- Team Start --> */}
      <div className="container-fluid bg-light py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Our Team
              </div>
              <h1 className="mb-4">Meet Our Experienced Team Members</h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod magna dolore erat amet
              </p>
              <a className="btn btn-primary rounded-pill px-4" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="row g-4">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                      <div className="team-item bg-white text-center rounded p-4 pt-0">
                        <img
                          className="img-fluid rounded-circle p-4"
                          src="/team-1.jpg"
                          alt=""
                        />
                        <h5 className="mb-0">Boris Johnson</h5>
                        <small>Founder & CEO</small>
                        <div className="d-flex justify-content-center mt-3">
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                      <div className="team-item bg-white text-center rounded p-4 pt-0">
                        <img
                          className="img-fluid rounded-circle p-4"
                          src="/team-2.jpg"
                          alt=""
                        />
                        <h5 className="mb-0">Adam Crew</h5>
                        <small>Executive Manager</small>
                        <div className="d-flex justify-content-center mt-3">
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pt-md-4">
                  <div className="row g-4">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                      <div className="team-item bg-white text-center rounded p-4 pt-0">
                        <img
                          className="img-fluid rounded-circle p-4"
                          src="/team-3.jpg"
                          alt=""
                        />
                        <h5 className="mb-0">Kate Winslet</h5>
                        <small>Co Founder</small>
                        <div className="d-flex justify-content-center mt-3">
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                      <div className="team-item bg-white text-center rounded p-4 pt-0">
                        <img
                          className="img-fluid rounded-circle p-4"
                          src="/team-4.jpg"
                          alt=""
                        />
                        <h5 className="mb-0">Cody Gardner</h5>
                        <small>Project Manager</small>
                        <div className="d-flex justify-content-center mt-3">
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}
    </>
  );
}

export default About;
