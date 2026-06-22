
// ===== MEMBER DATA =====
const members = [
  { id:"shin-sehee",     name:"신세희", nameEn:"Shin Se-hee",     nameJa:"シン・セヒ",        nameZh:"申世希",  role:"팀장", roleEn:"Team Leader", year:1997, height:172, ig:"se_heee2e",    followers:"117K", sports:["baseball","basketball","volleyball"],
    grad:"linear-gradient(145deg,#E31837,#ff6b9d,#ff1744)" },
  { id:"kim-jina",       name:"김진아", nameEn:"Kim Jin-a",       nameJa:"キム・ジナ",        nameZh:"金真兒",  role:"치어리더", roleEn:"Cheerleader", year:1992, height:170, ig:"jjina_v0v",    followers:"228K", sports:["baseball","basketball","volleyball"],
    grad:"linear-gradient(145deg,#7c3aed,#db2777,#9333ea)" },
  { id:"kim-hanseul",    name:"김한슬", nameEn:"Kim Han-seul",    nameJa:"キム・ハンスル",    nameZh:"金漢瑟",  role:"치어리더", roleEn:"Cheerleader", year:1996, height:172, ig:"kim_han_seul", followers:"72K",  sports:["baseball","basketball","volleyball"],
    grad:"linear-gradient(145deg,#0ea5e9,#7c3aed,#3b82f6)" },
  { id:"kim-haeri",      name:"김해리", nameEn:"Kim Hae-ri",      nameJa:"キム・ヘリ",        nameZh:"金海莉",  role:"치어리더", roleEn:"Cheerleader", year:1999, height:173, ig:"you_r_hr",     followers:"547K", sports:["baseball","basketball","volleyball"],
    grad:"linear-gradient(145deg,#f59e0b,#ef4444,#ff6b35)" },
  { id:"lee-geumju",     name:"이금주", nameEn:"Lee Geum-ju",     nameJa:"イ・グムジュ",      nameZh:"李錦珠",  role:"치어리더", roleEn:"Cheerleader", year:2000, height:172, ig:"2geum_j._.j",  followers:"107K", sports:["baseball","basketball","volleyball"],
    grad:"linear-gradient(145deg,#10b981,#0ea5e9,#06b6d4)" },
  { id:"lee-yebin",      name:"이예빈", nameEn:"Lee Ye-bin",      nameJa:"イ・イェビン",      nameZh:"李藝彬",  role:"치어리더", roleEn:"Cheerleader", year:2001, height:168, ig:"1eeyebin_",    followers:"268K", sports:["baseball","basketball","volleyball"],
    grad:"linear-gradient(145deg,#ec4899,#8b5cf6,#f43f5e)" },
  { id:"jeong-huijeong", name:"정희정", nameEn:"Jeong Hui-jeong", nameJa:"ジョン・フィジョン", nameZh:"鄭希靜", role:"치어리더", roleEn:"Cheerleader", year:2002, height:167, ig:"_jung_u",      followers:"238K", sports:["baseball","basketball"],
    grad:"linear-gradient(145deg,#f97316,#ec4899,#fb923c)" },
  { id:"lee-seoyun",     name:"이서윤", nameEn:"Lee Seo-yun",     nameJa:"イ・ソユン",        nameZh:"李書允",  role:"치어리더", roleEn:"Cheerleader", year:2006, height:168, ig:"tjdbs__06",    followers:"28K",  sports:["baseball","basketball","volleyball"],
    grad:"linear-gradient(145deg,#6366f1,#ec4899,#818cf8)" },
  { id:"kim-gahyun",     name:"김가현", nameEn:"Kim Ga-hyun",     nameJa:"キム・ガヒョン",    nameZh:"金佳賢",  role:"치어리더", roleEn:"Cheerleader", year:2003, height:173, ig:"keemgahyun",   followers:"112K", sports:["baseball","basketball"],
    grad:"linear-gradient(145deg,#ef4444,#f97316,#ff6b35)" },
  { id:"kye-yujin",      name:"계유진", nameEn:"Kye Yu-jin",      nameJa:"ケ・ユジン",        nameZh:"桂有珍",  role:"치어리더", roleEn:"Cheerleader", year:2001, height:171, ig:"kyeyujin",     followers:"28K",  sports:["baseball","basketball"],
    grad:"linear-gradient(145deg,#8b5cf6,#06b6d4,#a78bfa)" },
  { id:"kwon-gayoung",   name:"권가영", nameEn:"Kwon Ga-young",   nameJa:"クォン・ガヨン",    nameZh:"權佳榮",  role:"치어리더", roleEn:"Cheerleader", year:2001, height:165, ig:"yo_ung__vely", followers:"10K",  sports:["basketball"],
    grad:"linear-gradient(145deg,#14b8a6,#6366f1,#0ea5e9)" },
  { id:"kim-minji",      name:"김민지", nameEn:"Kim Min-ji",       nameJa:"キム・ミンジ",      nameZh:"金玟知",  role:"치어리더", roleEn:"Cheerleader", year:2005, height:173, ig:"mischguy2",    followers:"15K",  sports:["baseball","basketball","volleyball"],
    grad:"linear-gradient(145deg,#f43f5e,#fb923c,#ff4fa0)" },
];

