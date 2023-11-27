const SiteMainTitle = () => {
    return (
        <article>
            <header>
                <h1>Welcome to FindRestaurant.com - Your Guide to Culinary Excellence!</h1>
            </header>

    <section className="section-site-main">
        <h2>What We Offer?</h2>
        <p>[Your Website Name] is your reliable source for discovering the best restaurants in [location]. We provide
            detailed information and real reviews to help you choose the perfect spot for your next gourmet adventure.</p>
    </section>

    <section>
        <h2>How to Use Our Site?</h2>
        <ol>
            <li>
                <h3>Search by Location</h3>
                <p>Use our convenient search filter to find restaurants in your desired location. Whether you're looking
                    for a cuisine with a refined taste or a cozy atmosphere, we are here to guide you.</p>
            </li>
            <li>
                <h3>Ratings and Reviews</h3>
                <p>Check out real reviews from restaurant visitors. Our community shares their experiences to help you
                    make an informed choice. Additionally, you can also share your impressions by leaving comments under
                    each restaurant listing.</p>
            </li>
            <li>
                <h3>Special Offers</h3>
                <p>Explore our special offers and promotions from restaurants. Make reservations through our website and
                    take advantage of exclusive deals.</p>
            </li>
        </ol>
    </section>

    <section>
        <h2>Why Thousands Choose Us?</h2>
        <ul>
            <li><strong>Real Reviews:</strong> Our user community provides authentic reviews and experiences.</li>
            <li><strong>Easy Search:</strong> Filter restaurants according to your preferences.</li>
            <li><strong>Exclusive Offers:</strong> Benefit from special promotions and discounts.</li>
        </ul>
    </section>
            <div className="new-produkt">
                <h2 className="new-produkt-title">These are the latest<span className="text-xs"> news from us!</span>
                </h2>
                <p className="new-produkt-p-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam
                quibusdam numquam eveniet <br />consectetur exercitationem earum.Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.</p>
            </div>
        </article>
    )
};

export default SiteMainTitle;