const path = require('path')
const fs = require('fs')

const fractal = require('@frctl/fractal').create();

fractal.set('project.title', 'Basic components');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Ricardo Brina Mondardo');

fractal.web.set('static.path', `${__dirname}/../../dist`);
fractal.web.set('builder.dest', 'dist');

fractal.docs.set('path', `${__dirname}/../../fractal/docs`);
fractal.components.set('path', `${__dirname}/../../fractal/components`);

fractal.web.set('server.port', 3010);

const logger = fractal.cli.console;

fractal.web.set('server.syncOptions', {
  middleware: [
    {
      route: '/api',
      handle: (request, response, next) => {

        const mocksPath =  "../../fractal/components/mocks/"

        const requestUrlPath = request.url.split('/')

        let fileName = requestUrlPath[requestUrlPath.length - 1]
        let folderName = requestUrlPath[requestUrlPath.length - 2]
        let filePath = path.join(__dirname, `${mocksPath}/${folderName}/${fileName}.json`)

        fs.exists(filePath, (exists) => {
          if (exists) {
            setTimeout(() => {
              console.log(`Giving out the "${fileName}" mock! @`+filePath)
              response.writeHead(200, {'Content-Type': 'application/json'})
              fs.createReadStream(filePath).pipe(response)
            }, 1500)
          } else {
            response.writeHead(404, {'Content-Type': 'text/plain'})
            response.end('ERROR File does not exist @'+filePath)
          }
        })
      }
    }
  ]
});

module.exports = function (gulp) {
  return function () {
    const server = fractal.web.server({
      sync: true
    });
    server.on('error', err => logger.error(err.message))
    return server.start().then(() => {
      logger.success(`Fractal server is now running at ${server.url}`)
    })
  }
}
