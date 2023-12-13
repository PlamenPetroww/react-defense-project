import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        const fetchData = async () => {
            try {
                const restaurantResult = await restaurantService.getOne(restaurantId);
                setRestaurant(restaurantResult);
    
                const commentResult = await commentService.getAll(restaurantId);
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: commentResult,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [restaurantId, dispatch]);

  const addCommentHandler = async (values) => {

        const newComment = await commentService.create(
            restaurantId,
            values.comment
            );
            newComment.owner = {email};

            dispatch({
                type: 'ADD_COMMENT',
                payload: newComment
            });

            values.comment = '';
        }

        const deleteButtonClickHandler = async () => {
            const hasConfirmed = confirm(`Are you sure you want to delete ${restaurant.title} ?`);

            if(hasConfirmed) {

                try {
                    toast.success(`Successfully deleted ${restaurant.title}`);
                    await restaurantService.remove(restaurantId);
                    navigate('/gallery');
                } catch (error) {
                    console.error('Error deleting restaurant:', error);
                    toast.error('Failed to delete restaurant. Please try again.');
                }
            }

        }

    const starsArray = Array.from({ length: parseInt(restaurant.stars, 10) });

    const {values, onChange, onSubmit} = useForm(addCommentHandler, {
        comment: '',

    } );

  return (

    <>
        <section id="details-title">
            <div className="info-section">
                <div className="restaurant-header">
                <img className="restaurant-img" src={restaurant.imageUrl} alt="restaurant-photo" />
                <h2 className="restaurant-name">Restaurant Name: {restaurant.title}</h2>
                <p><strong>Chef:</strong> {restaurant.chef}</p>
                <p><strong>Category: </strong>{restaurant.category}</p>
                <p className="container-gallery-info">
            <strong>Stars: </strong>
            {starsArray.map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} color="#FFFF00" />
            ))}
            </p>
                <p><strong>For contact:  </strong>{restaurant.email}</p>
                <p><strong>Restaurant description: </strong><br /> {restaurant.description}</p>
                </div>

                
                    <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && userId !== restaurant._ownerId && (
                        <p className="no-comment">You can be the first to comment on the <strong>{restaurant.title}</strong> restaurant.</p>
                    )}
                </div>
                
                
                {userId === restaurant._ownerId && (
                <div className="buttons-options">
                    <Link className="button edit" to={pathToUrl(Path.RestaurantEdit, {restaurantId})}>Edit</Link>
                    <button className="button delete" onClick={deleteButtonClickHandler}>Delete</button>
                </div>
                )}
                </div>

            {userId !== restaurant._ownerId && (
                <article className="create-comment-article">
                    <div className="create-comment">
                    <label>Add new comment:</label>
                    <form onSubmit={onSubmit}>
                        <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment..."></textarea> <br />
                        <input className="button comment" type="submit" value="Add Comment" />
                    </form>
                    </div>
                    <div className="cube">
                        <Cube />
                    </div>
                </article>
            )}
        </section>
    </>
  );
};

export default RestaurantDetails;
