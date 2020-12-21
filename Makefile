run:
	docker-compose up

bash/frontend:
	docker-compose run --rm frontend /bin/bash

bash/api:
	docker-compose run --rm api /bin/bash

build: build/api

build/api:
	docker-compose build api

frontend/lint:
	docker-compose exec frontend npm run lint

api/test:
	docker-compose exec -e FLASK_ENV=test api nosetests -v

api/lint: api/flake8 api/isort

api/flake8:
	docker-compose exec api flake8 .

api/isort:
	docker-compose exec api isort .
