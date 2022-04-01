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
  const [average, setAverage]=React.useState()
  const [unrounded, setUnrounded]=React.useState(0)
  const [commentLength, setCommentLength] = React.useState(0)

  React.useEffect(() => {
    const getDataAndUpdate = async () => {
      try {
        let p = 0;
        const podcast = await getPodcastById(id);
        setPodcast(podcast);
        const arrayComments = podcast.comments
        arrayComments.map((item) =>{
          p = p+ item.rating
        })
        const thatNumber = p/podcast.comments.length
        const roundThatNumber = Math.round(thatNumber * 10) /10
        setAverage(roundThatNumber)
        const user = await getUser(userId);
        setUserLiked(user.likedPodcasts.some((p) => p._id == podcast._id));
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
    let i = 0;
    e.preventDefault();
    const data = await createComment(id, {
      text: commentValue,
      rating: rating,
    });
    const commentsArray = data.comments
    commentsArray.map((item)=>{
      i= i + item.rating
    })
    setCommentLength(commentsArray.length)
    const averageN = i/commentsArray.length
    setUnrounded(averageN)
    const roundNumber = Math.round(averageN * 10)/10;
    setAverage(roundNumber);
    setCommentValue('');
    setPodcast(data);
  };

  const handleCommentDelete = async (commentId) => {
    let y = 0;
    const data = await deleteComment(id, commentId);
    const newData = await getPodcastById(id)
    newData.comments.map((item) => {
      y = y + item.rating
    })
    const newAverage = y / newData.comments.length
    const roundedNewAverage = Math.round(newAverage * 10)/10
    setAverage(roundedNewAverage);
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
    setRating(event.target.value);
  }


  

  if (!podcast) {
    return (
      <p>loading...</p>
    );
  }
  return (
    <div className='container mt-6 podcastView'>
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
              <span className='icon'>
                <i className='icon fas fa-ban'></i>
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
              <span className='icon'>
                <i className='icon fas fa-info-circle'></i>
              </span>
            </button>
          )}

          {getLoggedInUserId() && (
            <button
              type='button'
              className={`button  ${
                userLiked ? 'is-danger' : 'is-success'
              } mt-4`}
              onClick={handleLikePodcast}
            >
              {userLiked ? 'Unlike 💔' : 'Like ❤️'}
            </button>
          )}
        </div>
        <div className='column is-half'>
          <div className='card podcastcard-wrapper'>
            <h2 className='title'>{podcast.title}</h2>
            <hr></hr>
            <h3 className='subtitle'>
              <b>Genre:</b> {podcast.genre}
            </h3>
            <p>
              <b>Average Rating:</b> {average}
            </p>
            <br></br>
            <p>
              <b>Hosted by:</b> {podcast.host} and joined by {podcast.guests}{' '}
            </p>
            <hr></hr>
            <p>
              <b>Description:</b> {podcast.description}
            </p>
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

                <div className='dropdown mt-2' onClick={handleIsActive}>
                  <div className='dropdown-trigger'>
                    <div
                      className='button'
                      aria-haspopup='true'
                      aria-controls='dropdown-menu3'
                    >
                      <span>Select Rating: {rating}</span>
                      <span class='icon is-small'>
                        <i class='fas fa-angle-down' aria-hidden='true'></i>
                      </span>
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
                      <button
                        className='dropdown-item star1'
                        type='button'
                        value='1'
                      >
                        1 ⭐
                      </button>
                      <button
                        className='dropdown-item star2'
                        type='button'
                        value='2'
                      >
                        2 ⭐⭐
                      </button>
                      <button
                        className='dropdown-item star3'
                        type='button'
                        value='3'
                      >
                        3 ⭐⭐⭐
                      </button>
                      <button
                        className='dropdown-item star4'
                        type='button'
                        value='4'
                      >
                        4 ⭐⭐⭐⭐
                      </button>
                      <button
                        className='dropdown-item star5'
                        type='button'
                        value='5'
                      >
                        5 ⭐⭐⭐⭐⭐
                      </button>
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
                <span className='icon'>
                  <i className='fas fa-reply'></i>
                </span>
              </button>
            </form>
          )}

          <div>
            {podcast.comments.map((comment) => {
              return (
                <div key={comment._id}>
                  <div className='card m-2 comment-card-wrapper'>
                    <p>{userObject.username} commented:</p>
                    <hr></hr>
                    <div className='wrapThisText'>
                    <p className='fixBug'>
                      <b>{comment.text}</b>
                    </p>
                    </div>
                    <p>
                      <i>with a rating of {comment.rating}/5</i>
                    </p>
                  {getLoggedInUserId() === comment.createdBy && (
                    <>
                      <button
                        type='button'
                        className='button is-danger isRight'
                        onClick={() => handleCommentDelete(comment._id)}
                      >
                        <p>Remove comment</p>
                        <span className='icon'>
                          <i className='icon fas fa-ban'></i>
                        </span>
                      </button>
                    </>
                  )}
                  </div>
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
