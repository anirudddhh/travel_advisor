import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
        const response = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEYS,
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            },
        });

        return response.data.data;
    } catch (error) {
        console.error('Error fetching places data:', error);
        throw error; 
    }
};
