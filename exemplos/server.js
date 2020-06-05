const Http = require('http')
const PORT = 3000
const { promisify } = require('util')
const { pipeline } = require('stream')
const pipelineAsync = promisify(pipeline)
const { sum } = require('./Math')

let counter = 0
Http.createServer(async (req, res) => {
    try {
        await pipelineAsync(
            req,
            async function * (source) {
                source.setEncoding('utf8')
                for await (const body of source) {
                    console.log(`[${++counter}] - request!`, body.toString())
                    const item = JSON.parse(body)

                    const result = sum(...Object.values(item))
                    yield `Resultado: ${result}`
                }
            },
            res
        )
    } catch (error) {
        console.log('Deu ruim!!', error)
    }
})
.listen(PORT, () => console.log('server running at', PORT))