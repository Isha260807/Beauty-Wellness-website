import logo from "../assets/perfum.jpg";
import ImageSlider from "../components/ImageSlider";

function Home() {
  return (
    <div className="text-black">
      <h1 className="text-4xl text-center font-semibold text-orange-300 hover:text-orange-400 cursor-pointer py-4 font-serif">
        BUY NOW, PAY LATER
      </h1>

      <ImageSlider />
    </div>
  );
}

export default Home;
