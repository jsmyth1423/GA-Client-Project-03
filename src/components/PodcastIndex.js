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

  return (
    <>
      <section className='hero is-fullheight-with-navbar' id='index-container'>
        <h1 className='title'></h1>
        {podcasts ? (
          <div className='container is-dark'>
            <div className='columns is-multiline' id='podcast-inner'>
              {podcasts.map((podcast) => (
                <div
                  key={podcast._id}
                  className='column card  is-one-fifth '
                  id='podcast-card'
                >
                  <Link to={`/podcasts/${podcast._id}`}>
                    <h2 className='card-header'>{podcast.title}</h2>
                    <div className='card-image'>
                      <figure className='image is-1by1'>
                        <img src={podcast.img} alt={podcast.title} />
                      </figure>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>loading...</p>
        )}
      </section>
    </>
  );
};

export default PodcastIndex;
