import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
        <div class="wrapper__nav">
            <div class="wrapper-media">
                <ul>
                    <li><a class="wrapper-media-sl" href="https://www.twitter.com/">
                    <i class="fab fa-twitter icons fa-2x"></i>
                {/* <img src="../public/img/twitter-3.jpg" alt="Twitter" /> */}
                </a></li>
                    <li><a class="wrapper-media-sl" href="https://www.instagram.com/">
                    <i class="fab fa-instagram icons fa-2x"></i>
                {/* <img src="../public/img/instagram.webp" alt="Instagram" /> */}
                </a></li>
                    <li><a class="wrapper-media-sl" href="https://www.facebook.com/">
                    <i class="fab fa-facebook icons fa-2x"></i>
                {/* <img src="../public/img/facebook.webp" alt="Facebook" /> */}
                </a></li>
                    <li><a class="wrapper-media-sl" href="https://www.tik-tok.com/">
                    <i class="fab fa-tiktok icons fa-2x"></i>
                {/* <img src="../public/img/tik-tok.webp" alt="TikTok" /> */}
                </a></li>
                </ul>
                </div>
            <div class="wagen">🛒Nimm (2) produkte für 30,00 €
            </div>
        </div>


	{/* ABOUT-US */}

        <section>
            <div class="hauptmenu">
                <p>Home</p>
                <span>✶</span>
                <p>Über uns</p>
                <span>✶</span>
                <p>Menü</p>
                <h1 class="logo">
                <div class="logo-1">
                    <div class="bolded">
                        BURGER HOUSE<span></span>
                    </div>
                    <div class="kl-logo">
                        slow &amp; burger station
                    </div>
                </div>
                </h1>
                <p>Gallery</p>
                <span>✶</span>
                <p>Blog</p>
                <span>✶</span>
                <p>Kontakt</p>
            </div>
        </section>


	    {/* UNSERE-BURGER */}

        <section class="wrapper">
            <div class="wrapper-signature">
                <img class="signature1" src="../public/img/man-in-black.jpg" alt="Unsere Burger"/>
                <img class="signature2" src="../public/img/grilled-burger.jpg" alt="Unsere Burger"/>
            </div>
        </section>



  {/* DAS-SIND-WIR-MOBILE */}
        <section class="leistungs__mobile">
            <div class="wrapper leistungs__article__mobile">
                <div class="leistungs__image">
                <img src="../public/img/grilled-burger.jpg" alt="" />
                </div>
                <div class="leistungs__text leistungs__text--right">
                    <h2>
                    <spann class="text-xs">Was ist</spann> BurgerHouse ?
                    </h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </p>
                <button class="button button--solid">Schaue mehr ..</button>
                </div>
                <div class="wrapper leistungs__article__mobile">
                    <div class="leistungs__image">
                        <img src="../public/img/grilled-burger.jpg" alt="" />
                    </div>
                <div class="leistungs__text leistungs__text--right">
                    <h2>
                    <spann class="text-xs">Was ist</spann> BurgerHouse ?
                    </h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </p>
                <button class="button button--solid">Schaue mehr ..</button>
            </div>
        </section>

	    {/* NEUE-GERICHTE */}

        <article>
            <div class="new-produkt">
                <h2 class="new-produkt-title">Letzte nachrichte <spann class="text-xs">von uns!</spann>
                </h2>
                <p class="new-produkt-p-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam
                quibusdam numquam eveniet <br />consectetur exercitationem earum.Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.</p>
            </div>
        </article>

	{/* NEUE-GERICHTE-PHOTO */}

        <section class="wrapper">
            <div class="wrapper_box">
                <img class="img__klein" src="../public/img/team-400-266.jpg" alt="" />
                <h2 class="title_justify">Spring Salat</h2>
                <h3 class="title_italic">
                Post by Chef / 02 Oktober 2016 / Comments: 5
                </h3>
                <p class="p_justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button class="button wrapper_box_button" type="button" name="button">
                Mehr Info
                </button>
            </div>
            <div class="wrapper_box_color">
                <img src="../public/img/team-400-266.jpg" alt="" />
                <h2 class="title_justify">Awesome cheese</h2>
                <h3 class="title_italic">
                Post by Chef / 02 Oktober 2016 / Comments: 3
                </h3>
                <p class="p_justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button
                class=" button__grau wrapper_box_button_color"
                type="button"
                name="button"
                >
                Mehr Info
                </button>
            </div>
            <div class="wrapper_box">
                <img class="img__klein" src="../public/img/team-400-266.jpg" alt="" />
                <h2 class="title_justify">Rustical Pizza</h2>
                <h3 class="title_italic">
                Post by Chef / 02 Oktober 2016 / Comments: 6
                </h3>
                <p class="p_justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button class="button wrapper_box_button" type="button" name="button">
                Mehr Info
                </button>
                <div></div>
            </div>
        </section>

	    {/* GÄSTE-ZUFRIEDENHEIT */}

        <section>
            <div class="customers">
                <div class="customers-title">
                <h2 class="customers-title-center">
                    <spann class="text-xs">Unsere</spann> Zufriedene{" "}
                    <spann class="text-xs">gäste</spann>
                </h2>
                <p class="customers-p-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam
                    quibusdam numquam eveniet <br />
                    consectetur exercitationem earum.Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                </p>
                <div class="image-director">
                    <p class="customers-director-speek">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                    magnam commodi illo
                    <br /> consequuntur natus voluptas deserunt, suscipit reiciendis ipsa
                    ipsum. Qui veniam voluptatum!
                    </p>
                </div>

                {/* GÄSTE-ZUFRIEDENHEIT MOBILE */}
                <div class="image__director__name__mobile">
                    <p class="img__director__name__mobile">Petrov Plamen</p>
                    <p class="img__name__mobile" />
                    <p class="img__city__mobile">Bad Tölz</p>
                </div>
                <div class="image__director__mobile">
                    <p class="customers__director__speek__mobile">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                    magnam commodi illo consequuntur natus voluptas deserunt, suscipit
                    reiciendis ipsa ipsum. Qui veniam voluptatum!
                    </p>
                </div>
                <p class="image-director-name">Petrov Plamen</p>
                <p class="image-city">Bad Tölz</p>
                </div>
            </div>
        </section>



	{/* BESTELL-FORMULAR */}

        <section class="flex-container-chefs">
            <div class="best-form-gericht">Für exclusive angebote anmelden</div>
                <div class="best-form">
                <form id="kontakt-formular" action="index.html" method="post">
                    <div class="kontakt-formular-center">
                        <label htmlFor="vorname" class="screenreader" />
                        <input id="vorname" type="text" name="vorname" placeholder="Vorname" />
                        <div>
                        <label htmlFor="nachname" class="screenreader" />
                        <input
                            id="nachname"
                            type="text"
                            name="nachname"
                            placeholder="Nachname"
                        />
                        </div>
                        <label htmlFor="email" class="screenreader" />
                        <input
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Email"
                        pattern="(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\u0022(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\u0022)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])"
                        title="Gib eine gültige E-Mail Adresse ein!"
                        />
                        <div>
                        <label htmlFor="leute" class="screenreader" />
                        <input
                            id="leute"
                            type="text"
                            name="leute"
                            placeholder="PLZ oder Standort"
                        />
                        </div>
                        <button
                        class="button button--red--absenden"
                        type="submit"
                        name="absendenbutton"
                        >
                        Registrieren!
                        </button>
                    </div>
                </form>
            </div>
        </section>

        <div class="anmelden__tok">
            <h2 class="anmelden"> Für exclusive angebote anmelden</h2>
        </div>

        <section class="ontainer">
            <div class="formular">
                <form id="kontakt-formular" action="index.html" method="post">
                    <div class="kontakt-formular-center">
                    <label htmlFor="vorname" class="screenreader" />
                    <input id="vorname" type="text" name="vorname" placeholder="Vorname" />
                    <div>
                    <label htmlFor="nachname" class="screenreader" />
                    <input id="nachname"
                    type="text"
                    name="nachname"
                    placeholder="Nachname"/>
                    </div>
                    <label htmlFor="email" class="screenreader" />
                    <input id="email"
                    type="text"
                    name="email"
                    placeholder="Email"
                    pattern="(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\u0022(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\u0022)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])"
                    title="Gib eine gültige E-Mail Adresse ein!"
                    />
                    <div>
                    <label htmlFor="leute" class="screenreader" />
                    <input
                    id="leute"
                    type="text"
                    name="leute"
                    placeholder="PLZ oder Standort"
                    />
                    </div>
                    <button
                    class="button button--red--absenden"
                    type="submit"
                    name="absendenbutton">Registrieren!</button>
                    </div>
                </form>
            </div>
        </section>

	    {/* UNTERE-LOGO */}

        <section class="untere-logo">
            <div class="untere-logo-text">

            <p><img src="../public/img/twitter-3.jpg" alt="Twitter" />Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Repellendus cumque sed neque consequatur! Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Repellendus cumque sed neque consequatur!</p>
            </div>
        </section>

	    {/* FOOTER */}

        <section>
            <div class="footer">
                <p class="title-P">Made by Petrov Plamen 2022</p>
                <article class="footer__menu">
                <a href="#">Home</a>
                <a href="#">Über uns</a>
                <a href="#">Menü</a>
                <a href="#">Gallery</a>
                <a href="#">Blog</a>
                <a href="#">Kontakt</a>
                </article>
            </div>
        </section>
  </div>
  )
}

export default App;
