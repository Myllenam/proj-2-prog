import { Router } from "./providers/AppRouterProvider";
import { AppThemeProvider } from "./providers/AppThemeProvider";



function App() {

  return (
    <AppThemeProvider>
   <Router/>
   </AppThemeProvider>
  );
}

export default App;
