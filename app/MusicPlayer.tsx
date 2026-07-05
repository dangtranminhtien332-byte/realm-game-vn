'use client';
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// 1. Tạo danh sách bài hát của bạn ở đây
const playlist = [
  { name: "Bài 1", src: "/music/lantern_night_lofi.mp3" },
  { name: "Bài 2", src: "/music/moonlit_whisper.mp3" },
  { name: "Bài 3", src: "/music/aheia3.mp3" },
  { name: "Bài 4", src: "/music/v21c6k.mp3" },
  { name: "Bài 5", src: "/music/cj8jfw.wav" },
];

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);

  // Hàm để chuyển bài tiếp theo
  const handleClickNext = () => {
    setCurrentTrack((prev) => (prev < playlist.length - 1 ? prev + 1 : 0));
    
  };
  const handleClickPrevious = () => {
  setCurrentTrack((prev) => (prev > 0 ? prev - 1 : playlist.length - 1));
};

  return (
<div style={{ 
    position: 'absolute', 
    top: '90px', 
    right: '80px', 
    width: '250px', 
    zIndex: 9999,
    // --- CHỈNH MÀU Ở ĐÂY ---
    backgroundColor: 'rgba(185, 17, 207, 0.7)', // Màu đen xám đậm thay vì đen tuyền
    backdropFilter: 'blur(20px)',             // Làm mờ mạnh hơn để tạo chiều sâu
    border: '1px solid rgba(227, 11, 162, 0.15)', // Viền trắng mờ tạo cảm giác sang trọng
    borderRadius: '10px',                     // Bo góc mềm mại hơn
    padding: '10px',
    boxShadow: '0 8px 15px 0 rgba(170, 7, 170, 0.8)', // Đổ bóng để tách biệt khỏi nền
    // -----------------------
}}>
      <div style={{ color: 'white', fontSize: '20px', marginBottom: '10px' }}>
        Đang phát: {playlist[currentTrack].name}
      </div>
      <AudioPlayer
        src={playlist[currentTrack].src}
        showSkipControls={true} // Bật nút chuyển bài
        onClickNext={handleClickNext} // Khi bấm nút next thì gọi hàm chuyển
        onEnded={handleClickNext}
        onClickPrevious={handleClickPrevious}
        autoPlayAfterSrcChange={true}
      />
    </div>
  );
}