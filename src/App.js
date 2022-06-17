import './App.css';
import CustomerForm from './Components/CustomerForm';
import Email from './Components/Email';
import Hello from './Components/Hello';
import { CustomerProvider } from './Contexts/Customer';

function App() {
  return (
    <div className="app">
      <CustomerProvider>
        <CustomerForm />
        <Hello />
        <Email />
      </CustomerProvider>
    </div>
  );
}

export default App;
