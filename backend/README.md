To run:

uvicorn main:app --reload

Post Request (Chat):

curl -X POST http://localhost:8000/messages -d '{"sender": "Jalen", "message": "Hi"}' -H 'Content-Type: application/json'
