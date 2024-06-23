import Login from "@/pages/login/Login";
import { ThemeProvider } from "@/components/theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Login />
    </ThemeProvider>
  );
}

export default App;
