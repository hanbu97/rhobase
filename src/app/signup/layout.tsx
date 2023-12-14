import Backgroud from "./_components/background";

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="flex h-full flex-col items-center justify-center">
        <Backgroud />
        {children}
      </body>
    </html>
  );
};

export default SignUpLayout;
