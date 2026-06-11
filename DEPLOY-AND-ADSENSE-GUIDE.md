# KOLEX Cheerleaders
## 배포 가이드 & AdSense 승인 전략

---

## 📁 파일 구조

```
ktwiz-cheerleaders/
├── index.html                    ← 메인 홈 페이지
├── about.html                    ← 사이트 소개 (AdSense 필수)
├── contact.html                  ← 연락처 (AdSense 필수)
├── privacy-policy.html           ← 개인정보처리방침 (AdSense 필수)
├── blog/
│   └── index.html               ← 블로그 목록
└── cheerleaders/
    ├── shin-sehee.html
    ├── kim-jina.html
    ├── kim-hanseul.html
    ├── kim-haeri.html
    ├── lee-geumju.html
    ├── lee-yebin.html
    ├── jeong-huijeong.html
    ├── lee-seoyun.html
    ├── kim-gahyun.html
    ├── kye-yujin.html
    ├── kwon-gayoung.html
    └── kim-minji.html
```

---

## 🌐 로컬 미리보기 (Chrome 전용)

배포 전 로컬에서 확인할 때는 반드시 **Google Chrome**을 사용하세요.
Instagram/YouTube embed는 Chrome에서 가장 정확하게 렌더링됩니다.

**방법 1 — 배치 파일 실행 (권장)**
```
ktwiz-cheerleaders/open-in-chrome.bat  ←  더블클릭
```

**방법 2 — Chrome 주소창에서 직접 열기**
```
Chrome 주소창 → 파일 경로 붙여넣기
예: C:\claude\claude work\...\ktwiz-cheerleaders\index.html
```

> ⚠️ Edge/Safari에서는 Instagram 임베드가 차단될 수 있습니다.

---

## 🚀 Step 1: GitHub Pages 배포 (무료, 추천)

### 1-1. GitHub 계정 & 리포지토리 생성 (완료됨)
- 리포지토리 생성 완료: **`kang-ktwiz/kolex-site`** (Public)
- ⚠️ `[username].github.io` 형식이 아닌 일반 리포지토리이므로, GitHub Pages는 **프로젝트 페이지**(`https://kang-ktwiz.github.io/kolex-site/`)로 생성됩니다 (아래 1-3 참고).

### 1-2. 파일 업로드
1. ktwiz-cheerleaders 폴더 안의 내용물(파일/폴더 전체, 폴더 자체는 제외)을 `kolex-site` 리포지토리 루트에 업로드
   - GitHub 웹에서: "Add file" → "Upload files"
   - 또는 GitHub Desktop / Git CLI: `git push`

### 1-3. GitHub Pages 활성화
1. 리포지토리(`kang-ktwiz/kolex-site`) → Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `main` / `root`
4. Save → 약 2~3분 후 사이트 활성화

**완료 URL:** `https://kang-ktwiz.github.io/kolex-site/`

> 📌 **주의**: 사이트 내 sitemap.xml / canonical URL은 향후 연결할 커스텀 도메인(`koreacheerleaders.com` 등, Step 2 참고) 기준으로 작성되어 있습니다. 커스텀 도메인 연결 전까지는 위 GitHub Pages URL로 접속하되, AdSense 심사는 커스텀 도메인 연결 후 진행하는 것을 권장합니다 (그렇지 않으면 sitemap의 URL과 실제 접속 URL이 달라 검색엔진/애드센스 크롤러가 혼동할 수 있음).

---

## 🌐 Step 2: 커스텀 도메인 연결 (선택, AdSense 승인에 유리)

AdSense 승인은 커스텀 도메인이 없어도 가능하지만, 있으면 더 전문적으로 보입니다.

**추천 도메인:** `koreacheerleaders.com` (1순위) 또는 `cheerkorea.com`, `koreancheer.com`
- KT / KT Wiz 팀명이 들어간 도메인은 상표권 분쟁 소지가 있으므로 반드시 피할 것
- Namecheap 또는 Google Domains에서 구매 (~$10/년)
- GitHub Pages DNS 설정으로 연결

---

## 📊 Step 3: Google AdSense 승인 전략

### 승인 필수 조건 체크리스트

| 항목 | 상태 | 비고 |
|------|------|------|
| ✅ Privacy Policy 페이지 | 완료 | privacy-policy.html |
| ✅ About 페이지 | 완료 | about.html |
| ✅ Contact 페이지 | 완료 | contact.html |
| ✅ 네비게이션 메뉴 | 완료 | 모든 페이지 연결 |
| ✅ 모바일 반응형 | 완료 | CSS 미디어쿼리 적용 |
| ✅ 오리지널 콘텐츠 | 완료 | 각 치어리더별 바이오 3개국어 |
| ✅ 프로필 페이지 12개 | 완료 | 각 치어리더별 페이지 |
| 🔲 블로그 포스트 최소 20개 | 필요 | n8n 자동화로 채우기 |
| 🔲 Google Search Console 등록 | 필요 | sitemap.xml 제출 |
| 🔲 Google Analytics | 권장 | 트래픽 증명용 |

### AdSense 신청 타이밍
- **블로그 포스트가 최소 20~30개** 쌓인 후 신청
- 배포 후 **최소 2~4주** 운영 후 신청
- 일일 방문자가 **50~100명 이상** 될 때 신청하면 승인율이 높음

### AdSense 코드 삽입 위치
각 HTML 파일의 `<head>` 안의 이 주석을 실제 코드로 교체:
```html
<!-- Google AdSense placeholder -->
<!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX" crossorigin="anonymous"></script> -->
```
→ `XXXXXXXX` 부분을 AdSense에서 발급받은 ID로 교체

