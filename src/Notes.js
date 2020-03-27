import React from 'react';
import NotesDetail from './NotesDetail';
import NotesList from './NotesList';

class Notes extends React.Component {

    constructor(){
        super()
        this.state = {
            notes: [],
            selectedNote: {}
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/notes')
        .then(resp => resp.json())
        .then(notesData => {
            this.setState({
                notes: notesData
            })
        })
    }

    handleClick = (event) => {
        if (event.target.dataset.id) {
            fetch(`http://localhost:3000/notes/${event.target.dataset.id}`)
            .then(resp => resp.json())
            .then(noteData => {
                this.setState({
                    selectedNote: noteData
                })
            })
        }
    }

    render() {
        return(
            <div>  
                <NotesList notes={this.state.notes} handleClick={this.handleClick}/>
                <NotesDetail selectedNote={this.state.selectedNote}/>
            </div>
        )}
}

export default Notes