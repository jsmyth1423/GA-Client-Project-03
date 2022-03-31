import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getLoggedInUserId } from '../lib/auth';

import {
  getPodcastById,
  deleteComment,
  createComment,
  deletePodcast,
} from '../api/podcasts';
import { updateUser, getUser } from '../api/auth';

const PodcastCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [podcast, setPodcast] = React.useState(null);
  const [commentValue, setCommentValue] = React.useState('');
  const [userLiked, setUserLiked] = React.useState(true);
  const userId = getLoggedInUserId();
  const [rating, setRating] = React.useState(5);
  const [userObject, setUserObject] = React.useState('');

  React.useEffect(() => {
    const getDataAndUpdate = async () => {
      try {
        const podcast = await getPodcastById(id);
        setPodcast(podcast);
        const user = await getUser(userId);
        setUserLiked(user.likedPodcasts.some((p) => p._id == podcast._id));
        console.log(user.username);
        setUserObject(user);
      } catch (error) {
        console.error(error);
      }
    };
    getDataAndUpdate();
  }, []);

  const handleCommentChange = (e) => {
    setCommentValue(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const data = await createComment(id, {
      text: commentValue,
      rating: rating,
    });
    setCommentValue('');
    setPodcast(data);
  };

  const handleCommentDelete = async (commentId) => {
    const data = await deleteComment(id, commentId);
    setPodcast(data);
  };

  const handlePodcastDelete = async (podcastId) => {
    try {
      if (
        confirm(
          'Are you sure you want to delete the podcast? Press OK to continue!'
        )
      ) {
        // text = 'Podcast Deleted';
        await deletePodcast(podcastId);
        navigate('/podcasts');
      }
    } catch (err) {
      console.log(err);
    }
  };

  function handleIsActive(event) {
    event.target.parentElement.parentElement.parentElement.parentElement.classList.toggle(
      'is-active'
    );
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle(
      'is-active'
    );
    event.target.parentElement.parentElement.parentElement.classList.toggle(
      'is-active'
    );
    event.target.parentElement.parentElement.classList.toggle('is-active');
  }

  const handleLikePodcast = async () => {
    try {
      const userId = await getLoggedInUserId();
      const user = await updateUser(userId, id);
      const userHasLiked = user.data.likedPodcasts.includes(id);
      setUserLiked(userHasLiked);
    } catch (err) {
      console.log(err);
    }
  };

  function handleSelect(event) {
    setRating(event.target.innerText);
  }

  if (!podcast) {
    return (
    <p>loading...</p>
    )
  }
  return (
    <div className='container mt-6'>
      <div className='columns'>
        <div className='column is-half'>
          <figure className='image'>
            <img src={podcast.img} alt={podcast.title} />
          </figure>
          {getLoggedInUserId() === podcast.createdBy && (
            <button
              type='button'
              className='button is-danger mt-4'
              onClick={() => handlePodcastDelete(podcast._id)}
            >
              <p>Delete Podcast</p>
              <span class='icon'>
                <i class='icon fas fa-ban'></i>
              </span>
            </button>
          )}
          {getLoggedInUserId() === podcast.createdBy && (
            <button
              type='button'
              className='button is-warning m-4'
              onClick={() => navigate(`/podcasts/${podcast._id}/edit`)}
            >
              <p>Update Podcast</p>
              <span class='icon'>
                <i class='icon fas fa-info-circle'></i>
              </span>
            </button>
          )}

          {getLoggedInUserId() && (
            <button
              type='button'
              className={`button  ${userLiked ? 'is-danger' : 'is-success'
                } mt-4`}
              onClick={handleLikePodcast}
            >
              {userLiked ? 'Unlike' : 'Like'}
            </button>
          )}
        </div>
        <div className='column is-half'>
          <div className='card'>
            <h2 className='title'>{podcast.title}</h2>
            <p>Genre: {podcast.genre}</p>
            <p>
              Hosted by: {podcast.host} and joined by {podcast.guests}{' '}
            </p>
            <p>{podcast.description}</p>
          </div>

          {getLoggedInUserId() && (
            <form onSubmit={handleCommentSubmit}>
              <div className='form mt-4'>
                <label htmlFor='comment' className='label'>
                  Post a comment
                </label>
                <div className='control'>
                  <textarea
                    type='text'
                    className='input'
                    value={commentValue}
                    onChange={handleCommentChange}
                  />
                </div>

                <div className='dropdown' onClick={handleIsActive}>
                  <div className='dropdown-trigger'>
                    <div
                      className='button'
                      aria-haspopup='true'
                      aria-controls='dropdown-menu3'
                    >
                      <span>Select Rating: {rating}</span>
                    </div>
                  </div>
                  <div
                    className='dropdown-menu'
                    id='dropdown-menu3'
                    role='menu'
                  >
                    <div
                      className='dropdown-content'
                      name='selectList'
                      id='selectList'
                      onClick={handleSelect}
                    >
                      <a className='dropdown-item'>1</a>
                      <a className='dropdown-item' id='business'>
                        2
                      </a>
                      <a className='dropdown-item' id='comedy'>
                        3
                      </a>
                      <a className='dropdown-item' id='crime'>
                        4
                      </a>
                      <a className='dropdown-item' id='culture'>
                        5
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type='submit'
                className='button is-info mt-4'
                value='Submit Comment'
              >
                <p>Submit Comment</p>
                <span class='icon'>
                  <i class='fas fa-reply'></i>
                </span>
              </button>
            </form>
          )}

          <div>
            {podcast.comments.map((comment) => {
              return (
                <div key={comment._id}>
                  <p>{userObject.username} commented:</p>
                  <p>{comment.text}</p>
                  <p>{comment.rating}</p>
                  {getLoggedInUserId() === comment.createdBy && (
                    <>
                      <button
                        type='button'
                        className='button is-danger'
                        onClick={() => handleCommentDelete(comment._id)}
                      >
                        <p>Remove comment</p>
                        <span class='icon'>
                          <i class='icon fas fa-ban'></i>
                        </span>
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
