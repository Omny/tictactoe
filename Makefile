install: install-deps
	npx simple-git-hooks

run:
	bin/game.js 10

install-deps:
	npm ci

test:
	npm test

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
