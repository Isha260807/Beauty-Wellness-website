//import logo from "../assets/perfum.jpg";
import ImageSlider from "../components/ImageSlider";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <div className="w-full  bg-gradient-to-b from-[#f5f0d8] to-[#e9e3c2]">
      <h1 className="text-4xl text-center font-medium text-black hover:text-orange-400 cursor-pointer py-4 font-serif">
        BUY NOW, PAY LATER
      </h1>

      <ImageSlider />
      <Gallery />

    </div>
  );
}



export default Home;
