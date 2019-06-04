import axios from 'axios';

const apiClient = axios.create({ 
  baseURL: 'http://localhost:3001/api/v1/'
});

export default { 
  studio: {
    getStudio(payload) { 
      return apiClient.get(`studios/${payload.id}`)
    }
  },
  klass: {
    getKlasses(payload) { 
      return apiClient.get(`studios/${payload.id}`)
    }
  }
}
