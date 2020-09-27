
export function createElement (Type, attributes, ...children) {
  let element
  if (typeof Type === 'string') {
    element = new ElementWrapper(Type)
  } else {
    element = new Type()
  }
  for (const name in attributes) {
    element.setAttribute(name, attributes[name])
  }
  for (let child of children) {
    if (typeof child === 'string') {
      child = new TextWrapper(child)
    }
    element.appendChild(child)
  }
  return element
}

export class Component {
  // constructor () {}

  setAttribute (name, value) {
    this.root.setAttribute(name, value)
  }

  appendChild (child) {
    child.mountTo(this.root)
  }

  mountTo (parent) {
    parent.appendChild(this.root)
  }
}

class ElementWrapper extends Component {
  constructor (type) {
    this.root = document.createElement(type)
  }
}

class TextWrapper extends Component {
  constructor (content) {
    this.root = document.createTextNode(content)
  }
}
