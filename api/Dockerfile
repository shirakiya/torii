FROM python:3.9.7-slim as default

WORKDIR /opt/torii_api

COPY requirements.txt ./

RUN pip install -U pip && \
    pip install --no-cache-dir -r requirements.txt

COPY torii_api ./torii_api/

ENV FLASK_APP /opt/torii_api/torii_api/app.py
ENV FLASK_ENV production

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]


FROM default as dev

ENV PYTHONUNBUFFERED 0
ENV PYTHONDONTWRITEBYTECODE 1
ENV FLASK_ENV development

COPY setup.cfg ./
COPY requirements-dev.txt ./

RUN pip install --no-cache-dir -r requirements-dev.txt
