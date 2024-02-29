// Import the modules
import gTTS from 'gtts';
import fs from 'fs';
import pdf from 'pdf-parse';
import play from 'play-sound';

// Define the speech variable
let speech = 'Welcome to GeeksforGeeks';

// Read the PDF file as a data buffer
let dataBuffer = fs.readFileSync('./dummy.pdf');

// Convert the data buffer to a PDF object
pdf(dataBuffer).then(data => {
  // Get the text content of the PDF object
  speech = data.text;

  // Create a gTTS object with the text and the language
  const gtts = new gTTS(speech, 'en');

  // Save the speech as an audio file
  gtts.save('Voice.mp3', (err, result) => {
    if(err) {
      throw new Error(err);
    }
    console.log('Text to speech converted!');

    // Import the play-sound module


    // Play the audio file automatically
    let player = play.play('Voice.mp3', err => {
      if (err) throw err
    });
  });
});

// Print the text content
console.log(data.text);
