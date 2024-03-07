import './App.css'

import MediaSection from './pages/media/media-page'
import { CMSInterface } from './composites'
import { SnackbarProvider } from 'notistack'

function App () {
  return (
    <SnackbarProvider maxSnack={5}>
      {/* <MediaSection /> */}
    </SnackbarProvider>
  )
}

export default App
