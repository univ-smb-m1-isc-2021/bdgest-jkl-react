import React, {useState} from 'react';
import AlbumCard from './AlbumCard';
import '../css/AlbumList.css'
import { getAllAlbums, getCollection } from '../service/BDGestService';
import SearchIcon from '@mui/icons-material/Search';
import LoadingScreen from './LoadingScreen';


function useFetchData() {
  let [loading, setLoading] = useState([]);
  const [data, setData] = useState([]);

  React.useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      let user = sessionStorage.getItem('user')
      let id = JSON.parse(user)["id"]
      getCollection(id).then(data => {
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

export default function CollectionList() {
  const { loading, data } = useFetchData();
  ////TEST RECHERCHE///////
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(datas);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  console.log(searchTerm);

  ///////AFFICHAGE RESULTAT/////////////////
  if (loading) {
    return (
      <>
          <LoadingScreen loading={loading} />
      </>
    );
  }

  if (data.length == 0) {
    return (
      <>
        <div class="mr-5 control has-icons-right" id='searchBar'>
          <input class="input is-medium" type="text" placeholder="Chercher un album" onChange={handleSearchTerm} />

          <span class="icon is-right">
            <SearchIcon style={{ trasform: "rotate(90deg)" }} />
          </span>
        </div>
        <p className='title'>Aucun albums dans la base ...</p>
      </>
    )
  }
  return (
    <>
      <div class="mr-5 control has-icons-right" id='searchBar'>
        <input class="input is-medium" type="text" placeholder="Chercher un album" onChange={handleSearchTerm} />

        <span class="icon is-right">
          <SearchIcon style={{ trasform: "rotate(90deg)" }} />
        </span>
      </div>
      <div className="albumList">
        {data.filter((val) => {
          return val.titre.toLowerCase().includes(searchTerm.toLowerCase());
        }).map((val) => {
          return <AlbumCard key={val.id}
            album={val}
          />
        })}
      </div>
    </>
  );
}