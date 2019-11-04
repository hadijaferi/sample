function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

// toye props ha mitoninm ye component hm pass bediiim*****
function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}

export default App;
