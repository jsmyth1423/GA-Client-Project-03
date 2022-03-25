import axios from 'axios';

export const getAllPodcasts = async () => {
  const options = {
    method: 'GET',
    url: '/api/podcasts'
  };

  const { data } = await axios.request(options);
  return data;
};

export const getPodcastById = async (id) => {
  const options = {
    method: 'GET',
    url: `/api/podcasts/${id}`
  };

  const { data } = await axios.request(options);
  return data;
};

export const createPodcast = async (podcast) => {
  const options = {
    method: 'POST',
    url: '/api/podcasts',
    data: podcast,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);
  return data;
};

export const updatePodcast = async (podcast, podcastId) => {
  const options = {
    method: 'PUT',
    url: `/api/podcasts/${podcastId}`,
    data: podcast,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };
  const { data } = await axios.request(options);
  return data;
};

export const createComment = async (podcastId, comment) => {
  const options = {
    method: 'POST',
    url: `/api/podcasts/${podcastId}/comments`,
    data: comment,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);
  return data;
};

export const deleteComment = async (podcastId, commentId) => {
  const options = {
    method: 'DELETE',
    url: `/api/podcasts/${podcastId}/comments/${commentId}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);
  return data;
};