import './about.css';

const About = () => {
  return (
    <div className='about-page'>
      <header className='about-page-header'>
        <h1>Why we are here?</h1>
      </header>

      <section className='about-page-section'>
        <h2>About Us</h2>
        <p>
          Welcome to our website, where we showcase the best restaurants around
          the world. We are dedicated to discovering exceptional culinary
          experiences and sharing them with our community.
        </p>

        <h2>Our Story</h2>
        <p>
          We were founded in <strong>2001</strong> with a passion for exploring the world of
          gastronomy. Since then, we have been on a mission to curate a
          collection of the finest dining establishments globally.
        </p>

        <h2>Our Notable Restaurants</h2>
        <p>
          Over the years, we have featured renowned restaurants such as
          La Tour d’Argent, Høst, and Rustical Pizza. These
          establishments have consistently delivered outstanding culinary
          delights that have captivated food enthusiasts worldwide.
        </p>

        <h2>Our Community</h2>
        <p>
          As of now, we are proud to have <strong>1244 users</strong> who actively
          engage with our platform, sharing their experiences and discovering
          new gastronomic wonders. Our growing community is a testament to the
          love for fine dining and culinary exploration.
        </p>
      </section>
    </div>
  );
};

export default About;
