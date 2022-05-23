let data = JSON.parse(localStorage.getItem('products'));

console.log(data)


function homePage() {
    window.location = './index.html'
}


data.map(function (ele, index) {
    let box = document.createElement("div")
    box.setAttribute('class', 'box')

    let image = document.createElement('img')
    image.src = ele.image;

    let type = document.createElement('p')
    type.innerText = ele.type

    let desc = document.createElement('p')
    desc.innerHTML = ele.desc

    let price = document.createElement('p')
    price.innerText = ele.price

    let btn = document.createElement('button')
    btn.innerText = 'Remove Product'
    btn.setAttribute('id', 'remove_product')
    btn.addEventListener('click', function () {
        removeProduct(ele, index)
    })

    box.append(image, type, desc, price, btn)
    document.querySelector("#all_products").append(box)
})


function removeProduct(ele, index) {
    data.splice(index, 1)
    localStorage.setItem('products', JSON.stringify(data))
    window.location.reload()
}