const SPORT_ICONS = { baseball:"⚾", basketball:"🏀", volleyball:"🏐" };
const HOT_THRESHOLD = 200; // K followers = "hot" badge

// ===== i18n =====
const i18n = {
  ko: {
    nav_sub:"치어리더", nav_members:"멤버", nav_instagram:"인스타그램", nav_videos:"영상", nav_about:"소개", nav_contact:"문의",
    ai_topbar_strong:"AI 초안 → 담당자 확인 → 발행", ai_topbar_desc:"AI가 콘텐츠를 초안 작성하고 KOLEX 담당자가 검토·확인 후 발행합니다", ai_chip:"매일 업데이트",
    hero_badge:"✦ KOLEX 스포츠 엔터테인먼트",
    hero_line1:"무대 위에서 빛나고,", hero_line2:"당신의 마음에 남다.",
    hero_desc:"대한민국을 대표하는 치어리더들. 야구·농구·배구 경기장 어디서나 관중을 하나로 만드는 KOLEX 소속 퍼포머들의 모든 것을 여기서 만나보세요.",
    cta_meet:"팀 만나러 가기 ✦", cta_blog:"블로그 구경하기",
    stat_members:"퍼포머", stat_followers:"팔로워", stat_sports:"종목", stat_languages:"언어",
    tab_all:"전체", tab_baseball:"⚾ 야구", tab_basketball:"🏀 농구", tab_volleyball:"🏐 배구",
    squad_em:"우리가", squad_rest:"바로 KOLEX",
    squad_sub:"프로필 카드를 클릭하면 상세 페이지로 이동합니다 ✦",
    view_blog:"최신 포스트 →", view_youtube:"유튜브 더보기 →", view_all_posts:"전체 보기 →",
    ig_sub:"팔로우하고 실시간 소식을 받아보세요",
    vid_title:"최신 영상", vid_sub:"AI가 새 영상을 감지하면 자동으로 업데이트됩니다",
    vid_tab_yt:"📺 YouTube", vid_tab_ig:"📸 Instagram Reels",
    yt_tag_prefix:"치어리더", yt_team_tag:"KT위즈 치어리더",
    yt_watch_video:"YouTube에서 보기", yt_watch_shorts:"YouTube Shorts에서 보기",
    yt_more:"더보기 ↓", yt_less:"접기 ↑",
    yt_tag1:"경기 당일", yt_title1:"KOLEX 치어리더 — 경기 당일 퍼포먼스 ⚾",
    yt_tag2:"2025 시즌", yt_title2:"2025 시즌 하이라이트 모음 ✨",
    yt_tag3:"비하인드", yt_title3:"KOLEX 비하인드 스토리 🎥",
    reel_tag1:"응원 퍼포먼스", reel_title1:"KOLEX 치어리더 경기 당일 응원 릴스",
    reel_tag2:"비하인드", reel_title2:"KOLEX 멤버들의 훈련 & 비하인드",
    reel_tag3:"하이라이트", reel_title3:"2025 시즌 하이라이트 모음",
    reel_view:"Instagram에서 보기",
    reel_note:"🤖 n8n 자동화로 @kolexent 최신 릴스 URL이 자동 업데이트됩니다",
    blog_title:"최신 포스트", blog_sub:"KOLEX 운영팀이 매일 새 글을 업데이트합니다",
    ai_badge_title:"AI 초안 → 담당자 확인 → 발행",
    ai_badge_sub:"AI가 치어리더 일상 인사·영상 소개·마일스톤 글 초안을 작성하고, KOLEX 담당자 검토 후 발행됩니다",
    ai_live:"● LIVE",
    ai_feat_h:"KOLEX 팀이\n매일 업데이트",
    ai_feat_p:"이 사이트는 n8n + Claude AI 보조 시스템으로 운영됩니다. 치어리더들의 인스타그램·유튜브를 실시간 모니터링해 새 콘텐츠가 올라오면 AI 보조로 블로그 포스트 초안을 작성하고, KOLEX 팀의 확인 후 사이트를 업데이트합니다.",
    ai_consent_note:"본 사이트의 치어리더 관련 콘텐츠는 소속 치어리더의 사전 동의 하에 제작·운영됩니다.",
    ai_f1_h:"사진 자동 수집", ai_f1_p:"인스타그램 새 게시물 감지 → 자동 임베드",
    ai_f2_h:"영상 자동 업데이트", ai_f2_p:"유튜브 새 영상 → AI 설명 생성 → 자동 게시",
    ai_f3_h:"일일 인사 AI 보조 작성", ai_f3_p:"매일 4개 국어로 팬 인사 포스트 AI 보조 작성",
    ai_f4_h:"다국어 자동 번역", ai_f4_p:"한국어·영어·일본어·중문 동시 발행",
    cta_h:"매일 새 소식,<br/>놓치지 마세요 💕",
    cta_p:"공식 채널을 추가하고 좋아하는 치어리더의 최신 소식을 가장 먼저 받아보세요. 인스타그램 팔로우도 잊지 마세요!",
    cta_channel_go:"🔔 새 소식 알림 받기", cta_blog_go:"블로그 바로가기 ✦", cta_about:"KOLEX 소개",
    sub_title:"📷 인스타그램 팔로우로 새 소식 받기",
    sub_desc:"@kolexent를 팔로우하면 치어리더의 새 게시물과 기념일·마일스톤 소식을 가장 먼저 확인할 수 있어요.",
    sub_note:"새 게시물 & 소식 알림 · 팔로우 무료 · 언제든 언팔로우 가능",
    goods_badge:"Coming Soon",
    goods_title:"치어리더 공식 굿즈, 곧 만나보세요",
    goods_desc:"멤버별 포토카드, 키링, 응원 굿즈를 전 세계 어디서나 만나보실 수 있도록 준비 중입니다.",
    goods_item1:"포토카드", goods_item2:"아크릴 키링", goods_item3:"응원 티셔츠", goods_item4:"슬로건 &amp; 응원봉", goods_item5:"에코백 &amp; 머그컵",
    goods_notify_btn:"출시 알림 신청하기",
    footer_members:"멤버", footer_all:"전체 멤버 →", footer_content:"콘텐츠", footer_follow:"팔로우",
    privacy:"개인정보처리방침",
    lbl_followers:"팔로워", lbl_height:"키",
    role_leader:"팀장 ★", role_cheer:"치어리더",
    blog_read:"더 읽기",
    post_title:["경기 당일 팬들에게 전하는 메시지 🎉","새 응원 루틴 공개! 꼭 봐주세요 ✨","팔로워 감사 이벤트 예고 💕"],
    post_excerpt:[
      "오늘 홈경기 있어요! 경기장에 오시는 분들, 꼭 저 찾아주세요 💪 새로 연습한 루틴 최초 공개할 예정이라 기대해주세요!",
      "이번 시즌 새롭게 준비한 응원 루틴이에요. 인스타 영상 보고 여러분의 생각 댓글로 알려주세요 🙏",
      "여러분 덕분에 여기까지 왔어요. 진심으로 감사해요! 조만간 깜짝 이벤트도 준비할게요 🎁"
    ],
  },
  en: {
    nav_sub:"Cheerleaders", nav_members:"Members", nav_instagram:"Instagram", nav_videos:"Videos", nav_about:"About", nav_contact:"Contact",
    ai_topbar_strong:"AI Draft → Staff Review → Published", ai_topbar_desc:"AI drafts content, KOLEX staff review and approve before every post goes live", ai_chip:"Daily Updated",
    hero_badge:"✦ KOLEX Sports Entertainment",
    hero_line1:"Born to Perform.", hero_line2:"Built to Inspire.",
    hero_desc:"Korea's most captivating sports entertainers — electrifying stadiums across baseball, basketball, and volleyball. Follow every move, every day.",
    cta_meet:"Meet the Squad ✦", cta_blog:"Read the Blog",
    stat_members:"Performers", stat_followers:"Followers", stat_sports:"Sports", stat_languages:"Languages",
    tab_all:"All", tab_baseball:"⚾ Baseball", tab_basketball:"🏀 Basketball", tab_volleyball:"🏐 Volleyball",
    squad_em:"Meet", squad_rest:"the KOLEX Squad",
    squad_sub:"Click a profile card to see the full page ✦",
    view_blog:"Latest Posts →", view_youtube:"More on YouTube →", view_all_posts:"View All →",
    ig_sub:"Follow for real-time updates",
    vid_title:"Featured Videos", vid_sub:"AI detects new videos and updates automatically",
    vid_tab_yt:"📺 YouTube", vid_tab_ig:"📸 Instagram Reels",
    yt_tag_prefix:"Cheerleader", yt_team_tag:"KT Wiz Cheerleaders",
    yt_watch_video:"Watch on YouTube", yt_watch_shorts:"Watch on YouTube Shorts",
    yt_more:"Show More ↓", yt_less:"Show Less ↑",
    yt_tag1:"Game Day", yt_title1:"KOLEX Cheerleaders — Game Day Performance ⚾",
    yt_tag2:"Season 2025", yt_title2:"Season 2025 Highlights ✨",
    yt_tag3:"Behind the Scenes", yt_title3:"Behind the Scenes with KOLEX 🎥",
    reel_tag1:"Cheer Performance", reel_title1:"KOLEX Cheerleaders Game Day Reels",
    reel_tag2:"Behind the Scenes", reel_title2:"KOLEX Members Training & BTS",
    reel_tag3:"Highlights", reel_title3:"2025 Season Highlight Reel",
    reel_view:"View on Instagram",
    reel_note:"🤖 Latest @kolexent reel URLs auto-updated via n8n automation",
    blog_title:"Latest Posts", blog_sub:"KOLEX team updates new posts every day",
    ai_badge_title:"AI Draft → Staff Review → Published",
    ai_badge_sub:"AI writes draft posts; every piece is reviewed and approved by KOLEX staff before publishing",
    ai_live:"● LIVE",
    ai_feat_h:"Daily Updates\nby KOLEX Team",
    ai_feat_p:"This site is powered by n8n + Claude AI assistance. Instagram and YouTube are monitored in real-time — when new content drops, AI-assisted drafts are created, reviewed by KOLEX staff, and published to the site.",
    ai_consent_note:"All cheerleader-related content on this site is produced and operated with the prior consent of each featured cheerleader.",
    ai_f1_h:"Photo Auto-Collect", ai_f1_p:"Instagram new posts detected → auto-embedded",
    ai_f2_h:"Video Auto-Update", ai_f2_p:"YouTube new video → AI description → auto-published",
    ai_f3_h:"Daily Greetings, AI-Assisted", ai_f3_p:"Fan greeting posts AI-assisted and editor-reviewed daily in 4 languages",
    ai_f4_h:"Multilingual Auto-Translation", ai_f4_p:"Korean · English · Japanese · Chinese published simultaneously",
    cta_h:"Fresh updates<br/><em>every single day</em> 💕",
    cta_p:"Follow our official channels to be the first to hear from your favorite cheerleaders. Don't forget to follow us on Instagram!",
    cta_channel_go:"🔔 Get Updates", cta_blog_go:"Visit the Blog ✦", cta_about:"About KOLEX",
    sub_title:"Follow Us for Updates",
    sub_desc:"Follow @kolexent on Instagram to get the latest news, photos, and videos from your favorite cheerleaders.",
    sub_note:"New posts & videos shared regularly · Follow for free · Unfollow anytime",
    goods_badge:"Coming Soon",
    goods_title:"Official Cheerleader Goods — Coming Soon",
    goods_desc:"Photocards, keyrings, and cheer merch for every member, ready to ship worldwide.",
    goods_item1:"Photocards", goods_item2:"Acrylic Keyrings", goods_item3:"Cheer T-Shirts", goods_item4:"Slogans &amp; Cheer Sticks", goods_item5:"Eco Bags &amp; Mugs",
    goods_notify_btn:"Notify Me at Launch",
    footer_members:"Members", footer_all:"All Members →", footer_content:"Content", footer_follow:"Follow",
    privacy:"Privacy Policy",
    lbl_followers:"Followers", lbl_height:"Height",
    role_leader:"Team Leader ★", role_cheer:"Cheerleader",
    blog_read:"Read More",
    post_title:["Game Day Message from Hae-ri 🎉","New Cheering Routine Revealed ✨","Thank You for 238K Followers! 💕"],
    post_excerpt:[
      "Hello fans! We have a home game tonight and I can't wait to perform. I've been working on a brand-new routine — come watch! 💪",
      "This season we have some really fun new moves. Watch the full video on Instagram and let me know what you think!",
      "I am genuinely speechless. Every single one of you is so special to me. Thank you from the bottom of my heart! 🙏"
    ],
  },
  ja: {
    nav_sub:"チアリーダーズ", nav_members:"メンバー", nav_instagram:"インスタ", nav_videos:"動画", nav_about:"について", nav_contact:"連絡",
    ai_topbar_strong:"AI下書き → 担当者確認 → 公開", ai_topbar_desc:"AIがコンテンツを下書きし、KOLEX担当者が確認・承認後に公開します", ai_chip:"毎日更新",
    hero_badge:"✦ コレックス スポーツエンターテインメント",
    hero_line1:"舞台で輝き、", hero_line2:"あなたの心に残る。",
    hero_desc:"韓国で最も輝くチアリーダーたちが集結。野球・バスケ・バレーのスタジアムを沸かせる KOLEXのパフォーマーたちの毎日をお届けします。",
    cta_meet:"メンバーを見る ✦", cta_blog:"ブログを読む",
    stat_members:"パフォーマー", stat_followers:"フォロワー", stat_sports:"種目", stat_languages:"言語",
    tab_all:"全員", tab_baseball:"⚾ 野球", tab_basketball:"🏀 バスケ", tab_volleyball:"🏐 バレー",
    squad_em:"KOLEXの", squad_rest:"メンバーたち",
    squad_sub:"プロフィールカードをクリックして詳細ページへ ✦",
    view_blog:"最新投稿 →", view_youtube:"YouTubeで見る →", view_all_posts:"全て見る →",
    ig_sub:"フォローしてリアルタイムの最新情報をチェック",
    vid_title:"最新動画", vid_sub:"AIが新動画を検知して自動更新します",
    vid_tab_yt:"📺 YouTube", vid_tab_ig:"📸 Instagram リール",
    yt_tag_prefix:"チアリーダー", yt_team_tag:"KT Wizチアリーダー",
    yt_watch_video:"YouTubeで見る", yt_watch_shorts:"YouTube Shortsで見る",
    yt_more:"もっと見る ↓", yt_less:"閉じる ↑",
    yt_tag1:"ゲームデー", yt_title1:"KOLEXチアリーダーズ — ゲームデーパフォーマンス ⚾",
    yt_tag2:"2025シーズン", yt_title2:"2025シーズンハイライト ✨",
    yt_tag3:"舞台裏", yt_title3:"KOLEXの舞台裏 🎥",
    reel_tag1:"応援パフォーマンス", reel_title1:"KOLEXチアリーダーズ ゲームデーリール",
    reel_tag2:"舞台裏", reel_title2:"KOLEXメンバーのトレーニング & 舞台裏",
    reel_tag3:"ハイライト", reel_title3:"2025シーズンハイライト集",
    reel_view:"Instagramで見る",
    reel_note:"🤖 @kolexent最新リールURLはn8n自動化で自動更新されます",
    blog_title:"最新投稿", blog_sub:"KOLEXチームが毎日新しい記事を更新します",
    ai_badge_title:"AI下書き → 担当者確認 → 公開",
    ai_badge_sub:"AIが挨拶・動画紹介・記念投稿の下書きを作成し、KOLEX担当者が確認・承認後に公開します",
    ai_live:"● LIVE",
    ai_feat_h:"KOLEXチームが\n毎日更新",
    ai_feat_p:"このサイトはn8n + Claude AIサポートシステムで運営されています。インスタグラム・YouTubeをリアルタイムで監視し、新コンテンツが投稿されるとAIサポートでブログ記事の下書きを作成し、KOLEXスタッフが確認後に公開します。",
    ai_consent_note:"本サイトのチアリーダー関連コンテンツは、各チアリーダーの事前同意のもとに制作・運営されています。",
    ai_f1_h:"写真自動収集", ai_f1_p:"インスタ新投稿検知 → 自動埋め込み",
    ai_f2_h:"動画自動更新", ai_f2_p:"YouTube新動画 → AI説明生成 → 自動投稿",
    ai_f3_h:"AIサポートで挨拶作成", ai_f3_p:"毎日4カ国語でファン挨拶投稿をAIサポートで作成",
    ai_f4_h:"多言語自動翻訳", ai_f4_p:"韓国語・英語・日本語・中文を同時に公開",
    cta_h:"毎日新しいニュース、<br/>見逃さないで 💕",
    cta_p:"公式チャンネルを追加して、お気に入りのチアリーダーの最新情報をいち早くチェックしましょう。Instagramのフォローもお忘れなく！",
    cta_channel_go:"🔔 新着情報を受け取る", cta_blog_go:"ブログへ ✦", cta_about:"KOLEXについて",
    sub_title:"🔔 LINEでInstagram新着投稿・記念日通知を受け取る",
    sub_desc:"LINE公式アカウントを追加すると、チアリーダーのInstagram新着投稿や記念日のたびにお知らせします。",
    sub_note:"新着投稿&記念日通知・スパムなし・いつでもブロック可能",
    goods_badge:"Coming Soon",
    goods_title:"公式チアリーダーグッズ、近日登場",
    goods_desc:"メンバー別フォトカードやアクリルキーホルダーなどの応援グッズを、世界中にお届けする準備を進めています。",
    goods_item1:"フォトカード", goods_item2:"アクリルキーホルダー", goods_item3:"応援Tシャツ", goods_item4:"スローガン＆応援スティック", goods_item5:"エコバッグ＆マグカップ",
    goods_notify_btn:"発売通知を申し込む",
    footer_members:"メンバー", footer_all:"全メンバー →", footer_content:"コンテンツ", footer_follow:"フォロー",
    privacy:"プライバシーポリシー",
    lbl_followers:"フォロワー", lbl_height:"身長",
    role_leader:"チームリーダー ★", role_cheer:"チアリーダー",
    blog_read:"続きを読む",
    post_title:["ゲームデーのメッセージ 🎉","新しい応援ルーティンを公開！ ✨","フォロワーに感謝！ 💕"],
    post_excerpt:[
      "こんにちは！今日はホームゲームがあります。新しいルーティンをお披露目するので、ぜひ観に来てください！💪",
      "今シーズンの新しい動きを練習しました。インスタの動画を見て、コメントで感想を教えてください🙏",
      "皆さんのおかげでここまで来られました。本当にありがとうございます！もうすぐサプライズイベントも準備します 🎁"
    ],
  },
  zh: {
    nav_sub:"啦啦隊員", nav_members:"成員", nav_instagram:"Instagram", nav_videos:"影片", nav_about:"關於", nav_contact:"聯絡",
    ai_topbar_strong:"AI草稿 → 人員審核 → 發布", ai_topbar_desc:"AI撰寫內容草稿，KOLEX人員審核確認後才公開發布", ai_chip:"每日更新",
    hero_badge:"✦ KOLEX 運動娛樂",
    hero_line1:"在舞台上發光，", hero_line2:"留在你心中。",
    hero_desc:"韓國最閃耀的啦啦隊員齊聚一堂。在棒球、籃球、排球賽場燃動全場的KOLEX表演者們，每天的一切盡在這裡。",
    cta_meet:"認識成員 ✦", cta_blog:"閱讀部落格",
    stat_members:"表演者", stat_followers:"追蹤者", stat_sports:"運動種類", stat_languages:"語言",
    tab_all:"全部", tab_baseball:"⚾ 棒球", tab_basketball:"🏀 籃球", tab_volleyball:"🏐 排球",
    squad_em:"認識", squad_rest:"KOLEX成員",
    squad_sub:"點擊個人資料卡片前往詳細頁面 ✦",
    view_blog:"最新文章 →", view_youtube:"更多YouTube →", view_all_posts:"查看全部 →",
    ig_sub:"追蹤以獲取即時動態",
    vid_title:"最新影片", vid_sub:"AI偵測新影片並自動更新",
    vid_tab_yt:"📺 YouTube", vid_tab_ig:"📸 Instagram Reels",
    yt_tag_prefix:"啦啦隊", yt_team_tag:"KT Wiz啦啦隊",
    yt_watch_video:"在YouTube上觀看", yt_watch_shorts:"在YouTube Shorts上觀看",
    yt_more:"顯示更多 ↓", yt_less:"收起 ↑",
    yt_tag1:"比賽當天", yt_title1:"KOLEX啦啦隊員 — 比賽當天表演 ⚾",
    yt_tag2:"2025賽季", yt_title2:"2025賽季精華合輯 ✨",
    yt_tag3:"幕後花絮", yt_title3:"KOLEX幕後故事 🎥",
    reel_tag1:"應援表演", reel_title1:"KOLEX啦啦隊員比賽當天應援Reels",
    reel_tag2:"幕後花絮", reel_title2:"KOLEX成員訓練花絮",
    reel_tag3:"精華", reel_title3:"2025賽季精華合輯",
    reel_view:"在Instagram上查看",
    reel_note:"🤖 透過n8n自動化系統，@kolexent最新Reels連結會自動更新",
    blog_title:"最新文章", blog_sub:"KOLEX團隊每天更新新文章",
    ai_badge_title:"AI草稿 → 人員審核 → 發布",
    ai_badge_sub:"AI撰寫問候、影片介紹、里程碑文章草稿，KOLEX人員審核後才發布",
    ai_live:"● 直播中",
    ai_feat_h:"KOLEX團隊\n每天更新",
    ai_feat_p:"本網站由n8n + Claude AI輔助系統運營。即時監控啦啦隊員的Instagram和YouTube，有新內容發布時由AI輔助撰寫部落格文章草稿，經KOLEX團隊審核後發布。",
    ai_consent_note:"本網站之啦啦隊相關內容，皆於各啦啦隊員事前同意下製作與營運。",
    ai_f1_h:"自動收集照片", ai_f1_p:"偵測Instagram新貼文 → 自動嵌入",
    ai_f2_h:"自動更新影片", ai_f2_p:"YouTube新影片 → AI生成說明 → 自動發布",
    ai_f3_h:"AI輔助每日撰寫問候", ai_f3_p:"每天以4種語言AI輔助撰寫粉絲問候文章",
    ai_f4_h:"多語言自動翻譯", ai_f4_p:"韓文・英文・日文・中文同時發布",
    cta_h:"每天的新消息，<br/>別錯過 💕",
    cta_p:"加入官方頻道，搶先收到你最喜歡的啦啦隊員最新消息。別忘了追蹤Instagram！",
    cta_channel_go:"🔔 接收新消息通知", cta_blog_go:"前往部落格 ✦", cta_about:"關於KOLEX",
    sub_title:"🔔 透過LINE接收新貼文及紀念日通知",
    sub_desc:"加入LINE官方帳號，每當啦啦隊員有新的Instagram貼文或紀念日時，將立即通知您。",
    sub_note:"新貼文&紀念日通知・無垃圾訊息・隨時可封鎖",
    goods_badge:"Coming Soon",
    goods_title:"官方啦啦隊周邊商品，敬請期待",
    goods_desc:"各成員專屬照片卡、壓克力吊飾等應援周邊，準備銷往全球。",
    goods_item1:"照片卡", goods_item2:"壓克力吊飾", goods_item3:"應援T恤", goods_item4:"應援標語＆應援棒", goods_item5:"環保袋＆馬克杯",
    goods_notify_btn:"申請上市通知",
    footer_members:"成員", footer_all:"全部成員 →", footer_content:"內容", footer_follow:"追蹤",
    privacy:"隱私權政策",
    lbl_followers:"追蹤者", lbl_height:"身高",
    role_leader:"隊長 ★", role_cheer:"啦啦隊員",
    blog_read:"繼續閱讀",
    post_title:["比賽當天給粉絲的訊息 🎉","公開新應援套路！ ✨","感謝粉絲活動預告 💕"],
    post_excerpt:[
      "今天有主場比賽！來現場的朋友們，一定要找我 💪 我會首次公開新練習的套路，敬請期待！",
      "這是本賽季全新準備的應援套路。看完Instagram影片後，請在評論告訴我你的想法 🙏",
      "因為有大家才能走到今天。真心感謝！不久後也會準備驚喜活動 🎁"
    ],
  },
};

