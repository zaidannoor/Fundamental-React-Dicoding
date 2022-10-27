import React from 'react';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';

function AddPage(){
    const navigate = useNavigate();

    async function onAddNoteHandler(note) {
        const hasil = await addNote(note);
        console.log(hasil)
        navigate('/');
    }
    
    return (
        <section>
            <NoteInput addNote={onAddNoteHandler} />
        </section>
    )
}

export default AddPage;