import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as restaurantService from "../../services/restaurantService";
import * as commentService from '../../services/commentService';

const RestaurantDetails = () => {
  const [restaurant, setRestaurant] = useState({});
  const [comments, setComments] = useState([]);
  const { restaurantId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    restaurantService.getOne(restaurantId)
        .then(setRestaurant);
    //dobre e tuk da si sloja oshte edin .then i posle .catch ako e greshno da navigira kum 404
        commentService.getAll()
            .then(setComments);
    }, [restaurantId]);

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
        const newComment = await commentService.create(
            restaurantId,
            formData.get('username'),
            formData.get('comment')
            )
            navigate(`/gallery/${_id}`);
    } catch(error) {
        console.log(error)
    }

    console.log(newComment);
    
  }

  return (
    <section>
        <h1>Restaurant Info</h1>

        <h2>{restaurant.title}</h2>
        <br />
        <p>{restaurant.chef}</p>
        <br />
        <p>{restaurant.category}</p>
        <br />
        <p>{restaurant.stars}</p>
        <br />
        <p>{restaurant.imageUrl}</p>
        <br />
        <p>{restaurant.email}</p>
        <br />
        <p>{restaurant.createdAt}</p>
        <br />
        <p>{restaurant.updatedAt}</p>
        <br />
        <p>{restaurant.description}</p>

        {/* Restaurants Commentary */}
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map(({username, text}) => (
                    <li>
                    <p>{username}: {text}</p>
                </li>
                ))}
                
            </ul>

            {comments.length === 0} {
                <p>No comments.</p>
            }
        </div>
        {/* Edit/Delete buttons (Only for creators) */}

        {/* <div>
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                </div> */}
        <article className="create-comment">
            <label>Add new comment:</label>
            <form onSubmit={addCommentHandler}>
                <input type="text" name="username" placeholder="username" />
                <textarea name="comment" placeholder="Comment..."></textarea>
            <input type="submit" value="Add Comment" />
            </form>
        </article>
    </section>
  );
};

export default RestaurantDetails;
