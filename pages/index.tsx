import { AppHeader } from "../components/header";
import {
  AppServices,
  HomeAboutUs,
  HomeHero1,
} from "../components/home/sections";

export default function () {
  return (
    <div>
      <AppHeader />
      <HomeHero1 />
      <HomeAboutUs />
      <AppServices />
      <Pricing />

      <CTAArea />
      <BrandArea />
      <ContactArea />
      <Section2 />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer-area footer-eleven">
      <div className="footer-top">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="footer-widget f-about">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src="/KusuConsult-black.svg"
                        alt="#"
                        className="img-fluid"
                        height={50}
                      />
                    </a>
                  </div>
                  <p>
                    KusuConsult is commited to education individuals on
                    blockchain and how it can be applied in our day-to-day
                    activities.
                  </p>
                  <p className="copyright-text">
                    <span>© 2022.</span>Designed and Developed by
                    <a href="javascript:void(0)" rel="nofollow">
                      KusuConsult Hub
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="footer-widget f-link">
                  <h5>Solutions</h5>
                  <ul style={{ marginLeft: 0, paddingLeft: 0 }}>
                    <li>
                      <a href="https://gonana.vercel.farm">Gonana</a>
                    </li>
                    <li>
                      <a href="https://jaysources.finance/">Jaysources</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Univote</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Kusuconsult Hub</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="footer-widget f-link">
                  <h5>Support</h5>
                  <ul style={{ marginLeft: 0, paddingLeft: 0 }}>
                    <li>
                      <a href="javascript:void(0)">Trainings</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Enquires</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Contact</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Affiliates</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="footer-widget newsletter">
                  <h5>Subscribe</h5>
                  <p>Subscribe to our newsletter for the latest updates</p>
                  <form
                    action="#"
                    method="get"
                    target="_blank"
                    className="newsletter-form"
                  >
                    <input
                      name="EMAIL"
                      placeholder="Email address"
                      type="email"
                    />
                    <div className="button">
                      <button className="sub-btn">
                        <i className="lni lni-envelope"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Section2() {
  return (
    <div>
      {/* <section className="map-section map-style-9">
    <div className="map-container">
      <object style="border:0; height: 500px; width: 100%;"
        data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7887109309127!2d-77.44196278417968!3d38.95165507956235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU3JzA2LjAiTiA3N8KwMjYnMjMuMiJX!5e0!3m2!1sen!2sbd!4v1545420879707"></object>
    </div>
    </div>
  </section> */}
    </div>
  );
}
function ContactArea() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="contact-item-wrapper">
              <div className="row">
                <div className="col-12 col-md-6 col-xl-12">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="lni lni-phone"></i>
                    </div>
                    <div className="contact-content">
                      <h4>Contact</h4>
                      <p>+2347036171049</p>
                      <p>kusuconsult@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-12">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="lni lni-map-marker"></i>
                    </div>
                    <div className="contact-content">
                      <h4>Address</h4>
                      <p>KusuConsult, 2nd Floor Kalwa House, Zarmaganda, Jos</p>
                      <p>Plateau State, Nigeria</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-12">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="lni lni-alarm-clock"></i>
                    </div>
                    <div className="contact-content">
                      <h4>Schedule</h4>
                      <p>24 Hours / 5 Days Open</p>
                      <p>Office time: 10 AM - 5:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="contact-form-wrapper">
              <div className="row">
                <div className="col-xl-10 col-lg-8 mx-auto">
                  <div className="section-title text-center">
                    <span> Get in Touch </span>
                    <h2>Ready to Get Started</h2>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      quiblanditiis praesentium
                    </p>
                  </div>
                </div>
              </div>
              <form action="#" className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="subject"
                      id="email"
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Type Message"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="button text-center rounded-buttons">
                      <button
                        type="submit"
                        className="btn primary-btn rounded-full"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return <div></div>;
}

function BrandArea() {
  return (
    <div id="clients" className="brand-area section">
      <div className="section-title-five">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h6>Meet our Clients</h6>
                <h2 className="fw-bold">Our Awesome Clients/Partners</h2>
                <p>
                  We were successful because of our clients' success. That's why
                  we love to make perfect solutions for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-12">
            <div className="clients-logos">
              <div className="single-image">
                <img
                  src="assets/images/client-logo/algorand.png"
                  alt="Brand Logo Images"
                />
              </div>
              <div className="single-image">
                <img
                  src="assets/images/client-logo/bination.png"
                  alt="Brand Logo Images"
                />
              </div>
              <div className="single-image">
                <img
                  src="assets/images/client-logo/aerernity.png"
                  alt="Brand Logo Images"
                />
              </div>
              <div className="single-image">
                <img
                  src="assets/images/client-logo/moonbeam.png"
                  alt="Brand Logo Images"
                />
              </div>
              <div className="single-image">
                <img
                  src="assets/images/client-logo/kusu.svg"
                  alt="Brand Logo Images"
                />
              </div>
              <div className="single-image">
                <img
                  src="assets/images/bluzelle.png"
                  alt="Brand Logo Images"
                />
              </div>
              <div className="single-image">
                <img
                  src="assets/images/cypherium.png"
                  alt="Brand Logo Images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CTAArea() {
  return (
    <div>
      <section id="call-action" className="call-action">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
              <div className="inner-content">
                <h2>
                  We love to make perfect <br />
                  solutions for your business
                </h2>
                <p>
                  We were successful because of our clients' success. That's why
                  we love to make perfect solutions for your business.
                </p>
                <div className="light-rounded-buttons">
                  <a href="#" className="btn primary-btn-outline">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AfterFooter() {
  return (
    <div>
      <a href="#" className="scroll-top btn-hover">
        <i className="lni lni-chevron-up"></i>
      </a>
    </div>
  );
}
