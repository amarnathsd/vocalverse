# VoclVerse Project  

## Prerequisites
Before you begin, ensure you have the following:
Node.js (v14 or higher)
npm or yarn (Package Manager)
Access to Google Cloud and Hugging Face platforms for API key creation.

## Project Components:
Character Selection: Allows users to select up to two characters from a predefined list.
Prompt Generation:  Generates a conversation between selected characters using the LLM API.
Text-to-Speech (TTS) Integration:   Converts generated dialogues into speech.

## Create API Keys 

### a. Google Cloud API Key (LLM)
Google Cloud Console: Log in at Google Cloud Console(https://ai.google.dev/pricing).
Create API Key: Go to API & Services > Credentials > Create API Key.
Can Quickly Test API by given cURL.
Add to .env: Store the API key in .env

### b. Hugging Face API Key (TTS)
Hugging Face: Log in at Hugging Face (https://huggingface.co/).
Generate API Token: Go to API tokens > New Token.
model we are using is 'espnet/kan-bayashi_ljspeech_vits'.
Add to .env: Store the token in .env.



## Project Setup
###  1. Clone the Repository
To get started, clone the project repository to your local machine.
git clone https://github.com/amarnathsd/vocalverse

### 2. Install Dependencies
Install the necessary packages using npm or yarn.

### 3. Configure Environment Variables
Ensure that the .env file in the project root contains the following environment variables.

REACT_APP_LLM_API_KEY=your-google-api-key
REACT_APP_TTS_API_KEY=your-hugging-face-api-key

### 4. Run the Application
Start the development server by npm start.

## Project Flow

1. Character Selection
  User Interface: The user selects up to two characters from a predefined list. The available characters include Donald Trump, Peter Griffin,    Kamala Harris, Ryan Reynolds (Deadpool), and Hugh Jackman (Wolverine).

2. Prompt Generation
   LLM model will be called with selected characters and Promt will getting as response and will be stored in the state.

3. Display Conversation in Chatbox
  UI Component: The conversation is displayed in a chatbox format, allowing users to view and edit the dialogues.

4. Text-to-Speech (TTS) Integration
  Triggering TTS: Each dialogue in the chatbox has a "Play Audio" button. Which will call a Text To Speech API with given input of line text and for that text audio will be generated.

5. If Text of speech has edited have re click on the Play audio buttton to regenerate the audio.
