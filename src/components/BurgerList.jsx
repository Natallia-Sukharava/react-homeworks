import React from "react";

const burgers = [
  { id: 1, name: "Burger Dreams", price: "$9.50", image: "burger1.png" },
  { id: 2, name: "Burger Cali", price: "$8.00", image: "burger2.png" },
  { id: 3, name: "Burger Spicy", price: "$9.00", image: "burger3.png" },
  { id: 4, name: "Burger Waldo", price: "$10.00", image: "burger4.png" },
  { id: 5, name: "Burger Bacon Buddy", price: "$8.50", image: "burger5.png" },
  { id: 6, name: "Burger Classic", price: "$8.00", image: "burger6.png" }
];

const BurgerList = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Browse our menu</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
        {burgers.map((burger) => (
          <div key={burger.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
            <img src={`/${burger.image}`} alt={burger.name} style={{ width: "100%", borderRadius: "8px" }} />
            <h3>{burger.name}</h3>
            <p>{burger.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BurgerList;
