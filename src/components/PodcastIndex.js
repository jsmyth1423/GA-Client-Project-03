import React from 'react';
import { Link } from 'react-router-dom';
import { getAllPodcasts } from '../api/podcasts';

const PodcastIndex = () => {
  const [podcasts, setPodcasts] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const podcasts = await getAllPodcasts();
      setPodcasts(podcasts);
    };
    getData();
  }, []);

  console.log('Podcasts are', podcasts);

  return (
    <>
      <h1 className='title'>Podcasts:</h1>
      {podcasts ? (
        <div className="container">
          <div className="columns">
            {podcasts.map((podcast) => (
              <div key={podcast._id} className='column card'>
                <Link to={`/podcasts/${podcast._id}`}>
                  <h2 className='card-header'>Title: {podcast.title}</h2>
                  <div className="card-image">
                    <figure className='image'>
                      <img src={podcast.img} alt={podcast.title} />
                    </figure>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div >
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default PodcastIndex;