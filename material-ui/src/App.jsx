import YouTubeLogo from "./assets/youtube.svg"
import YouTubeIcon from '@mui/icons-material/YouTube';

const App = () => {
  return (
    <>
      <YouTubeIcon />
      <object type="image/svg+xml" data={YouTubeLogo} width="100" height="100">
        Your browser does not support SVG
      </object>

    </>
  )
}

export default App