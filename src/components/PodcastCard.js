import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getLoggedInUserId } from '../lib/auth';

import { getPodcastById, deleteComment, createComment, deletePodcast } from '../api/podcasts';
import { updateUser, getUser } from '../api/auth';

const PodcastCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [podcast, setPodcast] = React.useState(null);
  const [commentValue, setCommentValue] = React.useState('');
  const [userLiked, setUserLiked] = React.useState(false);

  // const like = (
  //   <button
  //     type='button'
  //     className='button is-success mt-4'
  //     onClick={handleLikePodcast}
  //   >
  //     Like 
  //   </button>
  // );
  // const unlike = (
  //   <button
  //     type='button'
  //     className='button is-danger mt-4'
  //     onClick={handleLikePodcast}
  //   >
  //     Unlike
  //   </button>
  // );
  React.useEffect(() => {
    const setLikeOnRefresh = async () => {
      try {
        const userId = await getLoggedInUserId();
        const getUserInfo = await getUser(userId);
        const likedPodcast = getUserInfo.likedPodcasts;
        likedPodcast.map((item) => {
          if (item._id == id) {
            setUserLiked(true);
            
          } else {
            setUserLiked(false);
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    setLikeOnRefresh();
  }, []);

  React.useEffect(() => {
    const getData = async () => {
      const podcast = await getPodcastById(id);
      setPodcast(podcast);
    };
    getData();
  }, []);

  const handleCommentChange = (e) => {
    setCommentValue(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const data = await createComment(id, { text: commentValue, rating: 3 });
    setCommentValue('');
    setPodcast(data);
  };

  const handleCommentDelete = async (commentId) => {
    const data = await deleteComment(id, commentId);
    setPodcast(data);
  };

  const handlePodcastDelete = async (podcastId) => {
    try {
      // window.confirm('Are you sure you want to delete this podcast? ')
      if (confirm('Are you sure you want to delete the podcast? Press OK to continue!')) {
        // text = 'Podcast Deleted';
        await deletePodcast(podcastId);
        navigate('/podcasts');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLikePodcast = async () => {
    console.log('handleLikePodcast')
    try {
      const userId = await getLoggedInUserId();
      const user = await updateUser(userId, id);
      const userHasLiked = user.data.likedPodcasts.includes(id);
      console.log('user', user, id)
      console.log('userhasLiked', userHasLiked)
      if (userHasLiked) {
        setUserLiked(false);
      } else {
        setUserLiked(true);
      }
    } catch (err) {
      console.log(err);
    }
  };





  if (!podcast) {
    return <p>loading...</p>;
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
              Delete Podcast
            </button>
          )}
          {getLoggedInUserId() === podcast.createdBy && (
            <button
              type='button'
              className='button is-warning m-4'
              onClick={() => navigate(`/podcasts/${podcast._id}/edit`)}
            >
              Update Podcast
            </button>
          )}

          {getLoggedInUserId() &&
            
              <button
                type='button'
                className={`button  ${userLiked ? 'is-danger' : 'is-success'} mt-4`}
                onClick={handleLikePodcast}
              >
                {userLiked ? 'Unlike' : 'Like'}
              </button>
}

          
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
              </div>
              <input
                type='submit'
                className='button is-info mt-4'
                value='Submit'
              />
            </form>
          )}

          <div>
            {podcast.comments.map((comment) => {
              return (
                <div key={comment._id}>
                  <p>{comment.text}</p>
                  <p>{comment.rating}</p>
                  {getLoggedInUserId() === comment.createdBy && (
                    <button
                      type='button'
                      className='button is-danger'
                      onClick={() => handleCommentDelete(comment._id)}
                    >
                      Delete Comment
                    </button>
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