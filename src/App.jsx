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
        <p>Laboris irure enim exercitation incididunt amet culpa sit cillum et elit do enim. Voluptate commodo eu consectetur laboris ea consequat pariatur cillum anim labore fugiat pariatur. Ea duis sint mollit quis culpa cupidatat sunt quis cillum. Reprehenderit laboris mollit cupidatat ullamco aliqua aliqua sunt culpa commodo ea. Est ipsum esse aute cupidatat. Qui anim amet aute voluptate incididunt labore duis proident fugiat excepteur irure.</p>
      </Section>
      
      <Section title="Benefits of react">
        <ul>
          <li>Commodo excepteur do ea aliquip eu commodo.</li>
          <li>Sint fugiat labore elit quis aute in.</li>
          <li>Aute aliquip sint tempor enim pariatur incididunt irure consectetur.</li>
        </ul>
      </Section>

      <Section title="Helpful resources">
        <HelpfulResource label="Target='_blank' - the most underestimated vulnerability ever" link="https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/"/>
        <HelpfulResource label="Eiusmod ipsum mollit est consectetur" link=""/>
        <HelpfulResource label="Veniam qui fugiat elit magna nostrud" link=""/>
      </Section>

      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;
