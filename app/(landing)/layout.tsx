import Footer from "@/components/footer";
import Providers from "@/lib/Providers";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <main className=" bg-[#111827]">
        <div className="">
          {children}
          <Footer />
        </div>
      </main>
    </Providers>
  );
};

export default LandingLayout;
