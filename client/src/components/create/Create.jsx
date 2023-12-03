// Create.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as restaurantService from '../../services/restaurantService';
import './create.css';

const Create = ({ onClose }) => {
  const navigate = useNavigate();

  const createProductSubmitHandler = async (e) => {
    e.preventDefault();

    const restaurantData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await restaurantService.create(restaurantData);

      navigate('/gallery');
    } catch (err) {
      // Обработка на грешката
      console.log(err);
    }
  };

  return (
    <>
      <section className="container">
        <div onClick={onClose}></div>
        <div className="anmelden__tok">
          <h2 className="anmelden">Show Your Restaurant to the World</h2>
        </div>
        <div className="formular">
          <form onSubmit={createProductSubmitHandler} id="kontakt-formular">
            <div className="kontakt-formular-center">
                <div>
                <input type="text" id="title" name="title" placeholder='Restaurant Name' />
              </div>
              <div>
                <input type="text" id="chef" name="chef" placeholder='Chef' />
              </div>
              <div>
                <input type="text" id="city" name="city" placeholder='City' />
              </div>

              <div>
                <input type="text" id="category" name="category" placeholder='Category' />
              </div>

              <div>
                <input type="text" id="stars" name="stars" placeholder='Stars' />
              </div>

              <div>
                <input type="text" id="email" name="email" placeholder='Email' />
              </div>

              <div>
                <input type="text" id="imageUrl" name="imageUrl" placeholder='ImageUrl' />
              </div>

              <textarea
                name="description"
                id="description"
                placeholder='Description'
              ></textarea>

              <button className="button button--red--absenden" type="submit" name="absendenbutton">
                Create!
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Create;
