let sendLove = () => {
    e.preventDefault()
    let niceThing = document.querySelector("#send")
    axios.post('/api/nicethings', {love: niceThing.value})
    .then(res => {
        let container = document.querySelector("#container")
        container.innerHTML = ''
        niceThing.value = ''

        res.data.forEach(niceThing => {
            container.innerHTML += `<p>${niceThing}</p>`
        })
    })
    .then(() => {
        const thankyou = document.createElement("p")
        thankyou.innerHTML = `thank you`
        document.body.appendChild(thankyou)
    })
}

send.addEventListener('submit', sendLove)