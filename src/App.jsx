import Box from "./components/Box";

function App() {
  return (
    <main
      style={{ backgroundImage: "url(/images/hero_img.jpg)" }}
      className="min-h-screen w-full bg-no-repeat bg-contain bg-[#040711] pt-16"
    >
      <img
        src="/images/logo.svg"
        alt="logo de sitio web"
        className="mx-auto mb-10"
      />
      <Box />
    </main>
  );
}

export default App;
