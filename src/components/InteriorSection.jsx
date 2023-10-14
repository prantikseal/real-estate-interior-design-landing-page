import SectionHeader from "./SectionHeader";
import "./InteriorSection.scss";

const InteriorSection = () => {
  const InteriorSectionData = [
    {
      icon: "MODULAR KITCHEN.png",
      content: "Modular Kitchen",
    },
    {
      icon: "BEDROOM.png",
      content: "Bedroom",
    },
    {
      icon: "MODULAR KITCHEN.png",
      content: "Modular Kitchen",
    },
    {
      icon: "BEDROOM.png",
      content: "Bedroom",
    },
    {
      icon: "BEDROOM.png",
      content: "Bedroom",
    },
    {
      icon: "MODULAR KITCHEN.png",
      content: "Modular Kitchen",
    },
    {
      icon: "BEDROOM.png",
      content: "Bedroom",
    },
    {
      icon: "MODULAR KITCHEN.png",
      content: "Modular Kitchen",
    },
    {
      icon: "BEDROOM.png",
      content: "Bedroom",
    },
    {
      icon: "BEDROOM.png",
      content: "Bedroom",
    },
    {
      icon: "MODULAR KITCHEN.png",
      content: "Modular Kitchen",
    },
    {
      icon: "BEDROOM.png",
      content: "Bedroom",
    },
    {
      icon: "MODULAR KITCHEN.png",
      content: "Modular Kitchen",
    },
    {
      icon: "BEDROOM.png",
      content: "Bedroom",
    },
    {
      icon: "BEDROOM.png",
      content: "Bedroom",
    },
  ];
  return (
    <div className="interior-section">
      <SectionHeader heading="Interiors that Wow !" />
      <h3 className="interior-section__subheading">
        From Dream to <span className="red-txt">Reality</span>: Our Design
        Wizards Make Your Home Fantastically{" "}
        <span className="red-txt">Functional</span>!
      </h3>
      <div className="interior-section__items">
        {InteriorSectionData.map((item, index) => (
          <div className="interior-section__item" key={index}>
            <div className="interior-section__item__icon">
              <img src={item.icon} alt={item.icon} />
            </div>
            <div className="interior-section__item__content">
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="">Get Free Estimate</a>
    </div>
  );
};

export default InteriorSection;
