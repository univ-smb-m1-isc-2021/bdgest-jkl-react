import React from 'react';
import SerieCard from './SerieCard';
import { getAllSeries } from '../service/BDGestService';
import SearchIcon from '@mui/icons-material/Search';
import LoadingScreen from './LoadingScreen';


function useFetchData() {
  const [loading, setLoading] = React.useState([]);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
      getAllSeries().then(data => {
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



export default function SerieList(props) {
  const { loading, data } = useFetchData();
  const [datas, setDatas] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

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
        <p className='title'>Aucune serie dans la base ...</p>
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
      <div className="serieList">
        {data.filter((val) => {
          return val.titre.toLowerCase().includes(searchTerm.toLowerCase());
        }).map((val) => {
          return <SerieCard key={val.id}
            serie={val}
          />
        })}
      </div>
    </>
  );


}