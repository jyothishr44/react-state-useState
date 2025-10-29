import Fruit from "./Fruit";

function Fruits() {
  //const fruits = ["apple", "orange", "grapes", "banana"];
  const fruits = [
    { name: "apple", price: 10, emoji: "🍎" },
    { name: "orange", price: 4, emoji: "🍊" },
    { name: "grapes", price: 1, emoji: "🍇" },
    { name: "banana", price: 5, emoji: "🍌" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <Fruit
            key={index}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
