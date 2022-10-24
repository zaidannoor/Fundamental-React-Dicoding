import React from 'react';
import PropTypes from 'prop-types';
import NoteItemTitle from './NoteItemTitle';
import NoteItemCreatedAt from './NoteItemCreatedAt';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import UnArchiveButton from './unArchiveButton';
function NoteItem({ title, id, createdAt,body,archived, onDelete, onArchive, unArchive }) {
    return (
        <div className="note-item">
            <div className='note-item__content'>
              <NoteItemTitle id={id} title={title} />
              <NoteItemCreatedAt createdAt={createdAt} />
              <NoteItemBody body={body} />
            </div>
            <div className='note-item__action'>
                  {
                      archived ?
                        <UnArchiveButton unArchive={unArchive} id={id} />
                      : <ArchiveButton onArchive={onArchive} id={id} />
                  }
                  <DeleteButton id={id} onDelete={onDelete}  />
            </div>     
        </div>
    );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  unArchive: PropTypes.func
};

export default NoteItem;