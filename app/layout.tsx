import "./globals.css";

const defaultUrl = "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Mentor Finder",
  description: "Match with a mentor/mentee and get to chatting!",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
