import axios from 'axios';

const Url = 'https://jsonplaceholder.typicode.com/';

export function getArticles() {
  const request = axios.get(`${Url}/posts`).then(response => response.data);
  return {
    type: 'Get_Artical',
    payload: request,
  };
}
