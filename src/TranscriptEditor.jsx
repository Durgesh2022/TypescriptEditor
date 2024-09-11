import React, { useState, useEffect, useRef } from 'react';

function TranscriptEditor({ initialTranscript }) {
  const [transcript, setTranscript] = useState(initialTranscript);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const timerRef = useRef(null);

  // Handle text editing
  const handleEditWord = (index, newWord) => {
    const updatedTranscript = [...transcript];
    updatedTranscript[index].word = newWord;
    setTranscript(updatedTranscript);
  };

  // Handle playback functionality
  const startPlayback = () => {
    setIsPlaying(true);
    setCurrentWordIndex(0);
  };

  const stopPlayback = () => {
    setIsPlaying(false);
    setCurrentWordIndex(-1);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    if (isPlaying && currentWordIndex < transcript.length) {
      const { start_time, duration } = transcript[currentWordIndex];

      timerRef.current = setTimeout(() => {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      }, duration);

      return () => {
        clearTimeout(timerRef.current);
      };
    } else if (currentWordIndex >= transcript.length) {
      stopPlayback(); // End playback when we finish the transcript
    }
  }, [isPlaying, currentWordIndex, transcript]);

  return (
    <div className="transcript-editor space-y-4">
      <div className="playback-controls space-x-2">
        {!isPlaying ? (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={startPlayback}
          >
            Play
          </button>
        ) : (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={stopPlayback}
          >
            Stop
          </button>
        )}
      </div>

      <div className="transcript text-lg space-x-2">
        {transcript.map((wordObj, index) => (
          <EditableWord
            key={index}
            wordObj={wordObj}
            isHighlighted={index === currentWordIndex}
            onEdit={(newWord) => handleEditWord(index, newWord)}
          />
        ))}
      </div>
    </div>
  );
}

function EditableWord({ wordObj, isHighlighted, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [word, setWord] = useState(wordObj.word);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onEdit(word);
  };

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  return (
    <span
      onDoubleClick={handleDoubleClick}
      className={`inline-block px-1 py-0.5 rounded ${
        isHighlighted ? 'bg-yellow-300' : ''
      }`}
    >
      {isEditing ? (
        <input
          type="text"
          value={word}
          onChange={handleChange}
          onBlur={handleBlur}
          className="bg-transparent border-b border-black"
        />
      ) : (
        <span>{word}</span>
      )}
    </span>
  );
}

export default TranscriptEditor;
