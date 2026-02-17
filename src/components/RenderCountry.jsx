function RenderCountry({ davlatlar }) {
  return (
    <div>
      {davlatlar.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.flags.png} alt="" />
            <h2>{item.name.common}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default RenderCountry;
