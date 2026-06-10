# VIETISジャパン コーポレートサイト

株式会社VIETISジャパンのコーポレートサイト。Next.js App Router で実装。

---

## URL

| 環境 | URL |
|---|---|
| 開発・確認用 | https://vietis-jp.vercel.app |
| 日本語本番（予定） | https://vietis.co.jp |
| 英語本番（予定） | https://vietis.com.vn ※英語サイトはベトナム側が作成 |

---

## 技術スタック

- **フレームワーク**: Next.js (App Router)
- **スタイリング**: バニラCSS（CSS-in-JSX `<style>`タグ方式）
- **フォント**: Noto Sans JP + Roboto（Google Fonts CDN）
- **フォーム**: Formspree
- **予約カレンダー**: Spir
- **デプロイ**: Vercel（GitHub連携・自動デプロイ）
- **CMS（予定）**: Strapi

---

## ローカル起動

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開く。

---

## ディレクトリ構成

```
src/
├── app/
│   ├── page.tsx               # トップページ
│   ├── about/                 # 企業情報
│   ├── blog/
│   │   ├── page.tsx           # ブログ一覧
│   │   └── [slug]/page.tsx    # ブログ記事（現在001のみ実装）
│   ├── cases/
│   │   ├── page.tsx           # 実績一覧
│   │   └── example-01〜17/    # 実績詳細（17件）
│   ├── contact/               # お問い合わせ
│   ├── consultation/          # 無料相談予約（Spir埋め込み）
│   ├── download/              # 資料請求
│   ├── product/
│   │   ├── page.tsx           # プロダクト一覧
│   │   ├── keyspider/         # Keyspider
│   │   └── menraku/           # Menraku
│   ├── recruit/               # 採用
│   ├── service/
│   │   ├── page.tsx           # サービス一覧
│   │   ├── ai-development/
│   │   ├── ai-driving-suite/
│   │   ├── dev-app/
│   │   ├── dev-system/
│   │   ├── dev-web/
│   │   ├── support-ai/
│   │   ├── support-system/
│   │   └── support-web/
│   └── privacy-policy/
├── components/
│   ├── Header.tsx             # 共通ヘッダー
│   ├── Footer.tsx             # 共通フッター
│   ├── ContactForm.tsx        # お問い合わせフォーム（Formspree）
│   ├── SpirWidget.tsx         # Spirカレンダー埋め込み
│   ├── FaqInit.tsx            # FAQアコーディオン（3パターン対応）
│   ├── RevealInit.tsx         # スクロールアニメーション
│   ├── TopPageInit.tsx        # トップページ専用JS
│   ├── BlogArticleInit.tsx    # ブログ記事ページ（TOC・SNSシェア）
│   ├── BlogFilterInit.tsx     # ブログ一覧フィルター
│   ├── CasesFilterInit.tsx    # 実績一覧フィルター
│   └── ScrollRestoration.tsx  # スクロール位置復元
public/
├── img/client/                # クライアントロゴ（マーキー用）
└── img/cert/                  # 認証ロゴ（CMMI・ISO・Pマーク）
scripts/
└── gen_blog001.py             # ブログHTML→page.tsx変換スクリプト
```

---

## デプロイ

`main` ブランチに push すると Vercel に自動デプロイされます。

```bash
git add .
git commit -m "変更内容"
git push
```

---

## Strapi連携（予定）

### フェーズ1：ブログ

- Strapi側でブログのコンテンツタイプを設計・セットアップ（ベトナム側担当）
- StrapiのAPIエンドポイントURLを `.env.local` に設定
- `/blog/page.tsx`（一覧）と `/blog/[slug]/page.tsx`（詳細）をAPI取得に書き換え

> 現在 `/blog/[slug]/page.tsx` は記事001のみ静的実装済み。Strapi連携時はこのファイルをAPI取得に全面書き換えする。

#### ブログ コンテンツタイプ定義

サンプルページ：
- 一覧: https://vietis-jp.vercel.app/blog
- 詳細: https://vietis-jp.vercel.app/blog/001

**Collection Type名**: `article`（または `blog-post`）

| フィールド名 | 型 | 必須 | 説明 |
|---|---|---|---|
| `title` | Text (Short) | ✅ | 記事タイトル |
| `slug` | UID (titleから自動生成) | ✅ | URLスラッグ（例: `kikanji-system-refresh`） |
| `excerpt` | Text (Long) | ✅ | 一覧ページの抜粋文（2行表示） |
| `content` | Rich Text (Blocks) | ✅ | 本文（h2・h3・p・ul・ol・strong対応） |
| `publishedAt` | Date | ✅ | 公開日（表示形式: `2026.06.09`） |
| `category` | Enumeration | ✅ | カテゴリ。値: `dx` / `dev` / `ai` / `culture` |
| `categoryLabel` | Text (Short) | ✅ | カテゴリ表示名（例: `DX・業務改善`） |
| `eyecatch` | Media (Single image) | ✅ | アイキャッチ画像（16:9推奨） |
| `authorName` | Text (Short) | ✅ | 著者名（例: `渡辺 和久`） |
| `authorRole` | Text (Short) | ✅ | 著者肩書き（例: `代表 / テクノロジーストラテジスト`） |
| `authorAvatar` | Media (Single image) | | 著者アバター画像 |
| `metaDescription` | Text (Long) | | SEO用メタディスクリプション |

#### カテゴリ一覧

| value | 表示名 |
|---|---|
| `dx` | DX・業務改善 |
| `dev` | システム・アプリ開発 |
| `ai` | AI・最新技術 |
| `culture` | 社内カルチャー |

#### 目次（TOC）について

詳細ページの目次は `content` フィールド内の `h2` / `h3` タグから自動生成するため、Strapi側での別途フィールド定義は不要。

---

### フェーズ2：実績

- 実績コンテンツタイプを設計・セットアップ（ベトナム側担当）
- `/cases/page.tsx`（一覧）と `/cases/[slug]/page.tsx`（詳細）をAPI取得に書き換え

---

### 環境変数

`.env.local` を作成して設定：

```env
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-server.com
```

---

## 残タスク

- [ ] ブログ記事ページ（`001`以外は404。Strapi連携で解決予定）
- [ ] OGP画像（SNSシェア用サムネイル）
- [ ] Google Analytics などの計測タグ
- [ ] `vietis.co.jp` へのドメイン切り替え（Strapi連携・UI修正完了後）
