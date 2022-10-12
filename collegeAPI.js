document.getElementById("schoolSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("schoolInput").value;
    if (value === "")
        return;
        
    const url = "https://api.data.gov/ed/collegescorecard/v1/schools?api_key=kVx3ziG0HyZi9JC5MuhKQ6dkGVEE2AhiajjrzzzT&fields=id,school.name,school.alias,school.search&per_page=20&sort=school.alias:asc&school.search=" + value;
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json)
        let results = "";
            
        //begin adding to results to show school data
        
      });
});