async function getDetails(){
    try{
        let users= await fetch("https://api.github.com/users")
        users = await users.json()
        console.log(users);

        if (users){
          let tableDetails= document.getElementById("tableDetails")

          let table = document.createElement("table")
          let thead = document.createElement("thead")
          // let mainrow = document.createElement("tr")
          let head = document.createElement("tr")
          // let userhead = document.createElement("th")
          // userhead.innerText="users list";
          // userhead.colSpan=3
          let slth = document.createElement("th");
          slth.innerText="SL NO";
          let nameth = document.createElement("th");
          nameth.innerText="NAME";
          let image = document.createElement("th");
          nameth.innerText="IMAGE";
          // mainrow.append(userhead);
          head.append(slth,nameth,image);
          let tbody=document.createElement("tbody");

          tableDetails.prepend(table)
          table.append(thead)
          // table.append(mainrow)
          table.append(head)
          table.append(tbody)
          users.map(({login, id, avatar_url })=>{
            let bodytr = document.createElement("tr");
            let sltd = document.createElement("td");
            let nametd = document.createElement("td");
            let imgtd = document.createElement("td");
            let img = document.createElement("img");
            img.src = avatar_url;

            sltd.innerText = id;
            nametd.innerText = login;
            imgtd.append(img);

            bodytr.append(sltd, nametd, imgtd);
            tbody.append(bodytr);
        });
    }
  }
  catch(err) {
  console.log(err.message);
  }
}
getDetails()