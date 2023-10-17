import Footer from "@/components/footer";
import { LandingNavbar } from "@/components/landing-navbar";
import Providers from "@/lib/Providers";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <main className="bg-[#111827]">
        <LandingNavbar />
        <div className="">
          {children}
          <Footer />
        </div>
      </main>
    </Providers>
  );
};

export default LandingLayout;
