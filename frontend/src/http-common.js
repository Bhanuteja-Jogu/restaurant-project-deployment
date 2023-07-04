import axios from "axios";
export default axios.create({
    baseURL:"https://bhanuteja-restaurant-project-api.onrender.com",
    headers:{
        "Content-Type": "application/json"
    }
});