
//Get request for AuctionData.json
var arr = [];


function getData(){
    fetch("https://gauravgitacc.github.io/postAppData/auctionData.json")
    .then((res)=> res.json())
    .then((data)=>  {
        document.querySelector('.lds-ring').style.display = "none";
        let innerHTML = "";
        data.forEach(e =>{
            innerHTML += `
                <div class="cards">
                    <h1 class='${
                        e.status =="PENDING"?"YELLOW":
                        e.status =="COMPLETED"?"GREEN" :
                        e.status =="CANCELLED"?"RED" :
                        "AQUA"}'>${e.status}</h1>
                    <p class="ecNum">${e.caseNumber}</p>
                    <p class="edate">${e.date}</p>
                    <hr>
                    <h3 class="fromloc">${e.fromLocation}</h3>
                    <p class="toloc">${e.toLocation}</p>
                    <h3 class="price">${e.fare}</h3>
                </div>
            `
        })
        
        document.querySelector('.container').innerHTML = innerHTML;
    }) 
}

setTimeout(getData,1000);

document.getElementById('search').addEventListener('input',()=>{
    if(document.getElementById('search').value.trim()==""){
        getData()
    }

    var myArr = document.querySelectorAll('.fromloc');
    myArr.forEach(e=>{
        var x = e.textContent.toLowerCase();
        if(x.includes(document.getElementById('search').value.toLowerCase())){
            e.parentElement.style.display = "block";
        }
        else{
            e.parentElement.style.display = "none";
        }
    });
    
});



