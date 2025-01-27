import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const res = await axios.get("https://dbmuru.vercel.app/user", {
          headers: { Authorization: token },
        });
        setUser(res.data);
      } catch (err) {
        console.error(err);
        router.push("/login");
      }
    };
    fetchUser();
  }, [router]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dashboard</h1>
      <p>Nomor WhatsApp: {user.whatsappNumber}</p>
      <p>Yen: ¥{user.yen}</p>
      <p>Level: {user.level}</p>
      <p>Nickname: {user.nickname}</p>
      <p>Inventori: {user.inventory.join(", ") || "Kosong"}</p>
    </div>
  );
}
