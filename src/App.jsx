import MessageCard from './MessageCard';

function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      
      {/* Card 1 */}
      <MessageCard 
        title="Welcome!" 
        message="This is the first card using props." 
      />

      {/* Card 2 */}
      <MessageCard 
        title="Did you know?" 
        message="React components are reusable like Lego blocks." 
      />

      {/* Card 3 */}
      <MessageCard 
        title="Assignment Update" 
        message="You have successfully passed data via props!" 
      />

    </div>
  );
}

export default App;