import meme2 from "../assets/washee-1.JPG";
import meme3 from "../assets/washee-2.JPEG";
import meme4 from "../assets/washee-3.JPEG";
import meme5 from "../assets/washee-4.JPEG";
import meme6 from "../assets/washee-5.JPEG";
import meme7 from "../assets/washee-6.JPEG";

const Memes = () => {
  return (
    <div className="px-4">
      <h2 className="text-[2rem] font-bold text-white text-center">MEMES</h2>
      <div className="grid grid-cols-3 gap-[20px] lg:gap-12 py-20">
        <img src={meme2} alt="meme2" style={styles.image} />
        <img src={meme3} alt="meme3" style={styles.image} />
        <img src={meme4} alt="meme4" style={styles.image} />
        <img src={meme5} alt="meme5" style={styles.image} />
        <img src={meme6} alt="meme6" style={styles.image} />
        <img src={meme7} alt="meme7" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  image: {
    width: "100%", // Ensures images fit the grid cells
    height: "fit",
  },
};

export default Memes;
