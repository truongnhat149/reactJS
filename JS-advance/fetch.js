fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET"
})
    .then(function (response) {
        return response.json()
    })
    .then(function(posts){
        // nghiệp vụ
    })