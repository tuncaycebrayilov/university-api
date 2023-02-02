document.getElementById('university-btn').addEventListener('click', () => {
    document.getElementById("university").innerHTML = ``
    input = document.getElementById('university-input').value
    fetch(`http://universities.hipolabs.com/search?country=${input}`)
        .then((resp) => resp.json())
        .then((data) => {
            for (let university of data) {
                console.log(university);
                document.getElementById("university").innerHTML += 
                `
                <div class="col-md-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${university.name}</h5>
                            <p class="card-text">${university.country}</p>
                            <a class="card-text" href='${university.web_pages}'>link</a>
                            
                        </div>
                    </div>
                </div>
                `
            }
        })

})