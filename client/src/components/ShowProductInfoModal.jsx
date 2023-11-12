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
                    <input type="text" name="title"/>
                    <div>
                    <label htmlFor="firstName" className="screenreader" />
                    <input type="text" name="firstName"/>
                    </div>
                    <div>
                    <label htmlFor="lastName" className="screenreader" />
                    <input type="text" name="lastName"/>
                    </div>
                    <label htmlFor="email" className="screenreader" />
                    <input type="text" name="email"/>
                    <div>
                    <label htmlFor="imageUrl" className="screenreader" />
                    <input type="text" name="imageUrl"/>
                    </div>
                    <textarea name="description" htmlFor="description" className="screenreader textarea-create"/>               
                    <button className="button button--red--absenden" type="submit" name="absendenbutton">Subscribed Here</button>
                    <button className="button button--red--cancel" type="submit" name="absendenbutton" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ShowProductInfoModal;