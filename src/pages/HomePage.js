import React, { useEffect, useState } from 'react';
import {
    getActiveNotes,
    deleteNote,
    archiveNote,
  } from '../utils/network-data';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import loading from '../img/loading-gif.gif';
import LocaleContext from '../context/LocaleContext';

function HomePage(){
    const { locale } = React.useContext(LocaleContext);
    const [notes,setNotes] = useState(null)
    const [keyword,setKeyword] = useState('')
    const [load, setLoad] = useState(true);
    let filteredNote = '';

    /* Inisialisasi nilai Notes menggunakan react effect*/
    useEffect(() => {
        getActiveNotes().then(({ data }) => {
          setNotes(data);
          setLoad(false)
        });
    }, []);

    async function onDeleteHandler(id) {
        const isConfirm = window.confirm("Are you sure want to DELETE this note ?");
        if (isConfirm){
          setLoad(true)
          await deleteNote(id);
          const {data} = await getActiveNotes()
          setNotes(data)
          setLoad(false)
        } 
    }   

    async function onArchiveHandler(id) {
        const isConfirm = window.confirm("Are you sure want to ARCHIVE this note ?");
        if (isConfirm){
          setLoad(true);
          await archiveNote(id);
          const {data} = await getActiveNotes();
          setNotes(data);
          setLoad(false);
        } 
    }

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
    }

    if(!load){
        filteredNote = notes.filter((note) => {
            return note.title.toLowerCase().includes(keyword.toLowerCase());  
        })
    }
    
    
    

    return (
        <section className='note-app'>
            <h2>{locale === 'id' ? 'Note Aktif' : 'Active Notes'}</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            {load
                ? 
                <img src={loading} alt='loading'/>
                : <NoteList 
                notes={filteredNote} 
                onDelete={onDeleteHandler} 
                onArchive={onArchiveHandler}
                />   
            }
        </section>
    )
}

export default HomePage;