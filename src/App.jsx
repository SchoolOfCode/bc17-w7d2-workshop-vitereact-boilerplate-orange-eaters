import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="site-main">
        <Main />
        <section className="works">
          <h2>How it works.</h2>
          <div className="card-wrapper">
            <div className="call">
              <img
                src="src/images/how-it-works-1.png"
                alt="fireplace with chairs"
                className="section-img"
              />
              <h3>Give us a call</h3>
              <p>
                Call us and book in a &rsquo;Design Consultation&rsquo; on a
                date and time to suit you.
              </p>
            </div>

            <div className="we-come">
              <img
                src="src/images/how-it-works-2.png"
                alt="woman by desk"
                className="section-img"
              />
              <h3>We come to you...</h3>
              <p>
                We come to your home to do an assessment of the space and to
                your preference.
              </p>
            </div>

            <div className="recommend">
              <img
                src="src/images/how-it-works-3.png"
                alt="woman by desk"
                className="section-img"
              />
              <h3>We recommend...</h3>
              <p>We send you a bespoke set of fireplace recommendations.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="find-us-on">
          <p>
            {" "}
            Find us on:
            <br />
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>TikTok</li>
            </ul>
          </p>
        </div>

        <div className="info">
          <p>
            © Fireplace Palace <br />
            <u>info@firepalace.co.uk</u>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
