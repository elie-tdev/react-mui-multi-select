import { MultiSelectData } from "../components/multiselect/data";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MultiSelectData />
    </QueryClientProvider>
  );
}

export default App;
