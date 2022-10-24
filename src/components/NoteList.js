import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

function NoteList({ notes, onDelete, onArchive, unArchive}) {
  return (
    <div className="notes-list">
      {
        notes.length > 0 ?
            notes.map((note) => (
            <NoteItem 
                    key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    unArchive={unArchive}
                    {...note} 
            />
            ))
            : <div className='notes-list-empty'>
                <p>Note list is empty</p>
              </div>
      }
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  unArchive: PropTypes.func,
}

export default NoteList;