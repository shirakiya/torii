run:
	docker-compose up

build: build/api

build/api:
	docker-compose build api

api/test:
	docker-compose exec -e FLASK_ENV=test api nosetests -v

api/lint: api/flake8 api/isort

api/flake8:
	docker-compose exec api flake8 .

api/isort:
	docker-compose exec api isort .
