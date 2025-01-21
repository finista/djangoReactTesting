# Django-React testing
*An application made for testing how to set up a server configuration with django using react as frontend and docker as the deployment system.*

# To run a local server
1. Open one terminal and go to /api folder.
2. Create a virtualenv for python using `virtualenv .venvs`
3. Activate the enviroment `.venvs/scripts/activate` or `source .venvs/bin/activate` for linux-based systems.
4. Install dependencies `pip install -r requirements.txt`
5. Run a daphne server `daphne api.asgi:application`
6. Open a new termail and make your way to /web-app folder.
7. Install dependencies `npm install`
8. Run a development react server using `npm run dev`

**WARNING**: For this to work properly when trying to run a production server using docker you must have .env.production files set up in both ./ and ./web-app folders.

`./.env.production` format
```
IS_PRODUCTION    = TRUE                                         #Production variable
ALLOWED_HOSTS    = 127.0.0.1,localhost                          #List of allowed hosts
ALLOWED_ORIGINS  = http://127.0.0.1:8000,https://127.0.0.1:8000 #List of allowed CORS origins
ORIGIN_WHITELIST = http://127.0.0.1:8000,https://127.0.0.1:8000 #List of whitelisted CORS origins
```

`./web-app/.env.production` format
```
VITE_IS_PROD = true          #Production variable
APP_URL      = /static/dist/ #Base URL that react should use to look for files on the backend.
```
