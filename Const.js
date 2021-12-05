export const FETCHING_IMAGE = "FETCHING_IMAGE";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILUR = "FETCH_FAILUR";
export const FLICKER_API_KEY = "8a64b5bbae9149a585b1fa167c1a3e40";
export const FLICKER_SECERT_KEY = "e1d9d54497410697";
export const getFlickrImageURL = (photo, size) => {
    let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${
    photo.secret
    }`;
    if (size) {
    // Configure image size
    url += `_${size}`;
    }
    url += '.jpg';
    return url;
};
