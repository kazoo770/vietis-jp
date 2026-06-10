'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// 各パスのスクロール位置を記録
const positions = new Map<string, number>();

export default function ScrollRestoration() {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);

  useEffect(() => {
    // ブラウザのデフォルトスクロール復元を無効化（自前で管理）
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // 前のページのスクロール位置を保存
    if (prevPathname.current && prevPathname.current !== pathname) {
      positions.set(prevPathname.current, window.scrollY);
    }

    // 新しいページへ
    const saved = positions.get(pathname);
    if (saved !== undefined) {
      // 戻る/進む: 保存位置へ復元
      requestAnimationFrame(() => window.scrollTo(0, saved));
    } else {
      // 新規遷移: トップへ
      window.scrollTo(0, 0);
    }

    prevPathname.current = pathname;
  }, [pathname]);

  return null;
}
