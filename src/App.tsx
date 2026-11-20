import landingMarkup from './landing-content.html?raw'

export default function App() {
  return <div dangerouslySetInnerHTML={{ __html: landingMarkup }} />
}
