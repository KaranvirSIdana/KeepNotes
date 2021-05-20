import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const [isempty, setEmpty]=useState(true);

  function handleClick(){
    setEmpty(false);
  }


  // TO maintain the state of the Create Area
  const [note, setNote] = useState({
    title:"",
    content:""
  });


  function handleChange(event) {
    const {name,value} = event.target;

    // This is the part that updates the new state (it incorpoorates the if statement)
    setNote(prevNote => {
      return{
        ... prevNote,
        [name]: value
      };
    });

  }

  function submitNote(event){
    props.onAdd(note); //Passing the note to the onAdd function in app.js
    setNote({
      title:"",
      content:""
    });
    event.preventDefault(); //To prevent form from refresh {as whenever the form get submits the page refreshes}
  }

 

  return (
    <div>
      <form className="create-note">
      {!isempty &&
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={handleChange} 
          onClick = {handleClick}
          value={note.content}
          placeholder="Take a note..."
          rows={isempty ? 1 : 3}
        />
        <Zoom in ={!isempty}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

