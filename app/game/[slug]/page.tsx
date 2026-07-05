'use client';
import { useState, useEffect, use } from 'react';
import { games } from '../../data/games';
export default function GameDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const game = games.find((g) => g.slug === slug);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    useEffect(() => {
        const savedRating = localStorage.getItem(`rating-${slug}`);
        if (savedRating) setRating(Number(savedRating));
    }, [slug]);

  if (!game) return <div>Không tìm thấy game!</div>;
  

  return (
    <div style={{ 
      backgroundImage: 'url(/bgdf.png)', 
      minHeight: '100vh', 
      color: '#e2e8f0', 
      padding: '40px 15%', // Tăng padding để nội dung nằm gọn giữa màn hình
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" // Font chữ đẹp, sạch
    }}>
        <a 
    href="/" 
    style={{
        display: 'inline-block',
        marginBottom: '20px',    // Tăng khoảng cách với tiêu đề
        color: '#ffffff',        // Chuyển sang màu trắng để nổi bật hơn trên nền tối
        textDecoration: 'none',
        fontSize: '18px',        // Tăng kích thước chữ (từ 14px lên 18px)
        fontWeight: 'bold',      // Làm chữ đậm
        cursor: 'pointer',
        padding: '8px 16px',     // Thêm khoảng đệm xung quanh chữ
        backgroundColor: '#1f2937', // Thêm màu nền tối cho nút
        borderRadius: '6px',     // Bo góc nút
        transition: 'all 0.2s'
    }}
    onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#374151'; // Đổi màu nền khi di chuột
        e.currentTarget.style.color = '#3b82f6';           // Đổi màu chữ khi di chuột
    }}
    onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#1f2937'; // Trả về màu nền cũ
        e.currentTarget.style.color = '#ffffff';           // Trả về màu chữ cũ
    }}
>
    ← Quay lại trang chủ
</a>
      
      <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
        
        
        {/* Cột trái: Ảnh (Tăng width để to hơn) */}
        <div style={{ width: '450px', flexShrink: 0 }}>
          <img 
            src={game.image} 
            alt={game.title} 
            style={{ width: '100%', borderRadius: '12px', border: '1px solid #2d3748' }} 
          />

        {/* Gallery ảnh phụ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
            {game.gallery && game.gallery.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`Gallery ${index}`}
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        borderRadius: '12px',
                        border: '1px solid #2d3748',
                }}
            />
        ))}
    </div>
</div>

        {/* Cột phải: Nội dung */}
        <div style={{ flex: 1 }}>

        {/* Cột phải: BẮT ĐẦU THÊM DIV KHUNG Ở ĐÂY */}
        <div style={{ 
            flex: 1, 
            backgroundColor: '#0a0c10', // Màu nền khung
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid #2d3748' // Đường viền khung
        }}>
          
          {/* Tiêu đề */}
          <h1 style={{ fontSize: '42px', margin: '0 0 15px 0', color: '#fff', fontWeight: '700' }}>
            {game.title}
          </h1>

          {/* Tags di chuyển lên đây */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                {game.tags.map((tag) => (
                <span 
                    key={tag} 
                    style={{ 
                    border: '1px solid #3a4a68', 
                    padding: '5px 14px',        
                    fontSize: '12px', 
                    borderRadius: '4px',
                    backgroundColor: '#1a202c',
                    color: '#cbd5e0',
                    whiteSpace: 'nowrap',       
                    textTransform: 'uppercase'  
                    }}
                >
                    {tag}
                </span>
                ))}
          </div>
<div style={{ color: '#e2e8f0', marginBottom: '20px' }}>
    <p style={{ margin: '0' }}><strong>Điểm rank:</strong> 4.1/5 (GameStoryLog)</p>
    <p style={{ margin: '0' }}><strong>Thời lượng chơi trung bình:</strong> 2 giờ (GameStoryLog)</p>
    <p style={{ margin: '0' }}><strong>Nhà phát triển:</strong> Zebual Studio</p>
    <p style={{ margin: '0' }}><strong>Phiên bản:</strong> 0.2</p>
    <p style={{ margin: '0' }}><strong>Dung lượng:</strong> 1.2 GB</p>
    <p style={{ margin: '0' }}><strong>Trạng thái:</strong> Tích cực</p>
    <p style={{ margin: '0' }}><strong>Lần cập nhật cuối:</strong> 28/11/2025</p>
    <p style={{ margin: '0' }}><strong>Động cơ:</strong> Ren'Py</p>
    <p style={{ margin: '0' }}><strong>Thiết bị:</strong> PC/ANDROID</p>
    <p style={{ margin: '0' }}><strong>Ngôn ngữ:</strong> Tiếng Việt</p>
    <p style={{ margin: '0' }}><strong>Ghi Chú:</strong> Vui lòng dùng JOYPLAY và PLUGIN bản mới nhất để tránh xảy ra lỗi</p>
</div>

          {/* Mô tả (Tăng fontSize và lineHeight để dễ đọc) */}
          <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#a0aec0', marginBottom: '30px', textAlign: 'justify' }}>
            {game.description}
          </p>

          {/* Bảng thông số */}
        {/* Bảng thông số */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {[
            { label: 'LƯỢT TẢI', value: game.downloads },
            { label: 'NGÀY RA MẮT', value: game.lastUpdated }
        ].map((item, index) => (
            <div key={index} style={{
            flex: 1, 
            backgroundColor: '#0d1117',
            padding: '30px',
            borderRadius: '10px',
            border: '1px solid #30363d',
            textAlign: 'center'
            }}>
            <div style={{ fontSize: '10px', color: '#8b949e', marginBottom: '4px' }}>{item.label}</div>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#c9d1d9' }}>{item.value}</div>
            </div>
        ))}
        </div>
                {/* 5. Nút tải link (Đã được căn chỉnh chiều cao, màu sắc như mẫu) */}
                <div style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
                    {/* Nút Link chính */}
                    <a 
                        href={game.linkMain} 
                        target="_blank" 
                        onClick={() => new Audio('/click.mp3').play()} 
                        style={{
                            flex: 1, padding: '12px', backgroundColor: '#2563eb', color: 'white',
                            textAlign: 'center', borderRadius: '8px', textDecoration: 'none',
                            transition: 'all 0.2s', cursor: 'pointer', border: 'none',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Link chính
                    </a>

                    {/* Nút Link phụ */}
                    <a 
                        href={game.linkSub} 
                        target="_blank" 
                        onClick={() => new Audio('/click.mp3').play()}
                        style={{
                            flex: 1, padding: '12px', backgroundColor: '#374151', color: 'white',
                            textAlign: 'center', borderRadius: '8px', textDecoration: 'none',
                            transition: 'all 0.2s', cursor: 'pointer', border: 'none',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1f2937'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#374151'}
                        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Link phụ
                    </a>
                </div>
            </div>    
          </div>
        </div>
        </div>
  );
}