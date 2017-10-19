console.log('hi');

const Header = () => {
  return (

    <header>
    <h1>Hello world</h1>
    </header>
  )
}

const AboutMe = () => {
  return (

    <main>
    <h2>ha</h2>
    <img src="https://i.pinimg.com/236x/86/9b/6d/869b6d02226dfdd4b0ddc49086417f13--jabbas-palace-bibs.jpg"/>
    </main>
  )
}

const Footer = () => {
  return (

    <footer>
    <small>haha</small>
    </footer>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Footer />
    </div>
  )
}

ReactDOM.render(
  < App />,
  document.querySelector('#root')
)
