import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function NoteItemTitle({ id,title }) {
    return (
      <Link to={`/notes/${id}`}><h3 className="note-item__title">{title}</h3></Link>
        
    );
}

NoteItemTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default NoteItemTitle;