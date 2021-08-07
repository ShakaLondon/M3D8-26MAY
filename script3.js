
let inputObj

let favArray = []

let favNum = 0

let cartList = []

function removeItem (ID) {

  const position = cartList.indexOf(ID)

  cartList.splice(position, 1)

  let cartItem = document.querySelectorAll(`.ID${ID}`)

  console.log(cartItem)

}


function pushToCard (input) {

const eachCard = document.querySelectorAll("div.card")

// SELECT CARDS

console.log(eachCard)

let productnumber = input.length

for (x = productnumber; x < eachCard.length; x++) {

  eachCard[x].classList.add("displayNone")

}

for (x = 0; x < input.length; x++) {
// ON EACH CARD

const inputImage = input[x].imageUrl

// GET IMAGE DATA FROM JSON

const imgPrice = input[x].price

const poundprice = new Intl.NumberFormat('en-US',
{ style: 'currency', currency: 'USD' }
).format(imgPrice)

console.log(poundprice)

//GET BOOK PRICE

const productTitle = `${input[x].name}
                      ${input[x].brand}`

console.log(inputImage)

const cardID = input[x].asin

console.log(cardID)

// let card = document.querySelector(`.${eachCard[x]}`)

const imgElem = document.createElement('img')

// CREATE IMAGE ELEMENT

imgElem.src = inputImage

imgElem.alt = 'splash-base-image'

imgElem.height = '300'

imgElem.width = '100'

imgElem.classList.add('bd-placeholder-img', 'card-img-top',)

const svg = eachCard[x].firstElementChild

// SELECT ALL SVG ELEMENTS

eachCard[x].replaceChild(imgElem, svg)

const smallText = eachCard[x].querySelector('small')

smallText.innerHTML = poundprice

const titleText = eachCard[x].querySelector('p')

titleText.innerHTML = productTitle

// CREATE SPAN FOR ID

const spanID = document.createElement('span')

spanID.classList.add('hide', 'bookID')

spanID.innerHTML = cardID

eachCard[x].appendChild(spanID)

console.log(eachCard[x])

const groupButton = document.querySelectorAll('div.btn-group')

// ADD TO FAVOURITE EVENT LISTENER

const secondButton = eachCard[x].querySelectorAll('button')

secondButton[1].addEventListener('click', hideCard)

secondButton[0].addEventListener('click', addToCart)


}

for (x = 0; x < productnumber.length; x++) {

  eachCard[x].classList.remove("displayNone")

}

}



