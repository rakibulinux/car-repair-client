import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Providers from "@/lib/Providers";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <main className="h-full bg-[#111827] flex items-center justify-center">
        {children}
      </main>
      <Footer />
    </Providers>
  );
};

export default AuthLayout;
