import { useContext, useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";

import * as restaurantService from "../../services/restaurantService";
import * as commentService from '../../services/commentService';

import './RestaurantDetails.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import AuthContext from '../../contexts/authContext';

import reducer  from './commentReducer';

const RestaurantDetails = () => {
    const {email, userId} = useContext(AuthContext)
    const [restaurant, setRestaurant] = useState({});
    const [comments, dispatch] = useReducer(reducer, [])
    const { restaurantId } = useParams();

  useEffect(() => {
    restaurantService.getOne(restaurantId)
        .then(setRestaurant);
    //dobre e tuk da si sloja oshte edin .then i posle .catch ako e greshno da navigira kum 404
        commentService.getAll(restaurantId)
            .then(result => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                })
            });
    }, [restaurantId]);

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
        const newComment = await commentService.create(
            restaurantId,
            formData.get('comment')
            );
            newComment.owner = {email};
            dispatch({
                type: 'ADD_COMMENT',
                payload: newComment
            })
    } catch(error) {
        console.log(error)
    }
  }

    const starsArray = Array.from({ length: parseInt(restaurant.stars, 10) });

    // const {values, onChange, onSubmit} = useForm(addCommentHandler, {
    //     comment: '',
    // })

  return (

    <>
        <section className="details">
            <div className="container-details">
                <h1 className="details-title">Hier you receive all Information about your favourites Restaurant</h1>
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
            </div>
            <div className="image-details">
                <div className="site-banner">
                    <p>Looks incredible</p>
                    <img src={restaurant.imageUrl} alt="restaurant-photo" />
                </div>
            </div>
        </section>
            {/* Restaurants Commentary */}
            <div>
                <h2>Comments</h2>
                <ul>
                    {comments.map(({_id, text, owner: {email}}) => (
                        <li key={_id}>
                        <p>{email}: {text}</p>
                    </li>
                    ))}
                    
                </ul>

                {comments.length === 0} {
                    <p>No comments.</p>
                }
            </div>

            {userId === restaurant._ownerId && (
            <div>
                <a href="#">Edit</a>
                <a href="#">Delete</a>
            </div>
            )}
            <article className="create-comment">

                {/* Zada se resetvat vsichki inputi sled natiskane na butona Add Comment trqbwa da izpolzvam kontrolirani formi - trqbwa da go poprawq */}
                <label>Add new comment:</label>
                <form onSubmit={addCommentHandler}>
                    <textarea name="comment" placeholder="Comment..."></textarea>
                <input type="submit" value="Add Comment" />
                </form>
            </article>
        
    </>
  );
};

export default RestaurantDetails;
