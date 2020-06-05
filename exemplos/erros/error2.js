const Http = require('http')
const PORT = 3000
const { promisify } = require('util')
const { pipeline } = require('stream')
const pipelineAsync = promisify(pipeline)

let counter = 0
Http.createServer(async (req, res) => {
    
   res.end('test')
   res.end('test2')
})
.listen(PORT, () => console.log('server running at', PORT))