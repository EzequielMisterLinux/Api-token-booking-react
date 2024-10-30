// api/LoginServices.js
import axios from "axios";

let url = "https://apibookingsaccomodations-production.up.railway.app/api/V1/login";

const UserLogin = async (email, password) => {
    try {
        const response = await axios.post(url, {
            email, 
            password
        });
        return response.data; 
    } catch (error) {
        console.error(error);
        
    }
};



export default UserLogin