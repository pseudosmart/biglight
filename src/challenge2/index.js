((history) => {
  window.onload = () => {
    const banner = document.createElement('div')
    banner.className = 'banner'

    banner.innerHTML = `
    <h3>Get 50% off <br/> all Amazon products</h3>
    <p>Use code: <span>AZ50</span></p>
    <p>T&Cs Apply</p>
  `
    insertBanner(banner)
    history.pushState = () => {
      waitForElementToDisplay("[data-component-type='s-search-result']", () => insertBanner(banner), 1000, 9000)
    }
  }
})(window.history)

const insertBanner = function (banner) {
  const node = document.querySelector("[data-component-type='s-search-result']")
  node.parentNode.insertBefore(banner, node.nextSibling)
}

function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) { //pinched from online. only required for the filters and waiting for the element to load
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}
