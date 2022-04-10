import React from 'react';
import '../css/AlbumList.css'
import { getAllAlbums, getAllAuteurs } from '../service/BDGestService';
import SearchIcon from '@mui/icons-material/Search';
import AuteurCard from './AuteurCard';


function useFetchData(){
  const [loading, setLoading] = React.useState([]);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    getAllAuteurs().then(data => {
      setData(data);
      setLoading(false);
    }).catch(error => {
      console.log(error);
      setLoading(false);
    });
  },[]);

  return { loading, data };
}



export default function AuteurList() {
const{loading, data} = useFetchData();
const [datas, setDatas] = React.useState([]);
const [searchTerm, setSearchTerm] = React.useState("");

const handleSearchTerm = (e) => {
  let value = e.target.value;
  setSearchTerm(value);
};


if( loading ){
  return (
    <>
      <div class="mr-5 control has-icons-right" id='searchBar'>
                          <input class="input is-medium" type="text" placeholder="Chercher un auteur" onChange={handleSearchTerm} />

                          <span class="icon is-right">
                              <SearchIcon style={{trasform:"rotate(90deg)"}}/>
                          </span>
                      </div>
      <p className='title'>Loading...</p>
    </>
  );
}

if(data.length==0){
  return(
    <>
      <div class="mr-5 control has-icons-right" id='searchBar'>
                          <input class="input is-medium" type="text" placeholder="Chercher un album" onChange={handleSearchTerm} />

                          <span class="icon is-right">
                              <SearchIcon style={{trasform:"rotate(90deg)"}}/>
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
                                    <SearchIcon style={{trasform:"rotate(90deg)"}}/>
                                </span>
                            </div>
        <div className="albumList">
                {data.filter((val )=>{
      return val.nom.toLowerCase().includes(searchTerm.toLowerCase());
    }).map((val)=>{
                    return  <AuteurCard key={val.id}
                                auteur={val}
                                />
                })}
        </div>
    </>
  );
  
}