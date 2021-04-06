(() => {
  window.onload = () => {
    const node = document.querySelector('body')
    const quantitySelector = document.getElementById('mobileQuantitySelection').cloneNode(true)
    const basketButton = document.getElementById('buybox.addToCart').cloneNode(true)


    const banner = document.createElement('div')
    banner.className = 'banner clearfix'

    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'buy-button'
    buttonContainer.appendChild(basketButton)

    banner.appendChild(quantitySelector)
    banner.appendChild(buttonContainer)

    node.appendChild(banner)

    node.parentNode.insertBefore(banner, node.nextSibling)


    const isInViewport = (boundary) => (
      boundary.top >= 0 &&
      boundary.left >= 0 &&
      boundary.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      boundary.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )

    document.addEventListener('scroll', () => {
      const buyButtonBox = document.querySelector('#add-to-cart-button').getBoundingClientRect()
      if (isInViewport(buyButtonBox)) {
        banner.classList.add('hide')
      } else {
        banner.classList.remove('hide')
      }
    })

    quantitySelector.onchange = () => {
      const quantity = document.querySelector('.banner #mobileQuantityDropDown') //not a huge fan of this...
      document.querySelector('#mobileQuantityDropDown').value = quantity.value
      document.querySelector('#mobileQuantity_feature_div span.a-dropdown-prompt').innerText = quantity.value
    }

    basketButton.onclick = () => { document.getElementById('add-to-cart-button').click() } 
  }
})()