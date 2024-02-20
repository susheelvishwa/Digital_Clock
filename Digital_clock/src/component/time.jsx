let currenttime = () => {
  let time = new Date();
  return (
    <>
      <p>
        {" "}
        today's date is: {time.toLocaleDateString()} and time :
        {time.toLocaleTimeString()}
      </p>
      ;
    </>
  );
};

export default currenttime;
