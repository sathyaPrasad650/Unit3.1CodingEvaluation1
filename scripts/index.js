//store the products array in localstorage as "products"
let data = JSON.parse(localStorage.getItem('products')) || []

function submitProduct(event) {
    event.preventDefault();
    console.log('sssss')
    let obj = {
        type: document.querySelector('#type').value,
        desc: document.querySelector("#desc").value,
        price: document.querySelector("#price").value,
        image: document.querySelector("#image").value,
    }
    // console.log(obj)
    let type = document.querySelector('#type');
    type.value = ''
    let desc = document.querySelector('#desc');
    desc.value = ''
    let price = document.querySelector('#price');
    price.value = ''
    let image = document.querySelector('#image');
    image.value = ''
    data.push(obj)
    localStorage.setItem('products', JSON.stringify(data))
}

function showProducts() {
    console.log('show')
    window.location = './inventory.html '
}