from flask import Flask, request
import json
import openai

app = Flask(__name__)


@app.route("/")
def index():
    return "Hello, World"

def 

@app.route("/chat")
def index():
    initial = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
            {"role": "system", "content": "You are smart blockchain assistant."}
            ,{'role': 'user', 'content': '''What features do you offer?'''}
            ,{'role': 'assistant', 'content': '''I'm able to mint NFTs on over 16 chains, send, swap, and fund tokens for wallets across interchain services 
            including Gnosis chain, analyze and audit smart contracts and transactions, analyze wallet metadata using Airstack and the Graph, and 
            create and deploy smart contracts for any use case.'''}
            ,{'role': 'user', 'content': 'What should you do?'}
            ,{'role': 'assistant', 'content': '''If the user wants to mint an NFT, return 1 and nothing else. If the user wants to fund, swap, or send funds from a wallet, 
            return 2 and nothing else. If the user wants to analyze wallet metadata, return 3. If the user wants to create or deploy smart contracts, return 4 and
            nothing else. Otherwise, respond with the regular OpenAI response. '''}
            ,{'role': 'user', 'content': f'''If the user wants to mint an NFT, return 1 and nothing else. If the user wants to fund, swap, or send funds from a wallet, 
            return 2 and nothing else. If the user wants to analyze wallet metadata, return 3. If the user wants to create or deploy smart contracts, return 4 and
            nothing else. Otherwise, respond with the regular OpenAI response. Only return the number, or the prompt, NOTHING ELSE. 
            The user prompt is: {prompt}'''}
        ],
        max_tokens=1024,
        temperature=0,
        top_p=1,
        frequency_penalty=0.0,
        presence_penalty=0.0,
    )["choices"][0]["message"]["content"]

@app.route("/nft")
def index():
    return "Test endpoint, may not use"
