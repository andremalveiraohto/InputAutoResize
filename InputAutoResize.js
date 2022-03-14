const InputAutoResize = (config) => {
  config =  {
    fontFamily: (config && config.fontFamily) ?? 'auto',
    fontSize: (config && config.fontSize) ?? 'initial',
    padding: (config && config.padding) ?? null
  }
  let autoResizeStyle = document.createElement('style')
      autoResizeStyle.textContent = `
        input[autoresize], div.input-autoresize {
          font-family: ${config.fontFamily};
          font-size: ${config.fontSize}px;
          ${config.padding ? `padding: ${config.padding}px` : ''}
        }
        div.input-autoresize {
          width: auto;
          display: inline-block;
          visibility: hidden;
          position: fixed;
          overflow: auto;
          white-space: pre;
        }
      `
      autoResizeStyle.id = 'autoresize-style'
  document.head.append(autoResizeStyle)
  
  let getWidth = (value) => {
    let div = document.createElement('div');
    div.innerHTML = value;
    div.className = 'input-autoresize'
    document.body.append(div)
    let width = div.clientWidth;
    div.remove();
    return width;
  };
  
  document.querySelectorAll('input[autoresize]').forEach(input => {
    let initialWidth = input.attributes.width 
    ? Number(input.attributes.width.value) 
    : 200;
    let initialMaxWidth = input.attributes.maxWidth 
    ? Number(input.attributes.maxWidth.value) 
    : null;
    console.log(input)
  
    if(initialWidth) {input.style.width = initialWidth+'px'}
    if(initialMaxWidth != null && initialMaxWidth != undefined) {
      input.style.maxWidth = initialMaxWidth+'px'
    } 
    if (input.attributes.maxWidth 
      && input.attributes.maxWidth.value.includes('#')) {
      let container = input.closest(input.attributes.maxWidth.value)
  
      let div = document.createElement('div');
      div.style.width = '100%'
      container.append(div)
      let width = div.clientWidth;
      div.remove();
  
      input.style.maxWidth = (width - 7)+'px'
  
    }
  
    input.addEventListener('input', e => {
      let inputValue = e.target.value
      let width = getWidth(inputValue)
  
      if(width > initialWidth) {
        input.style.width = width+'px'
      }
      if(inputValue == '') {
        input.style.width = initialWidth+'px'
      }
    }) 
  })
  }