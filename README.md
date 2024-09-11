# Transcript Editor

## Project Description

The Transcript Editor is a web application built using React and Tailwind CSS. It allows users to interact with a transcript where each word has a specified start time and duration for playback. Users can play back the transcript word by word, with each word being highlighted in real-time according to its timing. The application also supports editing of individual words, but does not allow word deletions to ensure the integrity of the transcript.

## Key Features

- **Transcript Loading**: Each word in the transcript has a start time and duration for playback.
- **Editing Capabilities**: Users can edit the text of any word. Word deletions are not allowed.
- **Playback Functionality**: Sequential highlighting of words based on their start time and duration.
- **Real-Time Interaction**: Words are highlighted in real-time during playback, providing a visual representation.

## Example

For a transcript containing the following words:

- `"Hello"` (start_time: 0 ms, duration: 500 ms)
- `"world"` (start_time: 500 ms, duration: 700 ms)
- `"This"` (start_time: 1200 ms, duration: 300 ms)

When the user presses the play button:
1. At **t=0 ms**, `"Hello"` will be highlighted.
2. At **t=500 ms**, `"world"` will be highlighted.
3. At **t=1200 ms**, `"This"` will be highlighted.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/transcript-editor.git
   cd transcript-editor
2. **Install the dependencies:**
     npm install
3. **Run the development server:**
     npm start
     npm run dev
## Usage
-**Play**: Click the "Play" button to start the playback. Words will be highlighted based on their start time and duration.
-**Stop**: Click the "Stop" button to stop the playback.
-**Edit Words**: Double-click any word to enter edit mode. Modify the text and click outside the input field to save changes.
