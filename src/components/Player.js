import React, { useContext, useState } from "react";
import { PlayersContext } from "../context/PlayersContext";
const Player = ({ player, id }) => {
  // state
  const [value, setValue] = useState("");
  const [isEditing, setEditing] = useState(false);
  // context
  const { deletePlayer, editPlayer } = useContext(PlayersContext);
  // functions
  const handleEdit = () => {
    let copy = value;
    editPlayer(id, copy);
    setValue("");
    setEditing(false);
  };
  const handleEnter = (e) => {
    if (e.charCode === 13 && value) {
      let copy = value;
      editPlayer(id, copy);
      setValue("");
      setEditing(false);
    }
  };
  return (
    <li>
      <div className="d-flex align-items-center justify-content-between">
        {isEditing ? (
          <input
            className="edit-player"
            type="text"
            defaultValue={player.name}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={handleEnter}
          />
        ) : (
          <div className="text-warning">{player.name}</div>
        )}

        <div className="d-flex align-items-center">
          {isEditing && (
            <i
              className="fa fa-floppy-o btn btn-transparent playerIcon"
              aria-hidden="true"
              onClick={handleEdit}
            />
          )}
          <i
            className={`fa ${
              isEditing ? "fa-times" : "fa-pencil"
            }  btn btn-transparent playerIcon`}
            aria-hidden="true"
            onClick={() => setEditing(!isEditing)}
          />
          <i
            className="fa fa-trash-o btn btn-transparent playerIcon"
            aria-hidden="true"
            onClick={() => {
              deletePlayer(id);
            }}
          />
        </div>
      </div>
    </li>
  );
};

export default Player;
