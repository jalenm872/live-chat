from fastapi import (
    FastAPI, WebSocket, WebSocketDisconnect, Request, Response
)
from typing import List
from pydantic import BaseModel

from fastapi.middleware.cors import CORSMiddleware
from fastapi.templating import Jinja2Templates

# Create FastAPI instance
app = FastAPI()

# Origin of frontend
origins = [
    "http://localhost:3000",
    "localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"]
)

#locate templates
# templates = Jinja2Templates(directory="templates")

# Create list of messages
messages = [
    {
        "sender": "John",
        "message": "Hello"
    },
    {
        "sender": "Jane",
        "message": "Hi"
    }
]

# Connection Manager Class
class ConnectionManager:
    # List of active connections
    def __init__(self):
        self.active_connections: List[(WebSocket, str)] = []

    # Connect to websocket
    async def connect(self, websocket: WebSocket, user: str):
        await websocket.accept()
        self.active_connections.append((websocket, user))

    # Disconnect from websocket
    def disconnect(self, websocket: WebSocket, user: str):
        self.active_connections.remove((websocket, user))

    # Broadcast message to all connected clients
    async def broadcast(self, data):
        for connection in self.active_connections:
            await connection[0].send_json(data)

# Create connection manager instance
manager = ConnectionManager()

@app.websocket("/api/chat")
async def chat(websocket: WebSocket):
    sender = websocket.cookies.get("X-Authorization")
    if sender:
        await manager.connect(websocket, sender)
        response = {
            "sender": sender,
            "message": "Connected"
        }
        await manager.broadcast(response)
        try:
            while True:
                data = await websocket.receive_json()
                await manager.broadcast(data)
        except WebSocketDisconnect:
            manager.disconnect(websocket, sender)
            response['message'] = "left"
            await manager.broadcast(response)

# Get current user
@app.get("/api/current_user")
def get_user(request: Request):
    return request.cookies.get("X-Authorization")

class RegisterValidator(BaseModel):
    username: str

# Register user
@app.post("/api/register")
def register(user: RegisterValidator, response: Response):
    response.set_cookie(key="X-Authorization", value=user.username, httponly=True)

# @app.get("/")
# def index(request: Request):
#     return templates.TemplateResponse("home.html", {"request": request})

# @app.get("/chat")
# def chat(request: Request):
#     return templates.TemplateResponse("chat.html", {"request": request})

# Get messages
@app.get("/messages", tags=["messages"])
async def get_messages() -> dict:
    return {"data": messages}

# Create message
@app.post("/messages", tags=["messages"])
async def create_message(message: dict) -> dict:
    messages.append(message)
    return {
        "data": "Message Sent"
    }