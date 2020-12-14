RUN_CONTEXT_API ?= docker-compose exec api

run:
	docker-compose up

build: build/api

build/api:
	docker-compose build api

api/test:
	$(RUN_CONTEXT_API) nosetests -v

api/lint: api/flake8 api/isort

api/flake8:
	$(RUN_CONTEXT_API) flake8 .

api/isort:
	$(RUN_CONTEXT_API) isort .
