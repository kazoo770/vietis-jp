#!/usr/bin/env python3
"""blog/001/index.html → Next.js page.tsx 変換スクリプト"""
import re, sys

SRC = '/Users/kazu/Documents/GitHub/vietis-website/design-reference/blog/001/index.html'
DST = '/Users/kazu/Documents/GitHub/vietis-nextjs/src/app/blog/[slug]/page.tsx'

html = open(SRC, encoding='utf-8').read()

# ── 1. CSS 抽出（<style>...</style>）─────────────────────────────────────
css_match = re.search(r'<style>(.*?)</style>', html, re.DOTALL)
# CSS は一切加工せずそのまま使う（重複は無害）
css = css_match.group(1).strip() if css_match else ''

# ── 2. ボディコンテンツ抽出（article-header 〜 </section> cta-band まで）
body_match = re.search(r'(<div class="article-header">.*?</section>)\s*\n\s*<footer', html, re.DOTALL)
body_html = body_match.group(1).strip() if body_match else ''

# ── 3. HTML → JSX 変換 ─────────────────────────────────────────────────
def html_to_jsx(s):
    # コメント除去
    s = re.sub(r'<!--.*?-->', '', s, flags=re.DOTALL)
    # 属性変換
    s = re.sub(r'\bclass=', 'className=', s)
    s = re.sub(r'\bfor=', 'htmlFor=', s)
    s = re.sub(r'\bstroke-width=', 'strokeWidth=', s)
    s = re.sub(r'\bstroke-linecap=', 'strokeLinecap=', s)
    s = re.sub(r'\bstroke-linejoin=', 'strokeLinejoin=', s)
    s = re.sub(r'\bfill-rule=', 'fillRule=', s)
    s = re.sub(r'\bclip-rule=', 'clipRule=', s)
    s = re.sub(r'\bclip-path=', 'clipPath=', s)
    s = re.sub(r'\bxlink:href=', 'xlinkHref=', s)
    s = re.sub(r'\btabindex=', 'tabIndex=', s)
    s = re.sub(r'\bcrossorigin\b', 'crossOrigin', s)
    s = re.sub(r'\bnomodule\b', 'noModule', s)
    s = re.sub(r'\ballowfullscreen\b', 'allowFullScreen', s)
    s = re.sub(r'\bautocomplete=', 'autoComplete=', s)
    # void タグ自己終了
    s = re.sub(r'<br\s*>', '<br/>', s)
    s = re.sub(r'<hr\s*>', '<hr/>', s)
    s = re.sub(r'<img(\s[^>]*?)(?<!/)>', r'<img\1/>', s)
    s = re.sub(r'<input(\s[^>]*?)(?<!/)>', r'<input\1/>', s)
    # style 属性を JSX オブジェクト形式に
    def style_to_obj(m):
        inner = m.group(1)
        parts = [p.strip() for p in inner.split(';') if p.strip()]
        obj_parts = []
        for p in parts:
            if ':' not in p: continue
            k, v = p.split(':', 1)
            k = k.strip()
            v = v.strip()
            k = re.sub(r'-([a-z])', lambda x: x.group(1).upper(), k)
            if re.match(r'^[\d.]+$', v) and k not in ('opacity','zIndex','fontWeight','flex','flexGrow','flexShrink','order'):
                obj_parts.append(f'{k}: "{v}"')
            else:
                obj_parts.append(f'{k}: "{v}"')
        return 'style={{' + ', '.join(obj_parts) + '}}'
    s = re.sub(r'style="([^"]*)"', style_to_obj, s)
    # onmouseover / onmouseout 除去（hover は CSS で）
    s = re.sub(r'\s+onmouseover="[^"]*"', '', s)
    s = re.sub(r'\s+onmouseout="[^"]*"', '', s)
    # aria-* / data-* はそのまま OK
    # selected 属性除去（option）
    s = re.sub(r'\s+selected\b', '', s)
    return s

body_jsx = html_to_jsx(body_html)

# ── 4. page.tsx 生成 ─────────────────────────────────────────────────────
page_tsx = f'''import type {{ Metadata }} from 'next';
import {{ notFound }} from 'next/navigation';
import BlogArticleInit from '@/components/BlogArticleInit';

export function generateStaticParams() {{
  return [{{ slug: '001' }}];
}}

export async function generateMetadata({{ params }}: {{ params: Promise<{{ slug: string }}> }}): Promise<Metadata> {{
  const {{ slug }} = await params;
  const article = getArticle(slug);
  if (!article) return {{}};
  return {{
    title: `${{article.title}} - VIETISジャパン ブログ`,
    description: article.description,
  }};
}}

function getArticle(slug: string) {{
  const articles: Record<string, {{ title: string; description: string }}> = {{
    '001': {{
      title: '失敗しない「基幹システム刷新」の進め方。要件定義で現場のブラックボックス化を防ぐ3つのポイント',
      description: 'レガシー化した社内システムを刷新する際、要件定義の進め方を誤ると開発が長期化するリスクがあります。失敗しない基幹システム刷新のポイントを専門家が解説します。',
    }},
  }};
  return articles[slug] ?? null;
}}

export default async function BlogArticlePage({{ params }}: {{ params: Promise<{{ slug: string }}> }}) {{
  const {{ slug }} = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <style>{{`
{css}
      `}}</style>

{body_jsx}
      <BlogArticleInit />
    </>
  );
}}
'''

open(DST, 'w', encoding='utf-8').write(page_tsx)
print(f'✅ 生成完了: {DST}')
print(f'   CSS: {len(css)} chars')
print(f'   body: {len(body_jsx)} chars')
