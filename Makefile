install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

pubish:
	npm publish

lint:
	npm run eslint .
