import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';

function NoteDetail({ title, createdAt,body}) {
    return (
    <div className="note-detail">
        <h3 className='note-detail__title'>{title}</h3>
        <p className='note-detail__createdAt'>{showFormattedDate(createdAt)}</p>
        <p className='note-detail__body'>{body}</p>
    </div>
    );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteDetail;