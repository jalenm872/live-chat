To run:

uvicorn main:app --reload

Post Request (Chat):
curl -X POST http://localhost:8000/messages -d \
    '{"sender": "Jalen", "message": "Hi"}' \               
    -H 'Content-Type: application/json'


curl -X POST http://localhost:8000/messages -d \
    '{"id": "3", "item": "Buy some testdriven courses."}' \
    -H 'Content-Type: application/json'