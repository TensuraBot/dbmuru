import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Yokoso di Rimuru Gacha</h1>
      <p>Temukan kartu Tensura favoritmu dan mulai bermain!</p>
      <Link href="/register">
        <button style={{ margin: '10px' }}>Daftar</button>
      </Link>
      <Link href="/login">
        <button style={{ margin: '10px' }}>Login</button>
      </Link>
    </div>
  );
  }
