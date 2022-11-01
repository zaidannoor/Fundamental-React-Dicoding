import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/network-data';
import NoteDetail from '../components/NoteDetail';
import NotFoundPage from '../pages/NotFoundPage';
import PropTypes from 'prop-types';
import loading from '../img/loading-gif.gif';

function DetailPage(){
  const [notes,setNotes] = useState(null);
  const [load, setLoad] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNotes(data);
      setLoad(false)
    });
  }, []);


  if(load){
    return <img src={loading} alt='loading'/>
  }
  else{
    if(notes){
      return (
        <section>
          <NoteDetail {...notes} />
        </section>
      );
    }
    else{
      return <NotFoundPage />
    }
  }
}

DetailPage.propType = {
  id: PropTypes.string.isRequired
}

 
export default DetailPage;