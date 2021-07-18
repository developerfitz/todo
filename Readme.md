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

## Setup python virtual env

Python 3.8.6
`python -m venv <example-pyenv>`
`source pyenv/bin/activate`

Update pip and add required files
`pip install --upgrade pip`
`pip install -r requirements.txt`

## Trouble shooting to get base template running

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
  - After changes app works