// ===== CURRENT LANG =====
let currentLang = 'ko';

function setLang(lang) {
  currentLang = lang;
  const t = i18n[lang];
  if (!t) return;
  document.documentElement.setAttribute('data-lang', lang);
  try { localStorage.setItem('kolexLang', lang); } catch (e) {}
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
  renderMembers(currentFilter);
  renderBlog();
  renderYtVideos();
}

// ===== MEMBER RENDER =====
let currentFilter = 'all';

function filterSport(sport, btn) {
  currentFilter = sport;
  document.querySelectorAll('.sport-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderMembers(sport);
}

function renderMembers(sport) {
  const grid = document.getElementById('memberGrid');
  if (!grid) return;
  const t = i18n[currentLang] || i18n.ko;
  const filtered = (sport === 'all') ? members : members.filter(m => m.sports.includes(sport));

  grid.innerHTML = filtered.map(m => {
    const followersNum = parseFloat(m.followers.replace('K',''));
    const isHot = m.followers.includes('K') && followersNum >= 200;
    const hotBadge = isHot ? '<span class="m-new">🔥 HOT</span>' : '';
    const sportIcons = m.sports.map(s => SPORT_ICONS[s] || '').join('');
    const roleTxt = m.role === '팀장'
      ? (t.role_leader || 'Team Leader ★')
      : (t.role_cheer || 'Cheerleader');
    let displayName = m.name;
    if (currentLang === 'en')      displayName = m.nameEn;
    else if (currentLang === 'ja') displayName = m.nameJa;
    else if (currentLang === 'zh') displayName = m.nameZh;
    const initials = (m.nameEn || '').split('-').map(w => w[0] || '').join('').toUpperCase().slice(0,2);

    return `<a class="member-card" href="cheerleaders/${m.id}.html">
  <div class="member-grad" style="background:${m.grad}"></div>
  <div class="m-initials"><span class="m-ini-text">${initials}</span></div>
  <img class="member-photo" src="images/${m.id}.jpg" alt="${m.name}" loading="lazy" onerror="this.style.display='none'" />
  <div class="member-veil"></div>
  <span class="m-sport">${sportIcons}</span>
  ${hotBadge}
  <div class="m-info">
    <div class="m-role">${roleTxt}</div>
    <div class="m-name">${displayName}</div>
    ${currentLang !== 'ko' ? `<div class="m-ko">${m.name}</div>` : ''}
    <div class="m-chips">
      <span class="m-chip">📸 ${m.followers}</span>
      ${isHot ? '<span class="m-chip hot">HOT</span>' : ''}
    </div>
  </div>
</a>`;
  }).join('\n');
}

// ===== MOBILE NAV =====
function toggleMenu() {
  var menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// ===== YOUTUBE MORE =====
function toggleYtMore() {
  var hidden = document.querySelectorAll('.yt-more-hidden');
  var btn = document.getElementById('ytMoreBtn');
  var isExpanded = hidden[0] && hidden[0].classList.contains('visible');
  hidden.forEach(function(el) { el.classList.toggle('visible', !isExpanded); });
  var t = i18n[currentLang] || i18n.ko;
  if (btn) btn.textContent = isExpanded ? (t.yt_more || '더보기 ↓') : (t.yt_less || '접기 ↑');
}

// ===== YOUTUBE VIDEOS (검색 기반 자동 업데이트: data/videos.json) =====
// n8n이 매일 1회 "치어리더 {멤버명}"(12건) + "kt wiz 치어리더"(1건) 검색 결과를
// 안전 필터 + 중복 제거 후 publishedAt 기준 전체 사이트 상위 12개로 정렬하여
// data/videos.json에 커밋합니다. 로딩 실패 시(file:// 등) index.html에 있는
// 기존 정적 카드(폴백)가 그대로 표시됩니다.
let ytVideos = [];

function renderYtVideos() {
  const grid = document.getElementById('ytGrid');
  if (!grid || !ytVideos.length) return; // 데이터 없으면 정적 폴백 카드 유지
  const t = i18n[currentLang] || i18n.ko;

  grid.innerHTML = ytVideos.map((v, i) => {
    const isShorts = v.type === 'shorts';
    const url = isShorts
      ? `https://www.youtube.com/shorts/${v.videoId}`
      : `https://www.youtube.com/watch?v=${v.videoId}`;
    const watchLabel = isShorts
      ? (t.yt_watch_shorts || 'YouTube Shorts에서 보기')
      : (t.yt_watch_video || 'YouTube에서 보기');

    let tag;
    if (v.member_id) {
      const m = members.find(mm => mm.id === v.member_id);
      const name = m
        ? (currentLang === 'en' ? m.nameEn : currentLang === 'ja' ? m.nameJa : currentLang === 'zh' ? m.nameZh : m.name)
        : '';
      tag = `🔍 ${t.yt_tag_prefix || '치어리더'} ${name}`.trim();
    } else {
      tag = `🔍 ${t.yt_team_tag || 'KT위즈 치어리더'}`;
    }

    const hiddenClass = i >= 6 ? ' yt-more-hidden' : '';
    return `<div class="yt-card${hiddenClass}">
  <div class="yt-ratio">
    <a class="yt-thumb-link" href="${url}" target="_blank" rel="noopener" title="${v.title}">
      <img src="https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg" alt="${v.title}" loading="lazy"
        onerror="this.src='https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg'">
      <div class="yt-play-btn"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
      <div class="yt-thumb-label">▶ ${watchLabel}</div>
    </a>
  </div>
  <div class="yt-cap">
    <div class="yt-sport-tag">${tag}</div>
    <div class="yt-title">${v.title}</div>
  </div>
</div>`;
  }).join('\n');
}

async function loadYtVideos() {
  try {
    const res = await fetch('data/videos.json', { cache: 'no-cache' });
    if (!res.ok) return;
    const data = await res.json();
    if (Array.isArray(data.videos) && data.videos.length) {
      ytVideos = data.videos;
      renderYtVideos();
    }
  } catch (e) {
    // fetch 실패(예: file://로 로컬 열람) — 정적 폴백 카드를 그대로 둠
  }
}

// ===== SUBSCRIBE =====
// 상단 CTA 밴드 / 굿즈 Coming Soon 버튼 → 채널 구독 섹션으로 스크롤
// (언어별 채널 카드는 CSS data-lang 속성으로 표시: 카카오/LINE/Instagram)
function scrollToSubscribe() {
  var band = document.getElementById('subscribeBand');
  if (band) band.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function scrollToNotify() {
  scrollToSubscribe();
}

// ===== INIT =====
// ===== STORIES RENDER =====
function renderStories() {
  const row = document.getElementById('storiesRow');
  if (!row) return;
  row.innerHTML = members.map(m => {
    const initials = m.nameEn.split('-').map(w => w[0]||'').join('').toUpperCase().slice(0,2);
    return `<div class="story-item" onclick="location.href='cheerleaders/${m.id}.html'">
  <div class="story-ring">
    <div class="story-inner">
      <img src="images/${m.id}.jpg" alt="${m.name}" loading="lazy" onerror="this.style.display='none'" />
      <span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">${initials}</span>
    </div>
  </div>
  <div class="story-name">${m.name}</div>
</div>`;
  }).join('');

  // Show/hide right-edge "more" fade depending on scroll position
  const bar = row.closest('.stories-bar');
  if (bar) {
    const updateEdge = () => {
      const atEnd = row.scrollWidth - row.scrollLeft - row.clientWidth < 4;
      bar.classList.toggle('at-end', atEnd);
    };
    updateEdge();
    row.addEventListener('scroll', updateEdge, { passive: true });
    window.addEventListener('resize', updateEdge);
  }
}

// ===== BLOG RENDER =====
const blogPosts = [
  { member: members[3], tag:'greeting', tagClass:'tag-greeting', date:'2026-06-08' },
  { member: members[5], tag:'video',    tagClass:'tag-video',    date:'2026-06-07' },
  { member: members[6], tag:'milestone',tagClass:'tag-milestone',date:'2026-06-06' },
];

function renderBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  const t = i18n[currentLang] || i18n.ko;
  const titles   = t.post_title   || i18n.ko.post_title;
  const excerpts = t.post_excerpt  || i18n.ko.post_excerpt;
  const readTxt  = t.blog_read    || '더 읽기';
  grid.innerHTML = blogPosts.map((p, i) => {
    const m = p.member;
    const displayName = currentLang==='en' ? m.nameEn : currentLang==='ja' ? m.nameJa : currentLang==='zh' ? m.nameZh : m.name;
    return `<a class="blog-card" href="cheerleaders/${m.id}.html">
  <div class="blog-thumb">
    <div class="blog-thumb-bg" style="background:${m.grad};width:100%;height:100%;position:absolute;inset:0;"></div>
    <img src="images/${m.id}.jpg" alt="${m.name}" loading="lazy" onerror="this.style.display='none'" />
    <span class="blog-tag-abs ${p.tagClass}">${p.tag==='greeting'?'💬 인사':''}${p.tag==='video'?'🎬 영상':''}${p.tag==='milestone'?'🏆 마일스톤':''}</span>
  </div>
  <div class="blog-body">
    <div class="blog-author-row">
      <div class="blog-av">
        <div class="blog-av-bg" style="background:${m.grad};"></div>
        <img src="images/${m.id}.jpg" alt="${m.name}" onerror="this.style.display='none'" />
      </div>
      <div>
        <div class="blog-author-name">${displayName}</div>
        <div class="blog-date">${p.date}</div>
      </div>
    </div>
    <div class="blog-title">${titles[i] || ''}</div>
    <div class="blog-exc">${excerpts[i] || ''}</div>
    <div class="blog-read">${readTxt} →</div>
  </div>
</a>`;
  }).join('\n');
}

document.addEventListener('DOMContentLoaded', function() {
  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { setLang(btn.getAttribute('data-lang')); });
  });
  // Initial render
  renderStories();
  renderMembers('all');
  renderBlog();
  var savedLang = 'ko';
  try { savedLang = localStorage.getItem('kolexLang') || 'ko'; } catch (e) {}
  setLang(savedLang);
  loadYtVideos();
});
