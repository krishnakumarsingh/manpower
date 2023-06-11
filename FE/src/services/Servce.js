import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/employees';
const USER_API_BASE_URL = 'http://localhost:8080/api/fireextinguishertracker';

class Service {
    constructor() {
        this.jsonFormat = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
    }
    
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    getFireExtinguisherTracker(){
        return axios.get(USER_API_BASE_URL);
    }
    setFireExtinguisherTracker(formData){
        return axios.post(USER_API_BASE_URL, formData, this.jsonFormat);
    }
    setEmployees(formData){
        return axios.post(EMPLOYEE_API_BASE_URL, formData, this.jsonFormat);
    }
}
const service = new Service()
export default service;