
node-test:
	@mocha

browser-test:
	@reload -p 61290 & echo "$$!" > /tmp/secure-random-browser-test.pid
	@sleep 1
	@open http://localhost:61290/test/browser.test.html

kill-browser-test:
	@cat /tmp/secure-random-browser-test.pid | xargs kill
	@rm /tmp/secure-random-browser-test.pid

.PHONY: node-test browser-test