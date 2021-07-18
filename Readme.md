#todo-backend-flask
[![Circle CI](https://circleci.com/gh/Faerbit/todo-backend-flask.svg?style=shield)](https://circleci.com/gh/Faerbit/todo-backend-flask)
[![Requirements Status](https://requires.io/github/Faerbit/todo-backend-flask/requirements.svg?branch=master)](https://requires.io/github/Faerbit/todo-backend-flask/requirements/?branch=master)

A [todo backend](http://todobackend.com) written in Python with Flask.

##Tests
You can run the unit tests with `python -m unittest discover`.

##Server
You can start a debug server by executing `run_debug_server.py`

## License

Licensed under the MIT License.
See License.md for further details.

## Project

Add a feature to an existing Todo

- Base template used [todo-backend-flask](https://github.com/Faerbit/todo-backend-flask)

### Setup python virtual env

Python 3.8.6
`python -m venv <example-pyenv>`
`source pyenv/bin/activate`

Update pip and add dependencies
`pip install --upgrade pip`
`pip install -r requirements.txt`

### Trouble shooting to get base template running

- remove `psycopg2==2.6.2` from `requirements.txt` to install project dependencies (not using postgres)
- update import package for `flask-cors` in `todo/__init__.py`
- update `werkzeug` package to 2.0.1
- see if app is working
  - **Success** `curl -H 'Content-Type: application/json' http://127.0.0.1:5000/`
  - **Error** `curl -d '{"title":"Start packing everything"}' -H 'Content-Type: application/json' -X POST http://127.0.0.1:5000/`
- update `flask` and dependencies
- see if other Http verbs working

  - **Success** `curl -d '{"title":"Start packing everything"}' -H 'Content-Type: application/json' -X POST http://127.0.0.1:5000/`
  - **Success** `curl -d '{"title":"Call movers"}' -H 'Content-Type: application/json' -X PATCH http://127.0.0.1:5000/1`
  - **Success** `curl -H 'Content-Type: application/json' -X DELETE http://127.0.0.1:5000/1`

- Summary
  - remove psycopg package from requirements
  - update packages `pip install --upgrade werkzeug flask`
  - After changes base template working

## New feature

- Add optional assignee to the todos
  - endpoint to filter out todos based on assignee
  - endpoint to provide unassigned todos

This is useful for teams or groups with a long list of todos and this features allows them to divide and concur the mountain of todos. All they need is their name and they can gain access to their todos (e.g., `/assignee/name-here`).

Database model updated to include assignee.
Update routes/endpoints to account for assignee and modified responses.

### Notes

- remove debug.db to add changes with model
- update index route and model to include assignee attribute on todos
- add assignee route that gets specific assignee or unassigned todos

### Start App Backend

- Running Python 3.8.6
- Start backend with `python3 run_debug_server.py`
- Use [curl](https://devqa.io/curl-sending-api-requests/) in the terminal or applications like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) for adding and modifying todos the server endpoints and responses
- **Optional** - [DB Browser SQLite](https://sqlitebrowser.org/) for viewing the `debug.db`

### Example requests to test App Backend

GET all todos
`curl -H 'Content-Type: application/json' http://127.0.0.1:5000/`

GET todos by assignee
`curl -H 'Content-Type: application/json' http://127.0.0.1:5000/assignee/Yu`

GET unassigned todos
`curl -H 'Content-Type: application/json' http://127.0.0.1:5000/assignee/unassigned`

POST new todo
`curl -d '{"title":"clean room", "assignee": "Yu"}' -H 'Content-Type: application/json' -X POST http://127.0.0.1:5000/`

PATCH update todo
`curl -d '{"assignee": "Mayuko"}' -H 'Content-Type: application/json' -X PATCH http://127.0.0.1:5000/1`

DELETE a todo
`curl -H 'Content-Type: application/json' -X DELETE http://127.0.0.1:5000/1`

DELETE all todos
`curl -H 'Content-Type: application/json' -X DELETE http://127.0.0.1:5000/`

### Start App Frontend (display all todos only)

**Note:** Frontend is not functional, only displays all todos with assignee

- After starting the backend server and adding some todos start up a frontend to
  display the todos.

`cd todo-frontend-react`

`yarn install` or `npm install`

`yarn start` or `npm start`

Open browser to `http://localhost:5001/` to view the

- Built basic react template using [Parcel Template](https://createapp.dev/parcel)

### Highlights

- Added simple frontend to the backend (although no functionality to fully utilize the requests to the backend as you normally have).

### Improvements

- Expand on the web frontend UI (functionality and design) that allows users to type todos (e.g., users not familiar with Http requests) to interact with the backend. Similar to react template [todo-frontend-react](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react) but using react hooks.
- Implement a frontend UI such as a smart watch to allow voice input for todo using GCP or AWS speech-to-text services (i.e., similar to Google Assistant or Alexa)
- Add unit/integration tests to ensure expected behavior for frontend and backend using tools such as `Pytest` and `Jest`.
- Deploy to a cloud environment (compute instance or cloud functions) to make available to others.
- For scalability include a load balancer to distribute the load.
- Add authentication and authorization for specific users to only see their todos
- **Alternative** - Offload basic logic onto capable clients (filtering, updating todos, removing) manage state on the client (reduce latency) and sync with the backend when needed (ease load on backend with reduced calls).
