import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {MantineProvider} from "@mantine/core";
import {ModalsProvider} from "@mantine/modals";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>

      <MantineProvider>
          <ModalsProvider>
              <App />
          </ModalsProvider>
      </MantineProvider>
  </BrowserRouter>,
)
