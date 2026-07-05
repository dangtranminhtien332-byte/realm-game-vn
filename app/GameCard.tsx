import { Star, Download, Eye } from 'lucide-react';
import Link from 'next/link'; // 1. Thêm import này

// 2. Thêm 'slug' vào danh sách props
export default function GameCard({ title, image, rating, downloads, views, slug }: any) {
  return (
    <div style={{
      backgroundColor: '#1a1d23',
      borderRadius: '8px',
      overflow: 'hidden',
      border: '1px solid #2d3748',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      {/* 3. Bao bọc bằng Link */}
      <Link href={`/game/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ cursor: 'pointer' }}>
          <img src={image} alt={title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          <div style={{ padding: '15px', paddingBottom: '0' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#e2e8f0', fontSize: '16px', lineHeight: '1.4' }}>
              {title}
            </h3>
          </div>
        </div>
      </Link>

      {/* Phần thông số giữ nguyên */}
      <div style={{ padding: '15px', paddingTop: '10px', display: 'flex', gap: '15px', fontSize: '13px', color: '#a0aec0', marginTop: 'auto' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Star size={14} color="#ecc94b" /> {rating}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Download size={14} /> {downloads}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Eye size={14} /> {views}
        </span>
      </div>
    </div>
  );
}