function refreshCart (e) {
    // const spanHiddenID = document.querySelectorAll('span.hide')

        // console.log(cartList)

        // cartList.forEach(ID => {

        // let listID = document.querySelector(ID)

        // console.log(listID)})

        const button = e.currentTarget

        console.log(button)

        const div = button.parentElement

        console.log(div)

        const cardBody = div.parentElement

        console.log(cardBody)

        const divCardBody = cardBody.parentElement

        console.log(divCardBody)

        const cardHead = divCardBody.parentElement

        const img = cardHead.children[0]

        console.log(img)

        const bookID = divCardBody.nextElementSibling

        console.log(bookID)

        const hiddenID = bookID.innerHTML

        const bookTitle = divCardBody.children[0]

        console.log(bookTitle)

        let priceP = cardBody.lastElementChild

        console.log(priceP)

        // let includedInArray = cartList.includes(hiddenID)

        // if (includedInArray !== true) {

            // const cardBody = span.previousElementSibling

            console.log(cardBody)

            const price = priceP.innerHTML

            // const titleP = elemTitleP.children[0]

            const title = bookTitle.innerHTML

            const shortTitle = title.slice(0, 40)

            // const img = cardBody.previousElementSibling

            console.log(img)

              // <div class="d-flex flex-row ml-0 mr-0 align-items-center relative margin-top">

            let cartElement = `
            <div class="d-flex flex-row ml-0 mr-0 align-items-center relative margin-top">
            <div class="row cartItem d-block border-top border-white"></div>

            <div class="col-2 d-inline-flex align-items-center justify-content-center mx-auto px-auto pl-4 imgDiv">
              
            </div> 
            <div class="col-6 d-inline-flex ml-0 px-auto mx-auto py-auto titleWidth">
              <span class="d-flex">
                 <p class="text-white ml-0 h7 py-2 mb-0">${shortTitle}</p>
              </span>
            </div> 
            <form class="d-inline-flex container-fluid my-0 px-0">
            <div class="col-3 d-inline-flex mx-0 pr-0 justify-content-center py-0 my-0">
            <div class="form-group my-0 py-0">
              <label for="itemnumber" class="text-center h7 text-warning">QTY</label>
              <select class="form-control form-contol-sm ID${hiddenID}" id="itemnumber">
                <option selected>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
              <p class="text-white h7 mx-auto my-0 py-0 itemPrice">${price}</p>
            </div>
            <!-- <div class="d-flex my-0">
                
            </div> -->

          </div>
          </form>
          <div class="col-2 d-inline-flex container-fluid ml-0 absolute px-0 deleteButton">
            <span class"">
                <i class="fa fa-times text-danger" onClick="removeItem('${hiddenID}')"></i>
            </span>

          </div>


          </div>
          `

        const imgClone = img.cloneNode()

        const imgCloneClass = ['bd-placeholder-img', 'card-img-top']

        imgClone.classList.remove(...imgCloneClass)

        imgClone.classList.add('cartImage')

        console.log(imgCloneClass)

          const newCartElement = document.createElement('div')

          newCartElement.classList.add("d-flex", "flex-row", "ml-0", "mr-0", "align-items-center", "relative", "margin-top")

          newCartElement.innerHTML = cartElement

          const imgDiv = newCartElement.querySelector('div.imgDiv')

          imgDiv.appendChild(imgClone)

          const cartBx = document.querySelector('#cartBox')

          cartBx.appendChild(newCartElement)

          const priceElement = document.getElementById('priceTotal')

          const itemPriceArray = document.querySelectorAll('.itemPrice')

          let costArray = []

          itemPriceArray.forEach(item => {
              let price = item.innerHTML
              let number = price.slice(1)
              let numPrice = Number(number)
              costArray.push(numPrice)
          })

          console.log(costArray)

          const reducer = (accumulator, currentValue) => accumulator + currentValue;



          let itemPriceSum = costArray.reduce(reducer)

          priceElement.innerHTML = `$${itemPriceSum.toFixed(2)}`


            
        // }
    

}

function changeSelected (ID) {
  // let numID = Number(ID)
  // console.log(numID)
  let cartItem = document.querySelector(`.ID${ID}`)
  console.log(cartItem)

  let numItems = cartItem.querySelector('option[selected]')
  console.log(numItems)

  let p = cartItem.nextElementSibling
  console.log(p)

  let price = p.innerHTML.slice(1)

  console.log(price)

  let nextNum = numItems.nextElementSibling
  console.log(nextNum)

  let cartValue = nextNum.innerHTML

  let itemTotal = price * cartValue

  p.innerHTML = `$${itemTotal.toFixed(2)}`

  const cartTotalElem = document.querySelector('#priceTotal')

  let cartTotal = cartTotalElem.innerHTML

  console.log(cartTotal)

  const newTotal = cartTotal.slice(1)

  const total = Number(newTotal) + Number(price)

  console.log(total)

  cartTotalElem.innerHTML = `$${total}`

  numItems.removeAttribute('selected')
  nextNum.setAttribute('selected', "")


}

function removeItem (removeID) {

  console.log(removeID)

  let position = cartList.indexOf(removeID)

  console.log(removeID)

  cartList.splice(position, 1)

  console.log(cartList)

  let cartBox = document.querySelector('#cartBox')

  console.log(cartBox)

  let deletedItem = cartBox.querySelector(`.ID${removeID}`)

  console.log(deletedItem)

  let formControl = deletedItem.parentElement

  let form1 = formControl.parentElement

  console.log(form1)

  let col1 = form1.parentElement

  console.log(col1)

  let div1 = col1.parentElement

  console.log(div1)

  div1.remove()
  
  let cards = document.querySelectorAll('.inCart')

  console.log(cards)

  cards.forEach(card => {
    const parentElem = card.parentElement
    console.log(parentElem)
    const div1 = parentElem.parentElement
    

    const cardBody = div1.parentElement

    const span = cardBody.nextElementSibling

    console.log(span)

    console.log(removeID)

    console.log(span.innerHTML)

    if (removeID === span.innerHTML) {
      card.classList.remove('inCart')
    }
  })

  


}

