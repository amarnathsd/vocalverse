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
Add to .env: Store the token in .env


## Project Setup
###  1. Clone the Repository
To get started, clone the project repository to your local machine:
git clone 
