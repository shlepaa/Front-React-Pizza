EXIT_CODE = 0
PORT=4242

function setFreePort() {
	echo "run-e2e: stoping proccess on port 4242"
	lsof -ti :$PORT | xargs kill -9
}

setFreePort

echo "run-e2e: starting the dev server"
npm start -- --port=$PORT &

sleep 5;

echo "run-e2e: running e2e test"
npm run cy:test -- --env WEB_APP_URL="http://localhost:$PORT" || EXIT_CODE=$?

setFreePort

exit $EXIT_CODE