var readMore

readMore = (function () {
  let _public = {
    clicked: onClicked,
  }

  function onClicked(target) {
    let cardTextElement = target.parentNode

    let dots = getChildNode(cardTextElement.childNodes, "dots")
    let moreText = getChildNode(cardTextElement.childNodes, "more")
    let btnText = target

    if (!dots || !moreText) return

    if (dots.style.display === "none") {
      dots.style.display = "inline"
      btnText.innerHTML = "Read more &gt;&gt;&gt;"
      moreText.style.display = "none"
    } else {
      dots.style.display = "none"
      btnText.innerHTML = "&lt;&lt;&lt; Read less"
      moreText.style.display = "inline"
    }
  }

  function getChildNode(childNodes, id) {
    for (let i = 0; i < childNodes.length; i++) {
      let node = childNodes[i]
      if (node.id === id) {
        return node
      }
    }
    return null
  }

  return _public
})()
