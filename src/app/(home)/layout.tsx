import { Medal } from "lucide-react"; 

const HomeLayout = ({ children } : {
    children: React.ReactNode
}) => (
  <html lang="en">
    <body className="flex h-full flex-col items-center justify-between p-24">{children}</body>
  </html>
)

export default HomeLayout;