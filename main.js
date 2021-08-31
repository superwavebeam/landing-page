let sendLove = () => {
    e.preventDefault()
    let niceThing = document.querySelector("#nice-thing")
    let compliment = document.querySelector("input")

    axios.post('/api/nicethings', {love: compliment.value})
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
let send = document.querySelector("#nice-thing")
send.addEventListener('submit', sendLove)