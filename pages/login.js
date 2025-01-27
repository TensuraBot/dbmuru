import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function Login() {
  const [formData, setFormData] = useState({ whatsappNumber: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://tensuradb.vercel.app/login", formData);
      localStorage.setItem("token", res.data.token);
      toast.success("Login berhasil!");
      router.push("/dashboard");
    } catch (err) {
      toast.error("Gagal login: " + err.response.data);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="whatsappNumber"
          placeholder="Nomor WhatsApp"
          value={formData.whatsappNumber}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
