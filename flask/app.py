from flask import Flask, request, jsonify
import json
import openai
from __future__ import annotations
from typing import List, Optional, Union
from pydantic import ValidationError
from langchain.chains.llm import LLMChain
from langchain.chat_models.base import BaseChatModel
from langchain.experimental.autonomous_agents.autogpt.output_parser import (
    AutoGPTOutputParser,
    BaseAutoGPTOutputParser,
)
from langchain.experimental.autonomous_agents.autogpt.prompt import AutoGPTPrompt
from langchain.experimental.autonomous_agents.autogpt.prompt_generator import (
    FINISH_NAME,
)
from langchain.schema import (
    AIMessage,
    BaseMessage,
    Document,
    HumanMessage,
    SystemMessage,
)
from langchain.tools.base import BaseTool
from langchain.tools.human.tool import HumanInputRun
from langchain.vectorstores.base import VectorStoreRetriever
from langchain.schema import BaseMessage, HumanMessage, SystemMessage
import dotenv

app = Flask(__name__)
load_dotenv()

openai.api_key = os.environ.get("API_KEY")

@app.route("/", methods=["GET", "POST"])
def index():
    return "Hello, World"

""",{'role': 'user', 'content': 'What should you do?'}
        ,{'role': 'assistant', 'content': '''If the user wants to mint an NFT, return 1 and nothing else. If the user wants to fund, swap, or send funds from a wallet, 
        return 2 and nothing else. If the user wants to analyze wallet metadata, return 3. If the user wants to create or deploy smart contracts, return 4 and
        nothing else. Otherwise, respond with the regular OpenAI response. '''}
        ,{'role': 'user', 'content': f'''If the user wants to mint an NFT, return 1 and nothing else. If the user wants to fund, swap, or send funds from a wallet, 
        return 2 and nothing else. If the user wants to analyze wallet metadata, return 3. If the user wants to create or deploy smart contracts, return 4 and
        nothing else. Otherwise, respond with the regular OpenAI response. Only return the number, or the prompt, NOTHING ELSE. 
        The user prompt is: {prompt}'''}"""

@app.route("/chat", methods=["GET", "POST"])
def chat():
    args = request.args
    prompt = args.get("prompt")
    initial = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are smart blockchain assistant."}
            ,{'role': 'user', 'content': '''What features do you offer?'''}
            ,{'role': 'assistant', 'content': '''I'm able to mint NFTs on over 16 chains, send, swap, and fund tokens for wallets across interchain services 
            including Gnosis chain, analyze and audit smart contracts and transactions, analyze wallet metadata using Airstack and the Graph, and 
            create and deploy smart contracts for any use case.'''}
            ,{'role': 'user', 'content': prompt}
        ],
        max_tokens=1024,
        temperature=0,
        top_p=1,
        frequency_penalty=0.0,
        presence_penalty=0.0,
    )["choices"][0]["message"]["content"]
    print(prompt)
    return jsonify(url = "", response = initial)
    
@app.route("/nft", methods=["GET", "POST"])
def nft():
    return "Test endpoint, may not use"
