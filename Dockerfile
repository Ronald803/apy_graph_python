FROM nikolaik/python-nodejs:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update && apt-get install -y graphviz

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

RUN poetry init --no-interaction

RUN poetry install

RUN pipenv install diagrams

RUN poetry add diagrams

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "index.js"]