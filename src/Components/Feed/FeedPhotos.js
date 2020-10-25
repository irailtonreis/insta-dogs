import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';


const FeedPhotos = () => {
    const { data, error, loading, request } = useFetch()

    React.useEffect(() => {
       async function fetchPhotos() {
         const { url, options } = PHOTOS_GET({page: 1, total: 6, user: 0}) 
         const {response, json } = await request(url, options) 
         console.log(json)

       }    
       fetchPhotos()
      }, [request])
    return (
        <div>
            <FeedPhotosItem />
        </div>
    )
}

export default FeedPhotos
