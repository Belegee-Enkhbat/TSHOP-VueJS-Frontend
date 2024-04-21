import Cards from "../utils/Cards";

const TabContent = ({ items }: any) => {
  // console.log("items", items);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",

        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {items.map((Item: any) => (
        <Cards item={Item} />
      ))}
    </div>
  );
};

export default TabContent;