function addToCart (e) {
    const btnGroup = e.currentTarget.parentElement

    const cardBodydiv = btnGroup.parentElement

    const cardBody = cardBodydiv.parentElement

    console.log(cardBody)

    const spanbookID = cardBody.nextElementSibling

    console.log(spanbookID)

    const bookID = spanbookID.innerHTML

    console.log(bookID)

    const spanList = document.querySelectorAll('span.hide')

    console.log(spanList)

    let duplicatecheck = cartList.includes(bookID)

    console.log(duplicatecheck)

    let bookIndex = cartList.indexOf(bookID)

    console.log(bookIndex)

    duplicatecheck !== true ? (cartList.push(bookID), e.currentTarget.classList.add('inCart'), refreshCart(e)): changeSelected(bookID)

    

    console.log (cartList)


}

function hideCard (e) {

    const btnGroup = e.currentTarget.parentElement

    console.log(btnGroup)

    const div = btnGroup.parentElement

    console.log(div)

    const cardBody = div.parentElement

    console.log(cardBody)

    const card = cardBody.parentElement

    console.log(card)

    card.classList.add('displayNone')

    }


async function getPictures(url = '', data = {}) {
    // FETCH IMAGE DATA
  const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
    "method": "GET",
    headers: {
      // "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwZGZiYmRjMTQ1ODAwMTVlNGFlZTUiLCJpYXQiOjE2MjgxNzI3NTIsImV4cCI6MTYyOTM4MjM1Mn0.3l9bESPIwfdvbcwKBLjVi2ide2sD5OOQKNVOKwS5nEs"
    },
  })
  .then(data => data.json())
  .then(jsondata => {
    // LOG JSON DATA
    console.log('Output Data', jsondata)



    inputObj = jsondata

  console.log(inputObj)

  favArray = JSON.parse(JSON.stringify(inputObj))

  console.log('Favourite Array', favArray)

  pushToCard (inputObj) 
    //this is your data
    //you can do everything here :)
  })
  // .then(()=> {
  //   favArray = [...inputObj]
  //   console.log(`Favourites ${favArray}`)
  // })

  .catch(err => {
    console.error(err);
  });

}

getPictures()

// function addToFavs (e) {
//   console.log(e.target)
// }


function editToHeartFav () {

let groupButton = document.querySelectorAll('div.btn-group')


for (y=0; y<groupButton.length; y++) {
let secondButton = groupButton[y].children[1]

secondButton.innerHTML = `<i class="far fa-heart"></i>`

// secondButton.addEventListener('click', addToFavs())

}

}

// editToHeartFav()

function editToHide () {

    let groupButton = document.querySelectorAll('div.btn-group')
    
    
    for (y=0; y<groupButton.length; y++) {
    let secondButton = groupButton[y].children[1]
    
    secondButton.innerHTML = `Hide`
    
    // secondButton.addEventListener('click', addToFavs())
    
    }
    
    }

editToHide()

function addToCartButton() {

let groupButton = document.querySelectorAll('div.btn-group')

for (y=0; y<groupButton.length; y++) {
let secondButton = groupButton[y].children[0]

secondButton.innerHTML = `Add to Cart  <i class="fa fa-cart-plus"></i>`

}

}

addToCartButton()



function openNav() {
document.getElementById("sideNav").style.width = "300px";
document.getElementById("page-top").style.marginRight = "300px";

let inline = document.querySelectorAll(".inline") 

inline.forEach(element => {

element.style.width = "300px"

});
}

function closeNav() {
document.getElementById("sideNav").style.width = "0";
document.getElementById("page-top").style.marginRight = "0";
let inline = document.querySelectorAll(".inline") 

inline.forEach(element => {

element.style.width = "0"

});

}