import axios from "axios";

export const getBooks = async (token) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        
        const response = await axios.get("https://apibookingsaccomodations-production.up.railway.app/api/V1/bookings", config);

        return response.data;
    } catch (error) {
        console.error("Error al obtener los libros:", error);
    }
};
