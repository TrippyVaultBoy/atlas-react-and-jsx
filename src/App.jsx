import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HelpfulResource from "./components/HelpfulResource";
import Section from "./components/Section";

function App() {
  return (
    <div className="">
      <Header />
      
      <Section title="What is react?">
        <p>React is a free and open-source front-end JavaScript library developed by Facebook (Meta) for building user interfaces. It uses a component-based architecture and a virtual DOM to make creating interactive and dynamic UIs easier and more efficient.</p>
      </Section>
      
      <Section title="Benefits of react">
        <ul>
          <li>Component-Based Architecture</li>
          <li>Virtual DOM for Performance</li>
          <li>Declarative Syntax</li>
          <li>Strong Ecosystem</li>
          <li>JSX Syntax</li>
        </ul>
      </Section>

      <Section title="Helpful resources">
        <HelpfulResource label="Target='_blank' - the most underestimated vulnerability ever" link="https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/"/>
        <HelpfulResource label="What is JSX?" link="https://atlas-jswank.github.io/blog/jsx/#event-handling"/>
        <HelpfulResource label="W3 Schools React Tutorial" link="https://www.w3schools.com/react/default.asp"/>
      </Section>

      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;
