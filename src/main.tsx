import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { ClientSideRowModelModule, ModuleRegistry } from 'ag-grid-community'
ModuleRegistry.registerModules([ClientSideRowModelModule])

import 'virtual:svg-icons/register'

import App from './App'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</StrictMode>
)
