function handleSubmit(event) {
    event.preventDefault()

    let formUrl = document.getElementById('url').value
    
    // call urlChecker.js to check if the url param is valid
    let isValidUrl = Client.checkUrl(formUrl)

    if(!isValidUrl){
        //show alert on HTML
        let message = `<h3 style="color: red;">::: ${formUrl} is invalid :::<h3/>`
        const results = document.getElementById('results')
        results.innerHTML = message
        return
    } 

    console.log("::: Form Submitted :::")
    
    //call the new endpoint (POST) and send the fromText
    fetch('http://localhost:8081/sentiment', 
        {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({url: formUrl})
        })
        .then(res => res.json())
        .then(response => {

            //read the result and add to HTML
            const results = document.getElementById('results')
            results.innerHTML = ""
        
            addInfo(results, response.agreement)
            addInfo(results, response.confidence)
            addInfo(results, response.irony)
            addInfo(results, response.score_tag)
            addInfo(results, response.subjectivity)
        })
}

function addInfo(parent, content) {
    const li = document.createElement('li')
    li.innerHTML = content
    parent.appendChild(li)
}

export { handleSubmit }
