import ButtonComponent from "./components/ButtonComponent";

const App = () => {
  return (
    <div className="min-w-full min-h-screen flex items-center justify-center">
      <ButtonComponent variant="default" size="md">
        Click
      </ButtonComponent>
    </div>
  );
};

export default App;
