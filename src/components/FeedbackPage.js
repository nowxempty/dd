import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import '../styles/FeedbackPage.css';

const FeedbackPage = () => {
  const [solutions, setSolutions] = useState([]);
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [note, setNote] = useState('');
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    const fetchSolutions = () => {
        const exampleSolutions = [
            { id: 1, title: 'Solution 1', code: 'console.log("Hello, World!");' },
            { id: 2, title: 'Solution 2', code: 'function add(a, b) { return a + b; }' },
            { id: 3, title: 'Solution 3', code: 'const greet = (name) => "Hello, " + name + "!";' },
        ];
        setSolutions(exampleSolutions);
    };

    fetchSolutions();
  }, []);

  const addSticker = () => {
    setStickers([...stickers, { id: Date.now(), content: note, editing: false }]);
    setNote('');
  };

  const deleteSticker = (id) => {
    setStickers(stickers.filter(sticker => sticker.id !== id));
  };

  const startEditing = (id) => {
    setStickers(stickers.map(sticker => 
      sticker.id === id ? { ...sticker, editing: true } : sticker
    ));
  };

  const saveSticker = (id, newContent) => {
    setStickers(stickers.map(sticker => 
      sticker.id === id ? { ...sticker, content: newContent, editing: false } : sticker
    ));
  };

  return (
    <div className="feedback-page">
      <div className="solution-list-container">
        <ul className="solution-list">
          {solutions.map(solution => (
            <li key={solution.id} className="solution-item" onClick={() => setSelectedSolution(solution)}>
              {solution.title}
            </li>
          ))}
        </ul>
      </div>
      {selectedSolution && (
        <div className="selected-solution-container">
          <div className="selected-solution">
            <h3>{selectedSolution.title}</h3>
            <pre>{selectedSolution.code}</pre>
            <textarea
              className="note-textarea"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Leave your note here"
            />
            <button className="add-sticker-button" onClick={addSticker}>Add Sticker</button>
          </div>
          <div className="stickers-container">
            {stickers.map(sticker => (
              <Draggable key={sticker.id}>
                <div className="sticker">
                  {sticker.editing ? (
                    <>
                      <textarea
                        className="edit-textarea"
                        defaultValue={sticker.content}
                        onBlur={(e) => saveSticker(sticker.id, e.target.value)}
                      />
                      <button onClick={() => saveSticker(sticker.id, sticker.content)}>Save</button>
                    </>
                  ) : (
                    <>
                      <div>{sticker.content}</div>
                      <button className="edit-button" onClick={() => startEditing(sticker.id)}>Edit</button>
                      <button className="delete-button" onClick={() => deleteSticker(sticker.id)}>Delete</button>
                    </>
                  )}
                </div>
              </Draggable>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackPage;
