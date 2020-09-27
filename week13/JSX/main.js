import { createElement } from './framework'
import {
  Carousel
} from './carousel'
import {
  Timeline, Animation
} from './animation'

const d = [
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2496108773,1184907096&fm=26&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3242163085,3016324050&fm=26&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1974728075,625919050&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2431096445,1476649752&fm=26&gp=0.jpg'
]

const a = <Carousel src={d} />

// document.body.appendChild(a)
a.mountTo(document.body)

const timeline = new Timeline()
timeline.add(new Animation({ set a (v) { console.log(v) } }, 'a', 0, 100, 1000, null))
timeline.start()
