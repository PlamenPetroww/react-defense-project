const SiteMainGuest = () => {
    return (
        <section>
            <div className="customers">
                <div className="customers-title">
                <h2 className="customers-title-center">
                    <span className="text-xs">Unsere</span> Zufriedene{" "}
                    <span className="text-xs">gäste</span>
                </h2>
                <p className="customers-p-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam
                    quibusdam numquam eveniet <br />
                    consectetur exercitationem earum.Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                </p>
                <div className="image-director">
                    <p className="customers-director-speek">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                    magnam commodi illo
                    <br /> consequuntur natus voluptas deserunt, suscipit reiciendis ipsa
                    ipsum. Qui veniam voluptatum!
                    </p>
                </div>

                {/* GÄSTE-ZUFRIEDENHEIT MOBILE */}
                <div className="image__director__name__mobile">
                    <p className="img__director__name__mobile">Petrov Plamen</p>
                    <p className="img__name__mobile" />
                    <p className="img__city__mobile">Bad Tölz</p>
                </div>
                <div className="image__director__mobile">
                    <p className="customers__director__speek__mobile">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                    magnam commodi illo consequuntur natus voluptas deserunt, suscipit
                    reiciendis ipsa ipsum. Qui veniam voluptatum!
                    </p>
                </div>
                <p className="image-director-name">Petrov Plamen</p>
                <p className="image-city">Bad Tölz</p>
                </div>
            </div>
        </section>
    )
}

export default SiteMainGuest;