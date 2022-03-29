import React from "react";
import { getPodcastByName } from "../api/podcasts";
import { Link } from 'react-router-dom'
const SearchPodcast = ({ userSearches }) => {


  const [podcast, setPodcast] = React.useState('')
  
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getPodcastByName(userSearches);
        console.log('This is data', data)
        setPodcast(data);
      } catch (err) {
        console.log('YOOOO', err);
      }
    };
    getData();
  }, []);



  function filterPodcasts(){
    if (userSearches === null){
      return podcast
    } else {
      return podcast.filter((podcastItem) => {
        console.log(podcastItem.title)
        return podcastItem.title.toLowerCase().includes(userSearches)
      })
    }
  }



  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {!podcast ? (
            <></>
          ) : (
            
            filterPodcasts().map((podcast) =>  {
              return (
                <div key={podcast._id} className='column card'>
                  <Link to={`/podcasts/${podcast._id}`}  onClick={<Link to={`/podcast/${podcast._id}`} className='navbar-item'></Link>}>
                    <h2 className='card-header'>Title: {podcast.title}</h2>
                    <div className='card-image'>
                      <figure className='image'>
                        <img src={podcast.img} alt={podcast.title} />
                      </figure>
                    </div>
                  </Link>
                </div>
              );
            }
            ))}
        </div>
      </div>
    </section>
  )

}

export default SearchPodcast