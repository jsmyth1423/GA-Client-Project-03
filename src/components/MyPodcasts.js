import React from 'react';
import { Link } from 'react-router-dom';
import { getLoggedInUserId } from '../lib/auth';
import { getUser } from '../api/auth';

const MyPodcasts = () => {
  const [userObject, setUserObject] = React.useState(null);
  const [likedPodcastsArray, setLikedPodcastsArray] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const userId = getLoggedInUserId();
      const userObject = await getUser(userId);
      setUserObject(userObject);
      const likedPodcastsArray = userObject.likedPodcasts;
      setLikedPodcastsArray(likedPodcastsArray);
    };
    getData();
  }, []);


  if (!userObject) {
    return <p>loading...</p>;
  }
  return (
    <>
      <section className='hero' id='mypodcasts-wrapper'>
        <section className='addAnImage'>
          <h1 className='title has-text-centered welcome-msg'>Hello {userObject.username}, welcome to your liked podcasts!</h1>
          <div className='container is-dark mb-6'>
            <div className='columns is-multiline' >
              {likedPodcastsArray.map((item) => (
                <div
                  key={item._id}
                  className='column card m-4  is-one-fifth '
                >
                  <Link to={`/podcasts/${item._id}`}>
                    <h2 className='card-header'>{item.title}</h2>
                    <div className='card-image'>
                      <figure className='image is-1by1'>
                        <img src={item.img} alt={item.title} />
                      </figure>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>



  );
};


export default MyPodcasts;