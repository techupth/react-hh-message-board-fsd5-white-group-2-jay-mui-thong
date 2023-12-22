import { useState } from "react";

function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");
  const [showMessage, setShowMessage] = useState([]);

  const addMessage = () => {
    const newShowMessage = [...showMessage];
    newShowMessage.push(messageInput);
    setShowMessage(newShowMessage);
  };

  const deleteMassage = (index) => {
    const prevShowMessage = [...showMessage];
    prevShowMessage.splice(index, 1);
    setShowMessage(prevShowMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => setMessageInput(event.target.value)}
            value={messageInput}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div class="board">
        {showMessage.map((value, index) => {
          return (
            <div key={index} className="message">
              <h1>{value}</h1>
              <button
                className="delete-button"
                onClick={() => deleteMassage(index)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
