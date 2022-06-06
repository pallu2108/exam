function voucher(n,e,a,am){
    this.name = n;
    this.email = e;
    this.address = a;
    this.amount = am;
}

function addtocart(e){
    e.preventDefault();
    let form = document.getElementById("form");
    let name = form.name.value;
    let email = form.email.value;
    let address = form.address.value;
    let amount = form.amount.value;

    let v = new voucher(name,email,address,amount);
    console.log(v);
    let addData = JSON.parse(localStorage.getItem("user")) || []
    addData.push(v);
    localStorage.setItem("user",JSON.stringify(addData));
}