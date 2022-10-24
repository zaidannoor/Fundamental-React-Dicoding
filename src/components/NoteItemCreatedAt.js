import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';
function NoteItemCreatedAt({ createdAt }) {
    return (
        <h3 className="note-item__createdAt">{showFormattedDate(createdAt)}</h3>
    );
}

NoteItemCreatedAt.propTypes = {
  createdAt: PropTypes.string.isRequired,
};

export default NoteItemCreatedAt;