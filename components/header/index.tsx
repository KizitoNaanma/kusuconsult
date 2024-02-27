export function AppHeader() {
  return (
    <div>
      <section className="navbar-area navbar-nine">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img src="/KusuConsult-white.svg" alt="Logo" height={40} />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNine"
                  aria-controls="navbarNine"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarNine"
                >
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <a className=" active" href="#hero-area">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="" href="#services">
                        Services
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="" href="#corevalues">
                       Core Values
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="navbar-btn d-none d-lg-inline-block">
                  <a className="menu-bar" href="#side-menu-left">
                    <i className="lni lni-menu"></i>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <Sidebar />
    </div>
  );
}

function Sidebar() {
  return (
    <div>
      <div className="sidebar-left">
        <div className="sidebar-close">
          <a className="close" href="#close">
            <i className="lni lni-close"></i>
          </a>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-logo">
            <a href="index.html">
              <img src="/KusuConsult-black.svg" alt="Logo" height={50} />
            </a>
          </div>
          <p className="text">
            KusuConsult is commited to education individuals on blockchain and
            how it can be applied in our day-to-day activities.
          </p>

          <div className="sidebar-menu">
            <h5 className="menu-title">Quick Links</h5>
            <ul>
              <li>
                <a href="javascript:void(0)">About Us</a>
              </li>
              <li>
                <a href="javascript:void(0)">Our Team</a>
              </li>
              <li>
                <a href="javascript:void(0)">Latest News</a>
              </li>
              <li>
                <a href="javascript:void(0)">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="sidebar-social align-items-center justify-content-center">
            <h5 className="social-title">Follow Us On</h5>
            <ul>
              <li>
                <a href="#">
                  <i className="lni lni-facebook-filled"></i>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-twitter-original"></i>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-linkedin-original"></i>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="overlay-left"></div>
    </div>
  );
}
