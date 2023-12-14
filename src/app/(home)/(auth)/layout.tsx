const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="flex h-full flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
};

export default AuthLayout;
