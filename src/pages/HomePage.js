
import React from 'react';
import {
    getActiveNotes,
    deleteNote,
    archiveNote,
    getFilteredActiveNote,
  } from '../utils/local-data';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            notes: getActiveNotes(),
            filteredNotes: '',
            keyword: ''

        }
    
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }
   
    onDeleteHandler(id) {
        const isConfirm = window.confirm("Are you sure want to DELETE this note ?");
        if (isConfirm) deleteNote(id);    

        // update the notes
        this.setState(() => {
            return {
                notes: getActiveNotes(),
                keyword: ''
            }
        
        });
        
    }

    onArchiveHandler(id) {
        const isConfirm = window.confirm("Are you sure want to ARCHIVE this note ?");
        if (isConfirm) archiveNote(id);
        
        // update the notes
        this.setState(() => {
            return {
                notes: getActiveNotes(),
                keyword: ''
            }
        });
    }

    onKeywordChangeHandler(keyword) {
        this.setState({
            notes: getFilteredActiveNote(keyword),
            keyword: keyword
        });
    }

    render() {
        return (
            <section className='note-app'>
                <h2>Active Notes</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <NoteList 
                    notes={this.state.notes} 
                    onDelete={this.onDeleteHandler} 
                    onArchive={this.onArchiveHandler}
                />
            </section>
        )
    }
  }

export default HomePage;