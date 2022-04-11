import React from 'react';
import HeaderComponent from './HeaderComponent';
import AlbumCard from './AlbumCard';
import AlbumList from './AlbumList';
import Carousel, { CarouselItem } from './Carousel';
import LoadingScreen from './LoadingScreen';
import { getRandAlbums } from '../service/BDGestService';

function useFetchData() {
    let [loading, setLoading] = React.useState([]);
    const [data, setData] = React.useState([]);
    
  
    React.useEffect(() => {
      setLoading(true);
  
      const timer = setTimeout(() => {
        getRandAlbums(3).then(data => {
          setData(data);
          setLoading(false);
        }).catch(error => {
          console.log(error);
          setLoading(false);
        });
        clearTimeout(timer);
      }, 1000);
  
      
      
    }, []);
  
    return { loading, data };
  }

export default function HomePage(param) { 
    const { loading, data } = useFetchData();

    if (loading) {
        return (
          <>
              <LoadingScreen loading={loading} />
          </>
        );
      }
    return(
        <>
            <HeaderComponent/>
            <Carousel>
                    {data.map((val) => {
                return (<CarouselItem><AlbumCard key={val.id}  album={val}></AlbumCard></CarouselItem>)
                
                })}

            </Carousel>
            <AlbumList/>
        </>
    )
}