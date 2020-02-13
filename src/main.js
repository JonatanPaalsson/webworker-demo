const worker = new Worker('../src/worker.js')

worker.onmessage = e => {
    const message = JSON.parse(e.data)
    console.log('sorted Array: ', message)
}

const sortArray = () => {
    const hugeArray = Array.from({ length: 4000000 }, () =>
        Math.floor(Math.random() * 400)
    )
    console.log('unsorted Array: ', hugeArray)

    worker.postMessage(JSON.stringify(hugeArray))
}
