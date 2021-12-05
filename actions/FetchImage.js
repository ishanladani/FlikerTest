import {FLICKER_API_KEY, FETCHING_IMAGE, FETCH_SUCCESS, FETCH_FAILUR} from '../Const';
import axios from 'axios';

export function  fetchImages(textData)  {
   console.log('Funsction Start', textData);

    const obj = {
        method: 'flickr.photos.search',
        api_key: FLICKER_API_KEY,
        text: textData, // Search Text
        sort: 'interestingness-desc',
        license: '4',
        extras: 'ishanladani16',
        format: 'json',
        nojsoncallback: 1,
      };
    
    const parameters = new URLSearchParams(obj);
    
    const url = `https://api.flickr.com/services/rest/?${parameters}`;

    return (dispatch) => {
        dispatch(getImages())
        axios.get(url)
            .then((response) => {
                return dispatch(getToDosSuccess(response.data.photos.photo));
            })
            .catch(err =>  {
                console.log(err);
                dispatch(getToDosFailure(err))
                }
            )
    }



    function getImages() {

        return {
            type: FETCHING_IMAGE
        }
    }

    function getToDosSuccess(data) {

        return {
            type: FETCH_SUCCESS,
            data
            
        }
    }

    function getToDosFailure() {
        return {
            type: FETCH_FAILUR
        }
    }
}
  