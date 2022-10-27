import React, { useEffect, useState } from 'react';
import {
    getActiveNotes,
    deleteNote,
    archiveNote,
  } from '../utils/network-data';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import loading from '../img/loading-gif.gif';

function HomePage(){
    const [notes,setNotes] = useState(null)
    const [keyword,setKeyword] = useState('')
    /* Inisialisasi nilai Notes menggunakan react effect*/
    useEffect(() => {
        getActiveNotes().then(({ data }) => {
          setNotes(data);
        });
    }, []);

    async function onDeleteHandler(id) {
        const isConfirm = window.confirm("Are you sure want to DELETE this note ?");
        if (isConfirm) await deleteNote(id);    
        const {data} = await getActiveNotes()
        setNotes(data)
    }

    async function onArchiveHandler(id) {
        const isConfirm = window.confirm("Are you sure want to ARCHIVE this note ?");
        if (isConfirm) await archiveNote(id);
        const {data} = await getActiveNotes();
        setNotes(data);
    }

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
    }

    return (
        <section className='note-app'>
            <h2>Active Notes</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            {notes  
                ? <NoteList 
                    notes={notes} 
                    onDelete={onDeleteHandler} 
                    onArchive={onArchiveHandler}
                  />
                : <img src={loading} alt='loading'/>
            }
              
            {console.log(notes)}
        </section>
    )
}

export default HomePage;