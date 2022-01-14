import { ChakraProvider } from '@chakra-ui/react'
import AccountProvider from './context/AccountProvider';
import PersonProvider from './context/PersonProvider';
// import Authentication from "./pages/Authentication";
import Check from './pages/Check';

function App() {
  return (
    <div className="App">
      <PersonProvider>
      <AccountProvider>
      <ChakraProvider>
      <Check />
      </ChakraProvider>
      </AccountProvider>
      </PersonProvider>
    </div>
  );
}

export default App;
