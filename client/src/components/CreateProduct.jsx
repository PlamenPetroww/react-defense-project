const CreateProduct = ({
    onClose,
    onProductCreate,
}) => {

    return(
        <section className="ontainer overlay" >
            <div onClick={onClose}></div>
            <div className="anmelden__tok">
                <h2 className="anmelden">Create your favourites Burger or Salat</h2>
            </div>
            <div className="formular modal">
                <form onSubmit={onProductCreate} id="kontakt-formular">
                    <div className="kontakt-formular-center">
                    <label htmlFor="title"/>
                    <input type="text" name="title" placeholder="Title" />
                    <div>
                    <label htmlFor="firstName"/>
                    <input type="text" name="firstName" placeholder="First Name"/>
                    </div>
                    <div>
                    <label htmlFor="lastName"/>
                    <input type="text" name="lastName" placeholder="Last Name"/>
                    </div>
                    <label htmlFor="email"/>
                    <input type="text" name="email" placeholder="Email" />
                    <div>
                    <label htmlFor="imageUrl"/>
                    <input type="text" name="imageUrl" placeholder="Your favourites dish photo"/>
                    </div>
                    <textarea name="description" htmlFor="description" placeholder="Your description" />               
                    <button className="button button--red--absenden"/* dali button trqbwa da e type button ili type submit ? */ type="button" name="absendenbutton">Create!</button>
                    <button className="button button--red--cancel" type="button" name="absendenbutton" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CreateProduct;