'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import style from './navMenu.module.css';

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();

  const me = {
    id: 'jeon',
  };

  return (
    <>
      <li>
        <Link href={'/home'}>
          <div className={style.navPill}>
            <div style={{ fontWeight: 'bold' }}>
              <span className="material-symbols-outlined">home</span> 홈
            </div>
          </div>
        </Link>
      </li>
      <li>
        <Link href={'/explore'}>
          <div className={style.navPill}>
            <div style={{ fontWeight: 'bold' }}>
              <span className="material-symbols-outlined">travel_explore</span>
              탐색하기
            </div>
          </div>
        </Link>
      </li>
      <li>
        <Link href={'/messages'}>
          <div className={style.navPill}>
            <div style={{ fontWeight: 'bold' }}>
              <span className="material-symbols-outlined">mail</span>
              쪽지
            </div>
          </div>
        </Link>
      </li>
      <li>
        <Link href={'/profile'}>
          <div className={style.navPill}>
            <div style={{ fontWeight: 'bold' }}>
              <span className="material-symbols-outlined">person</span>
              프로필
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}