---

## 🤖 Step 4: n8n 자동화 블로그 설정

### 아키텍처
```
[YouTube RSS / Instagram API] 
        ↓ (새 영상/포스트 감지)
[n8n 워크플로우]
        ↓
[Claude AI API - 3개국어 블로그 글 생성]
        ↓
[GitHub API - 블로그 HTML 파일 자동 생성 & 커밋]
        ↓
[GitHub Pages 자동 배포]
```

### n8n 워크플로우 1: 매일 인사 포스트

**트리거:** Cron (매일 오전 8시 KST)

**노드 구성:**
1. **Schedule Trigger** - `0 8 * * *` (매일 오전 8시)
2. **Code Node** - 오늘 날짜 + 랜덤 치어리더 선택
3. **HTTP Request (Claude API)** - 인사 글 3개국어 생성
   ```json
   {
     "model": "claude-3-5-haiku-20241022",
     "messages": [{
       "role": "user",
       "content": "Write a cheerful morning greeting blog post for {name}, KT Wiz cheerleader. Include: 1) Personal greeting to fans 2) Reference to today's game/season 3) Motivational message. Write in English only. Keep it warm, personal, 150-200 words. Return JSON: {title, body}"
     }]
   }
   ```
4. **HTTP Request (GitHub API)** - 새 HTML 파일 생성

### n8n 워크플로우 2: YouTube 영상 감지

**트리거:** RSS Feed (30분 간격)
- KT Wiz 유튜브 RSS: `https://www.youtube.com/feeds/videos.xml?channel_id=CHANNEL_ID`

**노드 구성:**
1. **RSS Read** - KT Wiz 공식 유튜브 채널
2. **Filter** - "치어" 또는 "cheer" 포함 영상만
3. **HTTP Request (Claude API)** - 영상 제목+설명 바탕 3개국어 소개 글 생성
4. **HTTP Request (GitHub API)** - 블로그 포스트 파일 생성

### GitHub API로 파일 생성하는 방법
```
POST https://api.github.com/repos/{owner}/{repo}/contents/blog/post-{date}-{id}.html
Authorization: Bearer {GITHUB_TOKEN}
Content-Type: application/json

{
  "message": "Auto: Add blog post {date}",
  "content": "{base64_encoded_html_content}"
}
```

---

## 📱 Step 5: 인스타그램 프로모션 전략

### 각 치어리더 팔로워 현황
| 이름 | 팔로워 | 인스타그램 | 우선순위 |
|------|--------|------------|---------|
| 김해리 | 547K | @you_r_hr | ⭐⭐⭐ 최우선 |
| 이예빈 | 268K | @1eeyebin_ | ⭐⭐⭐ |
| 정희정 | 238K | @_jung_u | ⭐⭐⭐ |
| 김진아 | 228K | @jjina_v0v | ⭐⭐⭐ |
| 신세희 | 117K | @se_heee2e | ⭐⭐ |
| 김가현 | 112K | @keemgahyun | ⭐⭐ |
| 이금주 | 107K | @2geum_j._.j | ⭐⭐ |
| 김한슬 | 72K | @kim_han_seul | ⭐⭐ |
| 이서윤 | 28K | @tjdbs__06 | ⭐ |
| 계유진 | 28K | @kyeyujin | ⭐ |
| 김민지 | 15K | @mischguy2 | ⭐ |
| 권가영 | 10K | @yo_ung__vely | ⭐ |
| **합계** | **1.77M+** | | |

### 프로모션 방법
1. **치어리더에게 사이트 URL 공유 요청** - 팬사이트가 있다고 스토리/포스트에 언급해달라 요청
2. **각 치어리더 개인 페이지 URL을 댓글로 홍보** - "@치어리더 이름님 팬사이트에 프로필 만들었어요!"
3. **일본/대만 팬 커뮤니티 공유** - 일본 KBO 팬 포럼, 대만 야구 커뮤니티
4. **해시태그 전략**: `#KTWiz`, `#KBOCheerleaders`, `#韓国チアリーダー`, `#KT威茲啦啦隊`

---

## 💰 Step 6: 굿즈 2단계 계획

AdSense 수익 안정화 후 (월 $500+ 예상 도달 시):

1. **Print-on-Demand 파트너**: Printful, Printify, Redbubble
2. **굿즈 종류**: 포토카드, 응원 티셔츠, 머그컵, 포스터
3. **결제**: Stripe + Shopify (해외 결제 지원)
4. **배송**: 일본/대만 직배송 가능한 국제 배송 업체

### 법적 주의사항 (굿즈)
- 치어리더 초상권 계약에 **굿즈 판매 권한 포함 여부** 반드시 확인
- 계약에 포함되지 않은 경우 별도 계약 필요
- KT Wiz 유니폼 로고가 포함된 이미지는 굿즈에 사용 불가

---

## 🗓️ 전체 타임라인

| 기간 | 작업 |
|------|------|
| Week 1 | GitHub Pages 배포, Google Search Console 등록 |
| Week 2~3 | n8n 자동화 세팅, 블로그 포스트 20개 이상 축적 |
| Week 4 | Google AdSense 신청 |
| Month 2 | 인스타그램 프로모션 본격 시작 |
| Month 3~4 | AdSense 승인 후 광고 수익 시작 |
| Month 6+ | 굿즈 판매 2단계 진입 |
