
import { Component, createElement } from './framework'

class Carousel extends Component {
  constructor () {
    super()
    this.attributes = Object.create(null)
  }

  setAttribute (name, value) {
    this.attributes[name] = value
  }

  render () {
    this.root = document.createElement('div')
    this.root.classList.add('carousel')
    for (const record of this.attributes.src) {
      const child = document.createElement('div')
      child.style.backgroundImage = `url(${record})`
      this.root.appendChild(child)
    }

    // 自动滚动
    let currentIndex = 0
    setInterval(() => {
      const children = this.root.children
      const nextIndex = (currentIndex + 1) % children.length
      const current = children[currentIndex]
      const next = children[nextIndex]
      next.style.transition = 'none'
      next.style.transform = `translateX(${100 - nextIndex * 100}%)`
      setTimeout(() => {
        next.style.transition = ''
        current.style.transform = `translateX(${-100 - nextIndex * 100}%)`
        next.style.transform = `translateX(${-nextIndex * 100}%)`
        currentIndex = nextIndex
      }, 16)
    }, 500)

    let position = 0
    this.root.addEventListener('mousedown', event => {
      const children = this.root.children
      const startX = event.clientX

      const move = event => {
        const x = event.clientX - startX
        for (const child of children) {
          child.style.transition = 'none'
          child.style.transform = `translateX(${-position * 500 + x}px)`
        }
      }

      const up = event => {
        const x = event.clientX - startX
        position = position - Math.round(x / 500)
        for (const child of children) {
          child.style.transition = ''
          child.style.transform = `translateX(${-position * 500}px)`
        }

        document.removeEventListener('mousemove', move)
        document.removeEventListener('mousemove', up)
      }

      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    })

    return this.root
  }

  mountTo (parent) {
    parent.appendChild(this.render())
  }
}

const d = [
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2496108773,1184907096&fm=26&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3242163085,3016324050&fm=26&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1974728075,625919050&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2431096445,1476649752&fm=26&gp=0.jpg'
]

const a = <Carousel src={d} />

// document.body.appendChild(a)
a.mountTo(document.body)
