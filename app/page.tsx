import Navbar from "@/ui/landingPage/navbar";
import LeftCol from "@/ui/landingPage/leftCol";
import RightCol from "@/ui/landingPage/rightCol";
import Footer from "@/ui/landingPage/footer";
import header from "./header.png";
export default function Home() {
  return (
    <div
      className="leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed"
      style={{ backgroundImage: `url(${header.src})` }}
    >
      <div className="h-full">
        {/*Nav*/}
        <Navbar />
        {/*Main*/}
        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/*Left Col*/}
          <LeftCol />
          {/*Right Col*/}
          <RightCol />
          {/*Footer*/}
          <Footer />
        </div>
      </div>
    </div>
  );
}
