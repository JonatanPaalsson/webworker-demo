onmessage = e => {
    const hugeArray = JSON.parse(e.data)

    hugeArray.sort(function(a, b) {
        return a - b
    })

    self.postMessage(JSON.stringify(hugeArray))
}
