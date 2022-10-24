import React from 'react';
import {
    getArchivedNotes,
    deleteNote,
    unarchiveNote,
    getFilteredArchivedNote
  } from '../utils/local-data';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            notes: getArchivedNotes(),
            keyword: ''
        }
    
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.unArchiveHandler = this.unArchiveHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }
   
    onDeleteHandler(id) {
        const isConfirm = window.confirm("Are you sure want to DELETE this note ?");
        if (isConfirm) deleteNote(id);

        // update the notes
        this.setState(() => {
            return {
                notes: getArchivedNotes(),
                keyword: ''
            }
        });
    }

    unArchiveHandler(id) {
        const isConfirm = window.confirm("Are you sure want to UNARCHIVE this note ?");
        if (isConfirm) unarchiveNote(id);
        
        // update the notes

        this.setState(() => {
            return {
                notes: getArchivedNotes(),
                keyword: ''
            }
        });
    }

    onKeywordChangeHandler(keyword) {
        this.setState({
          notes: getFilteredArchivedNote(keyword),
          keyword: keyword
        });
    }

    render() {
        return (
            <section className='note-app'>
                <h2>Archived Notes</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <NoteList 
                    notes={this.state.notes} 
                    onDelete={this.onDeleteHandler} 
                    unArchive={this.unArchiveHandler}
                />
            </section>
        )
    }
  }

export default ArchivePage;