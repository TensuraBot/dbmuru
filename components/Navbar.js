import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link href="/">Rimuru Gacha</Link>
      </div>
      <ul style={styles.navLinks}>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/items">Items</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#222",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
  },
  logoutButton: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "1px solid #fff",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  },
};

export default Navbar;
  
