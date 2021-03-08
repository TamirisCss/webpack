function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    //TODO call the new endpoint (POST) and send the fromText
    fetch('http://localhost:8081/topics', 
        {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({text: formText})
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            document.getElementById('results').innxrHTML = res.message

            //TODO read the result and add to HTML

        })
}

export { handleSubmit }
