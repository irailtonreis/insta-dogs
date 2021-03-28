import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css';
import PropTypes from 'prop-types';



const FeedPhotos = ({ page, userSearch, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  console.log("usrr" ,userSearch)
  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, options } = PHOTOS_GET({ page, total, user: userSearch});
      const { response, json } = await request(url, options);
      console.log('Request:', json);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, userSearch, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

FeedPhotos.defaultProps = {
  userSearch: 0,
};

FeedPhotos.propTypes = {
  userSearch: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default FeedPhotos;
