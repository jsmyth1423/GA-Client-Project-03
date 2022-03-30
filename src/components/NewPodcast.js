import React from 'react';
import { createPodcast } from '../api/podcasts';
import { useNavigate } from 'react-router-dom';

function PodcastNew() {
  const navigate = useNavigate();
  const [podcast, setPodcast] = React.useState({
    title: '',
    description: '',
    year: '',
    img: '',
    duration: '',
    host: '',
    guests: '',
    genre: '',
  });

  function handleChange(event) {
    setPodcast({ ...podcast, [event.target.name]: event.target.value });
  }
  function handleSelect(event) {
    setPodcast({
      ...podcast,
      [event.target.selectedOptions]: event.target.selectedOptions.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const getData = async () => {
      try {
        await createPodcast(podcast);
        navigate('/podcasts');
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }

  return (
    <section>
      <div className='container'>
        <div className='columns'>
          <form
            className='column is-half is-offset-one-quarter box'
            onSubmit={handleSubmit}
          >
            <div className='field'>
              <label className='label'>Title*</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Podcast Title'
                  name='title'
                  onChange={handleChange}
                  value={podcast.title}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Description*</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Description'
                  name='description'
                  onChange={handleChange}
                  value={podcast.description}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Release Year*</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Year'
                  name='year'
                  onChange={handleChange}
                  value={podcast.year}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Image Link*</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Image link'
                  name='img'
                  onChange={handleChange}
                  value={podcast.img}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Duration (min)</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Duration'
                  name='duration'
                  onChange={handleChange}
                  value={podcast.duration}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Host</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Host'
                  name='host'
                  onChange={handleChange}
                  value={podcast.host}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Guest(s)</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Guest(s)'
                  name='guests'
                  onChange={handleChange}
                  value={podcast.guests}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Genre</label>
              <div className='control'>
                <div className='select'>
                  <select value={podcast.genre}>
                    <option value='arts'>Arts &amp; Entertainment</option>
                    <option value='business'>Business &amp; Investment</option>
                    <option value='comedy'>Comedy</option>
                    <option value='crime'>Crime</option>
                    <option value='culture' onChange={handleSelect}>
                      Culture
                    </option>
                    <option value='environmentScience'>
                      Environment/Science
                    </option>
                    <option value='food'>Food &amp; Drink</option>
                    <option value='health'>Health</option>
                    <option value='miscellaneous'>Miscellaneous</option>
                    <option value='newsAnCurrentAffairs'>
                      News &amp; Current Affairs
                    </option>
                    <option value='politics'>Politics</option>
                    <option value='sports'>Sports</option>
                    <option value='technology'>Technology</option>
                    <option value='travel'>Travel</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='field'>
              <button
                type='submit'
                className='button is-danger is-fullwidth'
                onSubmit={handleSubmit}
              >
                Make my Podcast!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PodcastNew;
