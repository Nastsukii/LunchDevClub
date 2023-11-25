const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSomeAll = document.querySelector('.some-all')
const buttonFilterAll = document.querySelector('.filter-all')


function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { 
        style: 'currency', 
        currency: 'BRL'
        });
        return newValue
}


function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach((product) => {
        myLi += `
            <li >
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price"> ${formatCurrency(product.price)}</p>
            </li>
        `
    })
    list.innerHTML = myLi

}


function mapAllItens() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))
    showAll(newPrice)
}


function sumeAllItens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
            <li >
                <p>O valor total dos itens é  ${formatCurrency(totalValue)}</p>
            </li>
        `
    console.log(totalValue)
}


function filterAllItens() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)
    showAll(filterJustVegan)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
buttonSomeAll.addEventListener('click', sumeAllItens)
buttonFilterAll.addEventListener('click', filterAllItens)

