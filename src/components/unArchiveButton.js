import React from 'react';
import PropTypes from 'prop-types';

function UnArchiveButton({ id, unArchive }) {
  return <button className='note-item__archive-button' onClick={() => unArchive(id)}>UnArchive</button>
}

UnArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  unArchive: PropTypes.func.isRequired
}

export default UnArchiveButton;