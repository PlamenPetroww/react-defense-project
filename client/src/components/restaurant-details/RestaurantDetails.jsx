import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as restaurantService from "../../services/restaurantService";
import * as commentService from '../../services/commentService';
import useForm from "../../hooks/useForm";

import './RestaurantDetails.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import AuthContext from '../../contexts/authContext';

import reducer  from './commentReducer';
import Path from "../../paths";
import pathToUrl from "../../utils/pathUtils";
import Cube from "../cube/Cube";

const RestaurantDetails = () => {
    const navigate = useNavigate();
    const {email, userId} = useContext(AuthContext)
    const [restaurant, setRestaurant] = useState({});
    const [comments, dispatch] = useReducer(reducer, [])
    const { restaurantId } = useParams();

  useEffect(() => {
    restaurantService.getOne(restaurantId)
        .then(setRestaurant);
    //dobre e tuk da si sloja oshte edin .then i posle .catch ako e greshno da navigira kum 404
        commentService.getAll(restaurantId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                })
            });
    }, [restaurantId]);

  const addCommentHandler = async (values) => {

        const newComment = await commentService.create(
            restaurantId,
            values.comment
            );
            newComment.owner = {email};

            dispatch({
                type: 'ADD_COMMENT',
                payload: newComment
            }) 
        }

        const deleteButtonClickHandler = async () => {
            const hasConfirmed = confirm(`Are you sure you want to delete ${restaurant.title} ?`);

            if(hasConfirmed) {

                // try catch
                await restaurantService.remove(restaurantId);

                navigate('/gallery');
            }

        }

    const starsArray = Array.from({ length: parseInt(restaurant.stars, 10) });

    const {values, onChange, onSubmit} = useForm(addCommentHandler, {
        comment: '',

    } );

  return (

    <>
                <h1 className="details-title">Hier you receive all Information about your favourites Restaurant</h1>
        <section className="details">
            <div className="container-details">
                <h2 className="restaurant-name">Restaurant Name: {restaurant.title}</h2>
                <p><strong>Chef:</strong> {restaurant.chef}</p>
                <p><strong>Category: </strong>{restaurant.category}</p>
                <p className="container-gallery-info">
            <strong>Stars: </strong>
            {starsArray.map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} color="#FFFF00" />
            ))}
            </p>
                <p>For contact:  {restaurant.email}</p>
                <p>Restaurant description: <br /> {restaurant.description}</p>
                {userId === restaurant._ownerId && (
        <div className="buttons-options">
            <Link className="buttons-options-together buttons-options-edit" to={pathToUrl(Path.RestaurantEdit, {restaurantId})}>Edit</Link>
            <button className="buttons-options-together buttons-options-delete" onClick={deleteButtonClickHandler}>Delete</button>
        </div>
        )}
            </div>
            <div className="image-details">
                <div className="site-banner">
                    <p>Looks incredible</p>
                    <img src={restaurant.imageUrl} alt="restaurant-photo" />
                </div>
            </div>
        </section>
        
            {/* Restaurants Commentary */}
                <h2 className="comment-title">Add your Comment to this Restaurant</h2>
        {/* <div className="flex-2">
            <ul className="ul-comment">
                {comments.map(({_id, text, owner: {email}}) => (
                    <li key={_id}>
                    <p className="comment-paragraph"><strong>{email}: <br /> </strong>{text}</p>
                </li>
                ))}
            </ul>
            <div className="comment-cube-right">
                <Cube />
            </div>
            {comments.length === 0} {
                <p>No comments.</p>
            }
        </div> */}

        
        <article className="">
                {/* Zada se resetvat vsichki inputi sled natiskane na butona Add Comment trqbwa da izpolzvam kontrolirani formi - trqbwa da go poprawq */}
                <label>Add new comment:</label>
                <form onSubmit={onSubmit}>
                    <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment..."></textarea>
                <input type="submit" value="Add Comment" />
                </form>
        </article>
        
    </>
  );
};

export default RestaurantDetails;
