const Http = require('http');
const PORT = 3000;
const { promisify } = require('util')
const { pipeline } = require('stream')
const pipelineAsync = promisify(pipeline)
const { sum } = require('./Math')

let counter = 0
 
// nao manipula promises.
Http.createServer(async (req, res) => {
    try {
        await pipelineAsync(
            req,
            async function* (source) {
                source.setEncoding('utf8')
                for await (const body of source) {
                    console.log(`[${++counter}] - request!`, body.toString())

                    const item = JSON.parse(body)
                    // cb here
                    const result = sum(...Object.values(item))
                    yield `Soma: ${result}`
                }
            },
            res
        )

    } catch (error) {
        console.log('error!', error)
    }

}).listen(PORT, () => console.log('server running at', PORT))

/*
`curl -i \
    -X POST \
    -d '{"valor1":"20","valor2": "10"}' \
    http://localhost:3000`
*/