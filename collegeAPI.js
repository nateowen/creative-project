document.getElementById("schoolSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("schoolInput").value;
    if (value === "")
        return;
        
    const url = "https://api.data.gov/ed/collegescorecard/v1/schools?api_key=kVx3ziG0HyZi9JC5MuhKQ6dkGVEE2AhiajjrzzzT&fields=id,school.name,school.city,latest.cost.attendance.academic_year,latest.student.size,latest.admissions.admission_rate.overall,latest.admissions.act_scores.midpoint.cumulative&per_page=20&sort=latest.student.size:desc&school.search=" + value;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let results = "";
        
        for (var i = 0; i < data.results.length; i++) {
          console.log(data.results[i]);
          results += '<div class="school col w-100 text-dark bg-light rounded p-md-5 m-5 text-center overflow-hidden">'
          results += '<h2>' + data.results[i]['school.name'] + '</h2>';
          results += '<p>' + data.results[i]['school.city'] + '</p>';

          results += '<h5>Total Student Enrollment: ' + Math.round(data.results[i]['latest.student.size'] / 1000) + ',000</h5>';
          results += '<h5>Tutition: $' + Math.round(data.results[i]['latest.cost.attendance.academic_year'] / 1000) + 'k</h5>';
          results += '<h5>Admission Rate: ' + ((data.results[i]['latest.admissions.admission_rate.overall'])*100).toFixed(2) + '%</h5>';

          results += '</div>'
        }

        document.getElementById('schoolSquare').innerHTML = results;
        //begin adding to results to show school data
        
      })
});