import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import * as restaurantService from "../../services/restaurantService";

import "./create.css";
import styles from './create.css';

const formInitialState = {
    title: '',
    chef: '',
    city: '',
    category: '',
    stars: '',
    email: '',
    imageUrl: '',
    description: '',
}

const Create = ({ onClose }) => {
 
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState(formInitialState);

    const onChange = (e) => {
        let value = '';

        switch (e.target.type) {
            case 'number':
                value = Number(e.target.value);
                break;
        
            default:
                value = e.target.value
                break;
        }

        setFormValues(state => ({
            ...state,
            [e.target.name]: value
        }));
    }
   
    const [validate, setValidate] = useState('');
    const titleValidator = () => {
        if(formValues.title.length <= 0) {
            setValidate(state => ({
                ...state,
                title: 'Title is required!'
            }));
            return;
        } else if (formValues.title.length <= 2) {
            setValidate(state => ({
                ...state,
                title: 'Title must be at least 2 characters!'
            }));
        } else if(formValues.title === '' ) {
          setValidate(state => ({
            ...state,
            title: 'Title is required!'
        }));
        return;
        } else if (!formValues.title.trim()) {
          setValidate(state => ({
              ...state,
              title: 'Title is required!'
          }));
          return;
        }
        else { 
            if(validate.title) {
                setValidate(state => ({
                    ...state,
                    title: '',
                }));
            }
        }   
    }

    const chefValidator = () => {
        if(formValues.chef.length <= 0) {
            setValidate(state => ({
                ...state,
                chef: "Chef's name is required!"
            }));
        } else if (formValues.chef === '') {
          setValidate(state => ({
              ...state,
              chef: 'Chef is required!'
          }));
          return;
        }
        else { 
            if(validate.chef) {
                setValidate(state => ({
                    ...state,
                    chef: '',
                }));
            }
        }
    }

    const cityValidator = () => {
        if(formValues.city.length <= 0) {
            setValidate(state => ({
                ...state,
                city: "City is required!"
            }));
        }
        else { 
            if(validate.city) {
                setValidate(state => ({
                    ...state,
                    city: '',
                }));
            }
        }
    }

    const categoryValidator = () => {
        if(formValues.category.length <= 0) {
            setValidate(state => ({
                ...state,
                category: "Category is required!"
            }));
        }
        else { 
            if(validate.category) {
                setValidate(state => ({
                    ...state,
                    category: '',
                }));
            }
        }
    }

    const starsValidator = () => {

        if
        (formValues.stars.length <= 0) {
            setValidate(state => ({
                ...state,
                stars: "Please write the stars of your Restaurant"
            })); 
        } else if(formValues.stars >= 6) {
            setValidate(state => ({
                ...state,
                stars: "The stars cannot be more than 5."
            }));
        }
        else { 
            if(validate.stars) {
                setValidate(state => ({
                    ...state,
                    stars: '',
                }));
            }
        }
    }

    const emailValidator = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formValues.email.match(emailPattern)) {
            setValidate((state) => ({
              ...state,
              email: 'Please enter a valid email address.',
            }));
          } else {
            if (validate.email) {
              setValidate((state) => ({
                ...state,
                email: '',
              }));
            }
          }
    }

    const imageUrlValidator = () => {
        if (formValues.imageUrl.startsWith('http')) {
          if (validate.imageUrl) {
            setValidate((state) => ({
              ...state,
              imageUrl: '',
            }));
          }
        } else {
          setValidate((state) => ({
            ...state,
            imageUrl: 'Please enter a valid URL starting with "http".',
          }));
        }
      };

      const descriptionValidator = () => {
        const descriptionLength = formValues.description.length;
      
        if (descriptionLength < 20) {
          setValidate((state) => ({
            ...state,
            description: 'Description must be at least 20 characters.',
          }));
        } else if (descriptionLength > 1000) {
          setValidate((state) => ({
            ...state,
            description: 'Description cannot exceed 1000 characters.',
          }));
        } else {
          if (validate.description) {
            setValidate((state) => ({
              ...state,
              description: '',
            }));
          }
        }
      };


    const createProductSubmitHandler = async (e) => {
    e.preventDefault();

  try {
        const restaurantData = Object.fromEntries(new FormData(e.currentTarget));
        if(restaurantData.title === '' 
        || restaurantData.chef === ''
        || restaurantData.city === ''
        || restaurantData.category === ''
        || restaurantData.stars === ''
        || restaurantData.email === ''
        || restaurantData.imageUrl === ''
        || restaurantData.description === ''
        ) {
          toast.error('All fields are required!')
          return;
        }
        
        await restaurantService.create(restaurantData);

        toast.success('Restaurant created successfully');
        navigate("/gallery");
      } catch (err) {
        console.error("Error creating restaurant:", err);
        toast.error('Error creating restaurant. Please try again.');
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
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Restaurant Name"
                  value={formValues.title}
                  onChange={onChange}
                  onBlur={titleValidator}
                  className={validate.title && styles.inputError}
                />
                {validate.title && (
                    <p className={styles.errorMessage}>{validate.title}</p> 
                )}
              </div>
              <div>
                <input type="text" 
                id="chef" 
                name="chef" 
                placeholder="Chef"
                value={formValues.chef}
                onChange={onChange}
                onBlur={chefValidator}
                className={validate.chef && styles.inputError}
                />
                {validate.chef && (
                    <p className={styles.errorMessage}>{validate.chef}</p> 
                )}
              </div>
              <div>
                <input type="text" 
                id="city" 
                name="city" 
                placeholder="City"
                value={formValues.city}
                onChange={onChange}
                onBlur={cityValidator}
                className={validate.city && styles.inputError}
                />
                {validate.city && (
                    <p className={styles.errorMessage}>{validate.city}</p> 
                )}
              </div>

              <div>
                <input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Category"
                  value={formValues.category}
                  onChange={onChange}
                  onBlur={categoryValidator}
                  className={validate.category && styles.inputError}
                />
                {validate.category && (
                    <p className={styles.errorMessage}>{validate.category}</p> 
                )}
              </div>

              <div>
                <input
                  type="number"
                  id="stars"
                  name="stars"
                  placeholder="Stars"
                  value={formValues.stars}
                  onChange={onChange}
                  onBlur={starsValidator}
                  className={validate.stars && styles.inputError}
                />
                {validate.stars && (
                    <p className={styles.errorMessage}>{validate.stars}</p> 
                )}
              </div>

              <div>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={onChange}
                  onBlur={emailValidator}
                  className={validate.email && styles.inputError}
                />
                {validate.email && (
                    <p className={styles.errorMessage}>{validate.email}</p> 
                )}
              </div>

              <div>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="ImageUrl"
                  value={formValues.imageUrl}
                  onChange={onChange}
                  onBlur={imageUrlValidator}
                  className={validate.imageUrl && styles.inputError}
                />
                {validate.imageUrl && (
                    <p className={styles.errorMessage}>{validate.imageUrl}</p> 
                )}
              </div>

              <textarea
                name="description"
                id="description"
                placeholder="Description"
                value={formValues.description}
                onChange={onChange}
                onBlur={descriptionValidator}
                className={validate.imageUrl && styles.inputError}
              >
                
              </textarea>
              {validate.description && (
                    <p className={styles.errorMessage}>{validate.description}</p> 
                )}
              <button
                className="button button--red--absenden"
                type="submit"
                name="absendenbutton"
              >
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
