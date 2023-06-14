import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/api/fireextinguishertracker';

class Service {
    constructor() {
        this.jsonFormat = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }

    getFireExtinguisherTracker() {
        return axios.get(USER_API_BASE_URL);
    }
    setFireExtinguisherTracker(formData) {
        return axios.post(USER_API_BASE_URL, formData, this.jsonFormat);
    }
    deleteFireExtinguisherTracker(formData) {
        return axios.delete(`${USER_API_BASE_URL}/1`, this.jsonFormat);
    }
}
const service = new Service()
export default service;