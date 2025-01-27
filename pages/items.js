import { useEffect, useState } from "react";
import axios from "axios";

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("https://your-backend.vercel.app/items");
        setItems(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchItems();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Daftar Kartu Gacha</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {items.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <img src={item.link} alt={item.name} width="150" />
            <p>{item.name}</p>
            <p>Bintang: {item.star}</p>
            <p>Harga: ¥{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
