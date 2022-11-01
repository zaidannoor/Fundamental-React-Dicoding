import React, { useEffect, useState } from 'react';
import {
    getArchivedNotes,
    deleteNote,
    unarchiveNote,
  } from '../utils/network-data';

import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import loading from '../img/loading-gif.gif';
import LocaleContext from '../context/LocaleContext';

function ArchivePage(){
    const { locale } = React.useContext(LocaleContext);
    const [notes,setNotes] = useState(null);
    const [keyword,setKeyword] = useState('');
    const [load, setLoad] = useState(true);
    let filteredNote = ''

    /* Inisialisasi nilai Notes menggunakan react effect*/
    useEffect(() => {
        getArchivedNotes().then(({ data }) => {
          setNotes(data);
          setLoad(false)
        });
    }, []);

    async function onDeleteHandler(id) {
        const isConfirm = window.confirm("Are you sure want to DELETE this note ?");
        if (isConfirm){
            setLoad(true)
            await deleteNote(id);   
            const {data} = await getArchivedNotes()
            setNotes(data)
            setLoad(false)
        } 
    }

    async function unarchiveHandler(id) {
        const isConfirm = window.confirm("Are you sure want to ARCHIVE this note ?");
        if (isConfirm){
            setLoad(true)
            await unarchiveNote(id);
            const {data} = await getArchivedNotes();
            setNotes(data);
            setLoad(false)
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
            <h2>{locale === 'id' ? 'Note terarsip' : 'Archived Notes'}</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            {load  
                ? <img src={loading} alt='loading'/>
                : <NoteList 
                notes={filteredNote} 
                onDelete={onDeleteHandler} 
                unArchive={unarchiveHandler}
              />

            }
              
            {console.log(notes)}
        </section>
    )
}



export default ArchivePage;