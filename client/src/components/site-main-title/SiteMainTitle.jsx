import "./site-main-title.css";

const SiteMainTitle = () => {
  return (
    <article className="site-main-title">
      <header>
        <h1>
          Welcome to FindRestaurant.com - Your Guide to Culinary Excellence!
        </h1>
      </header>

      <section className="section-site-main">
        <h2>What We Offer?</h2>
        <p>
          FindRestaurant.com is your reliable source for finding the best
          restaurants. We provide detailed information and real
          reviews to help you choose the perfect spot for your next gourmet
          adventure.
        </p>
      </section>

      <section className="title-how-to-use">
        <h2>How to Use Our Site?</h2>
        <ol className="ol">
          <ul>
            <li>
              <h3>Ratings and Reviews</h3>
              <p>
                Check out real reviews from restaurant visitors. Our community
                shares their experiences to help you make an informed choice.
                Additionally, you can also share your impressions by leaving
                comments under each restaurant listing.
              </p>
            </li>
            <li>
              <h3>Special Offers</h3>
              <p>
                Explore our special offers and promotions from restaurants. Make
                reservations through our website and take advantage of exclusive
                deals.
              </p>
            </li>
            <li>
              <h3>Menu Variety</h3>
              <p>
                Discover a diverse menu selection from various cuisines. Whether
                you're craving traditional dishes or looking for something
                unique, our restaurants offer a wide range of options to satisfy
                your taste buds.
              </p>
            </li>
            <li>
              <h3>Event Hosting</h3>
              <p>
                Planning a special event? Many of our partner restaurants
                provide event hosting services. From birthday parties to
                business meetings, find the perfect venue with our extensive
                list of restaurant options.
              </p>
            </li>
            <li>
              <h3>Local Favorites</h3>
              <p>
                Explore the best local favorites in your area. Our platform
                showcases hidden gems and popular spots loved by the community.
                Support local businesses and indulge in delicious dishes from
                nearby restaurants.
              </p>
            </li>
            <li>
              <h3>Culinary Experiences</h3>
              <p>
                Embark on culinary adventures with our curated list of
                restaurants offering unique dining experiences. Whether it's a
                chef's tasting menu or themed events, elevate your dining
                journey with these exceptional culinary establishments.
              </p>
            </li>
          </ul>
        </ol>
      </section>

      <section className="ol">
        <h2 className="section-site-main-thousand">Why Thousands Choose Us?</h2>
        <ol>
          <li>
            <strong>Real Reviews:</strong> Our user community provides authentic
            reviews and experiences.
          </li>
          <li>
            <strong>Easy Search:</strong> Filter restaurants according to your
            preferences.
          </li>
          <li>
            <strong>Exclusive Offers:</strong> Benefit from special promotions
            and discounts.
          </li>
        </ol>
      </section>
      <div className="new-produkt">
        <h2 className="new-produkt-title">
          These are the latest<span className="text-xs"> news from us!</span>
        </h2>
        <section id="latest-news">
          <article>
            <h3>New Collection of Dishes</h3>
            <p>
              Our head chef has unveiled a new collection of exquisite dishes,
              promising unique flavors and culinary delight.
            </p>
            <p className="date">Published on: November 27, 2023</p>
          </article>

          <article>
            <h3>Special December Promotion</h3>
            <p>
              Throughout December, book a table through our website and enjoy a
              15% discount on all menus.
            </p>
            <p className="date">Published on: November 22, 2023</p>
          </article>
        </section>
      </div>
    </article>
  );
};

export default SiteMainTitle;
