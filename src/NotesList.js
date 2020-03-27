import React from 'react';

class NotesList extends React.Component {

    renderList = () => {
        return this.props.notes.map(note => {
        return <h4 data-id={note.id}>{note.title}</h4>
        })
    }

    render() {
        return (
            <div onClick={(event) => this.props.handleClick(event)}>
                {this.renderList(this.props)}
            </div>
        )
    }
}

export default NotesList