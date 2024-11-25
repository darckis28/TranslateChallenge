import Box from "./components/Box";
import ContextGlobal from "./context/ContextGlobal";

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
      <ContextGlobal>
        <div className="flex flex-col xl:flex-row xl:justify-center w-full gap-5 px-5">
          <Box translate={true} />
          <Box />
        </div>
      </ContextGlobal>
    </main>
  );
}

export default App;
