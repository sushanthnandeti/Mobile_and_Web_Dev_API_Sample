fetch("https://randomuser.me/api/?results=5").then((data)=>{
    //console.log(data); 
    return data.json(); //converted to object

}).then((objectData)=>{
    console.log(objectData.results);

    let tableData = "";
    objectData.results.forEach((values)=>{
        tableData+= 
        `<tr>
        <td>${values.name.first}</td>
        <td>${values.location.city}</td>
      </tr>`;
    })
    document.getElementById("table").innerHTML = tableData;
}).catch((err)=>{
    console.log(err);
})