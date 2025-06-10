"use client"; 
import 'bootstrap/dist/css/bootstrap.min.css';  
import '@fortawesome/fontawesome-free/css/all.min.css';  
import './globals.css';  
import { useEffect } from 'react'; 

export default function RootLayout({ children }) {
  useEffect(() => {  
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('Bootstrap JS loaded successfully!'); 
      })
      .catch(error => {
        console.error('Error loading Bootstrap JS:', error);
      });
  }, []);  

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}