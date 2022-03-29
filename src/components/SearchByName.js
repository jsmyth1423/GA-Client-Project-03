import React from "react";
import { getPodcastByName } from "../api/podcasts";
import { Link } from 'react-router-dom'



const SearchPodcast = ({ userSearches, searchByField }) => {
  const [podcast, setPodcast] = React.useState('');
  console.log(searchByField)
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getPodcastByName(userSearches, searchByField);
        console.log('This is DATAAA', data);
        setPodcast(data);
      } catch (err) {
        console.log('This is the error', err);
      }
    };
    getData();
  }, []);

  function filterPodcasts() {
    console.log('THIS IS THE PODCAST ARRAY', podcast);
    if (userSearches === null) {
      console.log('User search is null');
    } else {
      return podcast.filter((podcastItem) => {
        return podcastItem.title.toLowerCase().includes(userSearches);
      });
    }
  }

  return (
    // <section className='section'>
    //   <div className='container'>
    //     <div className='columns is-multiline'>
    <>
          {podcast.length === 0 ? (
            <>Loading...or no results</>
          ) : (
            filterPodcasts().map((podcast) => {
              console.log('This is podcast', podcast)
              return (
                <div>{podcast.title}</div>
                // <div key={podcast._id} className='column card'>
                //   <Link
                //     to={`/podcasts/${podcast._id}`}
                //     onClick={
                //       <Link
                //         to={`/podcast/${podcast._id}`}
                //         className='navbar-item'
                //       ></Link>
                //     }
                //   >
                //     <h2 className='card-header'>Title: {podcast.title}</h2>
                //     <div className='card-image'>
                //       <figure className='image'>
                //         <img src={podcast.img} alt={podcast.title} />
                //       </figure>
                //     </div>
                //   </Link>
                // </div>
              );
            })
          )}
      </>
    //     </div>
    //   </div>
    // </section>
  );
};

export default SearchPodcast