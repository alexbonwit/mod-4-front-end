import React from 'react';

class NotesDetail extends React.Component {

    
    render() {
        console.log("Detail props: ", this.props)
        return (
            <div>
                <h3>{this.props.selectedNote.title}</h3>
                <p>{this.props.selectedNote.body}</p>
            </div>
        )
    }
}

export default NotesDetail