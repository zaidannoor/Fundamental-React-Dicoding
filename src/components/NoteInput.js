import React from 'react';
import PropTypes from 'prop-types';

class NoteInput extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            title: '',
            body:''
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
          return {
            title: event.target.value,
          }
        });
      }
    
    onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render(){
        return(
            
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <input type="text" className='note-input__title' placeholder="Add title here..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <textarea type="text" className='note-input__body' placeholder="Add your note here..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                <button type="submit">Submit</button>
            </form>
            
                
           
        )
    }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;