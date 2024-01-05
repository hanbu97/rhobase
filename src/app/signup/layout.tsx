import Backgroud from "./_components/background";

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="flex w-full h-full flex-col items-center justify-center bg-black">
        <Backgroud />
        {children}
      </body>
    </html>
  );
};

export default SignUpLayout;
