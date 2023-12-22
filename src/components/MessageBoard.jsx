import { useState } from "react";

function MessageBoard() {
  const [msgText, setMsgText] = useState("");
  const [msg, setMsg] = useState([]);

  const addMsg = (event) => {
    event.preventDefault();
    const newMsgList = [...msg];
    newMsgList.push(msgText);
    setMsg(newMsgList);
  };

  const deleteMsg = (msgIndex) => {
    const newMsgList = [...msg];
    newMsgList.splice(msgIndex, 1);
    setMsg(newMsgList);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => {
              setMsgText(event.target.value);
            }}
            value={msgText}
          />
        </label>
        <button className="submit-message-button" onClick={addMsg}>
          Submit
        </button>
      </div>
      <div className="board">
        {msg.map((item, index) => {
          return (
            <div className="message">
              <h1 className="message">
                {item}
                <button
                  className="delete-button"
                  onClick={() => {
                    deleteMsg(index);
                  }}
                >
                  x
                </button>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
