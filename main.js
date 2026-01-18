const client = algoliasearch("V4ABXLXWBF", "c6cec5384aeac5fd8eff1ab0a7b98398");
const index = client.initIndex("search");


let resultsRootElement = document.querySelector('.results')


document.querySelector('#searchInput').addEventListener('keyup',()=>{
  let searchTerm = document.querySelector('#searchInput').value;
  let resultsArray = []
  if((searchTerm).trim().length > 0){
    index.search(searchTerm).then(response=>{
        renderProducts(response.hits)

    })

  }else{removeElements() }

})

function renderProducts(products){
  removeElements()
  
  products.forEach(product=>{renderSingleProduct(product)})
}
function renderSingleProduct(product){
  let resultDiv = document.createElement('div')
  let resultImage = document.createElement('img')
  let resultTitle = document.createElement('h4')
  let resultPrice = document.createElement('p')
  let PurchaseButton = document.createElement('button')

  resultImage.src = product.image
  resultTitle.innerText = product.title
  resultPrice.innerText = product.price
  PurchaseButton.innerText = 'purchase'

  resultDiv.appendChild(resultImage)
  resultDiv.appendChild(resultTitle)
  resultDiv.appendChild(resultPrice)
  resultDiv.appendChild(PurchaseButton)
  resultDiv.className = 'result'

  resultsRootElement.appendChild(resultDiv)

}

function removeElements(){

  document.querySelectorAll('.result').forEach(prod=>{
    prod.remove()})
}



