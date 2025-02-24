// Styles
import "./styling/main.scss";

// Components
import { Countries } from "./pages/countries/Countries";

// Providers
import { CountriesProvider } from "./context/CountriesContext";
import { ThemeProvider } from "./context/ThemeContext";



const App = () => {
	
 	return (
		<ThemeProvider>
			<CountriesProvider>
				<Countries />
			</CountriesProvider>
		</ThemeProvider>

	);
};

export default App;
