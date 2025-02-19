// Styles
import "./styling/main.scss";

// Components
import { Countries } from "./pages/countries/Countries";

// Providers
import { CountriesProvider } from "./context/CountriesContext";



const App = () => {
	
 	return (
		<CountriesProvider>
			<Countries />
		</CountriesProvider>
	);
};

export default App;
