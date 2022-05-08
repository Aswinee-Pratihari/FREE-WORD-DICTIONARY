let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    let input=document.getElementById('text');
let wrapper=document.getElementById('wrapper');
// wrapper.style.display='none';
    const xhr = new XMLHttpRequest();
    xhr.open('GET',`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`,true);
    console.log(input.value)
    xhr.onload=function(){
        let html="";
        if(this.status==200){
        let json=JSON.parse(this.responseText);
        
     
        
        let meanings=json[0].meanings;
        console.log(meanings);
        console.log(json[0].meanings[0].definitions[0].definition)
       


        html=` <div id="card">
        <h3>${input.value}</h3>
        <p id="def">${json[0].meanings[0].definitions[0].definition}</p>
      
    </div>`
    }
    wrapper.innerHTML=html;
    input.value="";
}

xhr.send();
})

