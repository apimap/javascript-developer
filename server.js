const path = require('path')
const express = require('express')
const http = require('http')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

/*
* Status endpoint
*/
app.get( "/actuator/health", ( request, response) => {
        response.json({"status": "UP"})
    }
)

/*
* Provide global variables to the frontend app from dynamically included server environment variables
*/
app.get( "/customization.js", ( request, response) => {
        response.header("Content-Type", "application/javascript")
        response.header("Cache-Control", "no-cache")
        response.header("robots", "no-cache")
        response.send(
            `const APIMAP_API_URL="${process.env.APIMAP_API_URL}"; \n`+
            `const APIMAP_PORTAL_URL="${process.env.APIMAP_PORTAL_URL}";\n`+
            `const APIMAP_SUPPORT="${process.env.APIMAP_SUPPORT}";\n`+
            `document.title="${process.env.APIMAP_TITLE}";`
        )
    }
)

/*
* Provide customizable content
*/
app.get("/content/metadata-options.json", function(req, res) {
        res.sendFile(path.join(__dirname + '/dist/content/metadata-options.json'));
    }
)

app.get("/content/logo.*", function(req, res) {
        res.sendFile(path.join(__dirname + '/dist/content/logo.png'));
    }
)

app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname + '/dist/index.html'));
    }
)

const server = http.createServer(app)

const hostname = "0.0.0.0"
const port = 8080

server.listen(port, hostname);
console.log('Running on ' + hostname + ":" + port)
