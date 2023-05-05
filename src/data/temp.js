const App = () => {
  const a = "hi";
  const b = "bye";
  const value = useMemo(() => ({ a, b }), [a, b]);

  return (
    <AppContext.Provider value={value}>
           <ComponentA />
        {" "}
    </AppContext.Provider>
  );
};

const ComponentA = React.memo(() => <ComponentB />);
const ComponentB = () => <ComponentC />;
const ComponentC = () => {
  const contextValue = useContext(AppContext);
  return null;
};
