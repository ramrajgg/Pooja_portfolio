// pages/_app.js
import '../styles/globals.css'; // Import Tailwind and global styles

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* Wrap the app in a layout */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;