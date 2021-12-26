import * as React from "react";
import useSWR, {useSWRConfig} from 'swr';
import {useDebounce} from 'use-debounce';
import {Grid} from '@mui/material';
import Header from '../components/Header';
import ImageDisplay from '../components/ImageDisplay';
import uploadImage from './activity/upload-image';
import {fetcher} from './api/utils';

const API_ROUTE = '/api/images'

export default function Home() {
  const [searchInput, setSearchInput] = React.useState('');
  const [pattern] = useDebounce(searchInput, 500)
  const [endpoint, setEndpoint] = React.useState(API_ROUTE);
  const {mutate} = useSWRConfig();
  const {data, error} = useSWR(endpoint, fetcher);

  React.useEffect(() => {
    if (pattern) {
      setEndpoint(`${API_ROUTE}?name=${pattern}`)
    } else {
      setEndpoint(API_ROUTE)
    }
  }, [pattern])

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value)
  };

  const handleImageUpload = async (event) => {
    await uploadImage(event.target.files[0])
    mutate(API_ROUTE)
  }

  return (
    <Grid container>
      <Header 
        searchInput={searchInput}
        handleSearchInputChange={handleSearchInputChange}
        handleImageUpload={handleImageUpload}
      />
      <ImageDisplay data={data} error={error} />
    </Grid>
  )
}
