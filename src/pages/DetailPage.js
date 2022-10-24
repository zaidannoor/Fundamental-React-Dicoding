import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import NoteDetail from '../components/NoteDetail';
import NotFoundPage from '../pages/NotFoundPage';
import PropTypes from 'prop-types';

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      note: getNote(props.id)
    };
  }
 
  render() {
    if(this.state.note){
      return (
        <section>
          <NoteDetail {...this.state.note} />
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

 
export default DetailPageWrapper;