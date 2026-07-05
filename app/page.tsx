'use client';
import { Turnstile } from '@marsidev/react-turnstile';
import { useState } from 'react';
import MusicPlayer from './MusicPlayer';
import GameCard from './GameCard';
export default function Page() {
  const [showQR, setShowQR] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  if (!isVerified) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Turnstile 
          siteKey="0x4AAAAAADwH9-3KCJM6Gcws" 
          onSuccess={() => setIsVerified(true)} 
        />
      </div>
    );
  }
  return (
    <main style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      
      {/* 1. Ảnh nền (Phải để file background.jpg trong folder public) */}
      <img
        src="/background.jpg"
        alt="Background"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      />

      {/* 2. Thanh Menu (Navbar) */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 50px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        border: 'none',
        backdropFilter: 'blur(10px)'
      }}>
        {/* Phần Logo mới: Icon + RGVN + VN VAULT */}
<div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: 'white' }}>
  {/* Icon - Bạn có thể dùng emoji hoặc thẻ img */}
  {/* Thay thế đoạn div chứa emoji bằng thẻ img */}
<img 
  src="/anhnenmartin.png" 
  alt="Logo" 
  style={{ 
    width: '50px',   // Điều chỉnh độ rộng tùy ý
    height: '50px',  // Giữ chiều cao bằng độ rộng để ảnh không bị méo
    objectFit: 'contain' // Đảm bảo ảnh hiển thị đầy đủ không bị cắt
  }} 
/>
  
  {/* Khối chữ chồng lên nhau */}
  <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
    <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '1px' }}>RGVN</span>
    <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#a3a3a3' }}>
      VN VAULT
    </span>
  </div>
</div>
        
        <div style={{ display: 'flex', gap: '30px', color: 'white', fontSize: '16px' }}>
          <span>Game Mới</span>
          <span>Game Hot</span>
          <span>Game Được Nhiều Lượt Tải</span>
          <span onClick={() => setShowQR(true)} style={{ cursor: 'pointer' }}>
        Donate
      </span>

      {/* Modal QR */}
      {showQR && (
        <div 
          style={{
            position: 'fixed', top: 0, left: 10, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', 
            justifyContent: 'center', alignItems: 'center', zIndex: 9999
          }} 
          onClick={() => setShowQR(false)}
        >
          <img src="/qrdonate.png" alt="Donate QR" style={{ width: '500px' }} />
        </div>
      )}
          <a href="https://www.facebook.com/profile.php?id=61576689010024" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
  Facebook
</a>
          <a href="https://discord.gg/xYRfjPWA" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
  Discord
</a>

        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <input
            placeholder="Tìm theo tên game, tag, developer..."
            style={{
              padding: '12px 20px',
              borderRadius: '25px',
              border: '1px solid rgba(207, 5, 5, 0.2)',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              color: 'white',
              width: '350px', // Tăng độ dài
              outline: 'none'
            }}
          />
          <button style={{ padding: '8px 20px', backgroundColor: '#38bdf8', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer' }}>
            Đăng nhập
          </button>
        </div>
      </nav>

      {/* 3. Tiêu đề giữa màn hình */}
      <div style={{
        textAlign: 'center',
        marginTop: '10px',
        color: 'white',
        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' // Thêm bóng đổ giúp chữ nổi bật trên mọi nền
}}>
        <h1 style={{ fontSize: '80px', margin: 0 }}>Realm Game VN</h1>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Vương quốc trò chơi Visual Novel 18+ Việt Hóa
        </p>
      </div>
      <MusicPlayer />
      
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', // 4 cột bằng nhau
        gap: '30px', 
        padding: '50px 60px' 
      }}>
        {/* Ví dụ gọi component GameCard đã tạo */}
        <GameCard 
          title="DAWNFALL"
          slug="dawnfall" 
          image="/game1.png" 
          rating="4.1" 
          downloads="69" 
          views="970" 
        />
      </div>
    
    </main>
  );
}