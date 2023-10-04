import axios from "axios"

export const fetchPictures = async (q, page = 1) => {
    const { data } = await axios.get(`https://pixabay.com/api/?q=${q}&page=${page}&key=38922670-691cd2065c98d9555aa737c91&image_type=photo&orientation=horizontal&per_page=12`);
    console.log(q)
    return data;
}