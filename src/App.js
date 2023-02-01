import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './paintings.json';

function App() {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>

      <Section title="Лучшее"></Section>
    </div>
  );
}

export default App;
