import "./globals.css";

export const metadata = {
  title: "Real Estate",
  description: "Real estate listing website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
