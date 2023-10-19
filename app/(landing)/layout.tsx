import Footer from "@/components/footer";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="">
        <LandingNavbar />
        <div className="">
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default LandingLayout;
