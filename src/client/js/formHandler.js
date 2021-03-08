function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

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
        .then(response => {
            console.log(response)
            document.getElementById('results').innxrHTML = response.message

            //TODO read the result and add to HTML
            const results = document.getElementById('results')
        
            for(let entity of response.entity_list) {
                const li = document.createElement('li')
                li.innerHTML = entity.form
                results.appendChild(li)
                
            }
            for(let concept of response.concept_list) {
                const li = document.createElement('li')
                li.innerHTML = concept.form
                results.appendChild(li)
                
            }
        })
}

export { handleSubmit }
