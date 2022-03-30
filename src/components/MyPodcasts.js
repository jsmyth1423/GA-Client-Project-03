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
      <h1 className='title has-text-centered'>Hello {userObject.username} welcome to your page</h1>
      <section>
        <div className='container is-dark'>
          <div className='columns is-multiline' >
            <h2>Here are your liked Podcasts:</h2>
            {likedPodcastsArray.map((item) => (
              <div
                key={item._id}
                className='column card m-4  is-one-fifth '
              >
                <Link to={`/podcasts/${item._id}`}>
                  <h2 className='card-header'>{item.title}</h2>
                  <div className='card-image'>
                    <figure className='image'>
                      <img src={item.img} alt={item.title} />
                    </figure>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>



  );
};


export default MyPodcasts;