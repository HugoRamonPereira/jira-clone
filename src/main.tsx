import App from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner';
import { GreenCheck } from './assets/illustrations/green-check.tsx';
import { RedClose } from './assets/illustrations/red-close.tsx';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster 
        richColors 
        icons={{
          success: <GreenCheck />,
          error: <RedClose />   
        }}
        toastOptions={{
          classNames: {
            title: 'font-nauman-regular'
          }
        }}
      />
    </QueryClientProvider>
  </StrictMode>,
)
