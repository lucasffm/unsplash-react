import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 12a032e46bdfd1e12becf475329e9a798b36f12ccb7fb3bae5b05857219281d5'
  }
});
