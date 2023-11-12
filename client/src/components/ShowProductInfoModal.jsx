import { useState } from "react";

const ShowProductInfoModal = ({
    onClose,
}) => {

    return(
        <section className="ontainer overlay" >
            <div className="backdrop" onClick={onClose}></div>
            <div className="anmelden__tok">
                <h2 className="anmelden">Check the full Information</h2>
            </div>
            <div className="formular modal">
                <form id="kontakt-formular">
                    <div className="kontakt-formular-center">
                    <label htmlFor="title" className="screenreader" />
                    <input type="text" name="title" placeholder="Title" />
                    <div>
                    <label htmlFor="firstName" className="screenreader" />
                    <input type="text" name="firstName" placeholder="First Name"/>
                    </div>
                    <div>
                    <label htmlFor="lastName" className="screenreader" />
                    <input type="text" name="lastName" placeholder="Last Name"/>
                    </div>
                    <label htmlFor="email" className="screenreader" />
                    <input type="text" name="email" placeholder="Email" />
                    <div>
                    <label htmlFor="imageUrl" className="screenreader" />
                    <input type="text" name="imageUrl" placeholder="Your favourites dish photo"/>
                    </div>
                    <textarea name="description" htmlFor="description" className="screenreader textarea-create" placeholder="Your description" />               
                    <button className="button button--red--absenden" type="submit" name="absendenbutton">Subscribed Here</button>
                    <button className="button button--red--cancel" type="submit" name="absendenbutton" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ShowProductInfoModal;