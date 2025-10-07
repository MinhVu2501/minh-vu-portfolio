import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <Section id="about" title="About">
          <About />
        </Section>
        <Section id="skills" title="Skills">
          <Skills />
        </Section>
        <Section id="projects" title="Projects">
          <Projects />
        </Section>
        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  )
}

export default App
