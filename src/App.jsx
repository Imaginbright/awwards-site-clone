import Hero from "./components/HeroComponent";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />

      <section className="z-0 min-h-screen bg-blue-400" />
    </main>
  );
};

export default App;
