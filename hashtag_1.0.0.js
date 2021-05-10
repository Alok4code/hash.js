function #(sel)
{
const self = {
    element: document.querySelector(selector),
    html: ()=> self.element,
    on: (event, callback) => {
      self.element.addEventListener(event, callback)
    },
    hide: ()=> {
      self.element.style.display = 'none'
    },
    attr: (name, value) => {
      if(value == null)
        return self.element.getAttribute(name)
      else
        self.element.setAttribute(name, value)
    },
    show: () => {
        self.element.style.display = "" 
    },
    append: (text) => {
        self.element.innerHTML = self.element.innerHTML + text
    },
    prepend: (text) => {
        self.element.innerHTML = text + self.element.innerHTML
    },
    








  }
return self;
}
