import washee from "../assets/washee-video.MP4";

const About = () => {
  return (
    <div className="mt-20">
      <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-white text-center ">
        About $MRWASHEE
      </h2>
      <div className="grid grid-cols-1 gap-[40px] lg:gap-12 py-20 ">
        <video
          src={washee}
          controls
          loop
          muted
          className=""
          style={styles.video}
          //   onCanPlayThrough={onAssetsLoaded}
        />
      </div>
    </div>
  );
};

const styles = {
  video: {
    width: "100%", // Ensures video fits the grid cell
    height: "auto",
  },
};

export default About;
