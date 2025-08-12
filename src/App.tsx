// Styles
import "./styling/main.scss";

// Components
import { Countries } from "./pages/countries/Countries";

// Providers
import { CountriesProvider } from "./context/CountriesContext";
import { ThemeProvider } from "./context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



const App = () => {

	const queryClient = new QueryClient();

 	return (

		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<CountriesProvider>
					<Countries />
				</CountriesProvider>
			</ThemeProvider>
		</QueryClientProvider>

	);
};

export default App;
