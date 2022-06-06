

async function oneFunction(){
    try{
        let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`
        const res = await fetch(url)
        const data = await res.json();

        console.log(data[0].vouchers);
        appendData(data[0].vouchers)
        return data;
     }catch(err){
         console.log(err);
     }
}
oneFunction()


function appendData(data){
    data.forEach((el) => {
        var div= document.createElement("div")
        let img= document.createElement("img");
        img.src=el.image;
        let name = document.createElement("p")
        name.innerText=el.name;
        let price=document.createElement("p")
        price.innerText=el.price;

        let add= document.createElement("button")
        add.innerText="Buy"
        add.setAttribute("class", "buy_voucher")
        add.addEventListener("click",function(){
            addtocart(el)
            console.log(el)
        })
            div.append(img,name,price,add);
            document.querySelector("#voucher_list").append(div);
        });
        
    }
