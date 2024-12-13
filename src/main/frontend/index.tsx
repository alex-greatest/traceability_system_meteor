/******************************************************************************
 * This file is auto-generated by Vaadin.
 * If you want to customize the entry point, you can copy this file or create
 * your own `index.tsx` in your frontend directory.
 * By default, the `index.tsx` file should be in `./frontend/` folder.
 *
 * NOTE:
 *     - You need to restart the dev-server after adding the new `index.tsx` file.
 *       After that, all modifications to `index.tsx` are recompiled automatically.
 *     - `index.js` is also supported if you don't want to use TypeScript.
 ******************************************************************************/

import {createContext, createElement} from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import {AuthProvider} from "Frontend/components/auth/auth";
import {createTheme, ThemeProvider} from "@mui/material";
import {pink} from "@mui/material/colors";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Context = createContext(null);

const theme = createTheme({
    palette: {
        primary: {
            main: '#ad302f',
        },
        secondary: pink,
    },
});

const queryClient = new QueryClient()

function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <Context.Provider value={null}>
                     <RouterProvider router={router} />
                </Context.Provider>
            </ThemeProvider>
        </AuthProvider>
      </QueryClientProvider>
    );
}

const outlet = document.getElementById('outlet')!;
let root = (outlet as any)._root ?? createRoot(outlet);
(outlet as any)._root = root;
root.render(createElement(App));

