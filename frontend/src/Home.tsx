import BE_LOGO from "./assets/be_logo.png";
import Header from "./Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Header />

      <section className="hero block-animation">
        <div className="hero-content">
          <h1 className="typing-container">
            Revenue Management, Marketing and Success
          </h1>
          <p>
            Are you looking to grow your market share, profitability & guest
            satisfaction index? If yes, then we are here to help you achieve
            that
          </p>
        </div>
      </section>

      <section className="about" id="about-block">
        <div className="about-content block-animation">
          {" "}
          {/* Added a wrapper div */}
          <h2>About Us</h2>
          <p>
            We're a team of dedicated professionals passionate about delivering
            high-quality services. We're committed to exceeding client
            expectations and building lasting partnerships. We believe in
            innovation and continuous improvement, always seeking new ways to
            better serve our clients.
          </p>
          <div className="about-image">
            {" "}
            {/* Add image container */}
            <img src={BE_LOGO} alt="About Us" />{" "}
            {/* Replace with your image path */}
          </div>
        </div>
      </section>

      <section className="services" id="services-block">
        <h2>Services</h2>
        <div className="service-grid">
          <div className="service block-animation">
            <h3>Expert Advice</h3>
            <p>
              Expert advice helps businesses navigate challenges by providing
              insights from industry professionals. It includes strategic
              guidance, data-driven decision-making, and best practices to
              optimize website performance and revenue generation. With expert
              recommendations, businesses can enhance user experience, improve
              conversions, and implement effective marketing strategies.
            </p>
          </div>
          <div className="service block-animation">
            <h3>Online Revenue Management</h3>
            <p>
              Online revenue management involves optimizing pricing, promotions,
              and sales strategies to maximize profitability. It includes
              analyzing consumer behavior, tracking key performance indicators,
              and leveraging data to make informed decisions. By implementing
              dynamic pricing, inventory control, and digital marketing
              techniques, businesses can enhance their revenue streams and
              ensure sustainable growth.
            </p>
          </div>
          <div className="service block-animation">
            <h3>Customer Support</h3>
            <p>
              Efficient customer support plays a crucial role in website and
              revenue management by ensuring smooth operations and enhancing
              customer satisfaction. It includes resolving technical issues,
              assisting users with purchases, and providing real-time support
              through chat, email, or phone. A strong customer support system
              helps reduce cart abandonment, build brand loyalty, and drive
              higher conversions by addressing concerns promptly.
            </p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact-block">
        <div className="contact-container block-animation">
          <h2>Contact Us</h2>
          <p>Get in touch with us today!</p>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <footer>
        <p>
          &copy; {new Date().getFullYear()} Booking Engg. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
