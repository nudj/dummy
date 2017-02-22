CWD=$(shell pwd)
BIN:=./node_modules/.bin

.PHONY: build test tdd

build:
	@docker build \
		-t test-image \
		.

test:
	-@docker rm -f test-container 2> /dev/null || true
	@docker run --rm -it \
		--name test-container \
		-v $(CWD)/src:/usr/src/src \
		test-image \
		$(BIN)/mocha src/test/*.js

tdd:
	-@docker rm -f test-container 2> /dev/null || true
	@docker run --rm -it \
		--name test-container \
		-v $(CWD)/src:/usr/src/src \
		test-image \
		$(BIN)/nodemon \
			--quiet \
			--watch ./ \
			--delay 250ms \
			-x '$(BIN)/mocha src/test/*.js || exit 1'
