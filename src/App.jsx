import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-cenetr">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
// https://youtu.be/0fYi8SGA20k?list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR&t=1168
// 40:45 finished... navbar sidyo aba hero ko polo rey
// 56:22 ma adkya... console ma errors xa.. computer ma ni ramro sanga light ako xaina
// 58:14 hero sidyo... but break vayo reload garda so CanvasLoder incomplete varera rey. next time canvas loader
// 1:05:05 working on Computer.jsx, where if the user is loading website in mobile device or desktop
// 1:07:40 finsihed working on Hero totally, now starting on 'About'
// 1:17:40 about section ko half sidiyo
// 1:28:00 , mcurrently doing expirence thingy... half done i guess
// 1:34:12 finished Experience.jsx. verticle timeline is awesome, now starting Tech section
// 1:44:10 Tech section is done, for some reason my balls arent floating moving by itself, im gonna copy pase and see
// 1:56:29 currently doing Tilt project decription part... chya banauna jana paryo
// 2:01:10 starting testimonial from here...
// 2:13:10 finished testimonial and starting contach btw contact has really cool effects (3d stars bg, 3d planet)
// 2:40:05 to create emailjs account 
// 2:50"30 he will teach how to host website in hostinger