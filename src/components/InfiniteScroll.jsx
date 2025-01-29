const InfiniteScroll = () => {
  return (
    <div className="wrapper bg-white">
      <div className="scrolling-text">
        {Array(8)
          .fill("How do I get him off")
          .map((text, index) => (
            <div key={index} className="item">
              {text}
            </div>
          ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
