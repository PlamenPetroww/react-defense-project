const SiteMainGerichte = () => {
    return (
        <section className="wrapper">
            <div className="wrapper_box">
                <img className="img__klein" src="../public/img/team-400-266.jpg" alt="" />
                <h2 className="title_justify">Spring Salat</h2>
                <h3 className="title_italic">
                Post by Chef / 02 Oktober 2016
                </h3>
                <p className="p_justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="p_justify email">email : </p>
                <button className="button wrapper_box_button" type="button" name="button">
                Mehr Info
                </button>
            </div>
            <div className="wrapper_box_color">
                <img src="../public/img/team-400-266.jpg" alt="" />
                <h2 className="title_justify">Awesome cheese</h2>
                <h3 className="title_italic">
                Post by Chef / 02 Oktober 2016
                </h3>
                <p className="p_justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="p_justify email">email : </p>
                <button
                className=" button__grau wrapper_box_button_color"
                type="button"
                name="button"
                >
                Mehr Info
                </button>
            </div>
            <div className="wrapper_box">
                <img className="img__klein" src="../public/img/team-400-266.jpg" alt="" />
                <h2 className="title_justify">Rustical Pizza</h2>
                <h3 className="title_italic">
                Post by Chef / 02 Oktober 2016
                </h3>
                <p className="p_justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="p_justify email">email : </p>
                <button className="button wrapper_box_button" type="button" name="button">
                Mehr Info
                </button>
                <div></div>
            </div>
        </section>
    )
};

export default SiteMainGerichte;