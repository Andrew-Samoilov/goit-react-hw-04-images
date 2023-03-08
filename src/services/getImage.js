const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '25686196-d3e700a683e9eec533ed2046f'

export const getImage = (searchText, page) => {
    // console.log(searchText, page);
    return fetch(`${BASE_URL}?key=${API_KEY}&page=${page}&q=${searchText}`)
};
