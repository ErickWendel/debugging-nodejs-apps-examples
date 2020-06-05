
const sleep = ms => new Promise(p => setTimeout(p, ms))
;
(async () => {
    console.log('passou1', { nome: 'Erick' })
    await sleep(500)
    console.log('passou2', { idade: '25' })
    await sleep(500)
    console.log('passou4', { nfEmitida: true })
    await sleep(500)
    console.log('passou4', { salario: '1000000000', at: new Date() })
})()