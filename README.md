<div align="center">

# 🎯 Switch-Code - 초보자 친화적 AI Provider 관리 도구

> **Switch-Code**는 [CC Switch](https://github.com/farion1231/cc-switch) (MIT License)를 기반으로 커스터마이징한 프로젝트입니다.

[![Version](https://img.shields.io/badge/version-3.6.0%2B-blue.svg)](https://github.com/reallygood83/switch-model/releases)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)](https://github.com/reallygood83/switch-model/releases)
[![Built with Tauri](https://img.shields.io/badge/built%20with-Tauri%202-orange.svg)](https://tauri.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Based on CC Switch](https://img.shields.io/badge/based%20on-CC%20Switch-blue.svg)](https://github.com/farion1231/cc-switch)

**[English](#english)** | **[한국어](#korean)** | [中文](README_ZH.md)

</div>

---

<a name="korean"></a>

# 🇰🇷 한국어

## ✨ 주요 특징

### 🎯 초보자를 위한 완전한 재설계

이 버전은 **초보자가 쉽게 이해하고 사용**할 수 있도록 완전히 새롭게 디자인되었습니다!

- **🎓 파인만 비유법 설명**: 복잡한 개념을 일상 비유로 쉽게 이해
  - TV 리모컨처럼 Provider 전환
  - 출입증처럼 이해하는 API Key
  - 옷 갈아입듯 간단한 전환
  - 배달 앱처럼 선택하는 Provider

- **🎬 인터랙티브 튜토리얼**: 처음 사용자를 위한 4단계 가이드
  - Provider란 무엇인가?
  - API Key 추가하기
  - 전환하기
  - 터미널 재시작

- **🎨 Neo-Brutalism 디자인**: 대담하고 명확한 시각적 디자인
  - 강렬한 색상과 두꺼운 테두리
  - 직관적인 버튼과 카드
  - 명확한 시각적 계층

- **🌍 완벽한 한국어 지원**:
  - 전체 UI 한국어 번역
  - 튜토리얼 한국어 제공
  - 파인만 설명 한국어로 작성

### 💪 강력한 핵심 기능 (v3.6.0 기반)

- **MCP 관리**: Model Context Protocol 서버 완벽 관리
- **설정 가져오기/내보내기**: 백업 및 복원 기능
- **속도 테스트**: API 엔드포인트 응답 속도 측정
- **Claude 플러그인 동기화**: 원클릭 플러그인 설정 적용
- **Provider 복제**: 기존 설정을 쉽게 복사
- **수동 정렬**: 드래그 앤 드롭으로 순서 변경

## 📦 설치 방법

### 방법 1: Homebrew로 설치 (Mac 권장)

```bash
# 필수 도구 설치
brew install pnpm rust

# 프로젝트 클론
git clone https://github.com/reallygood83/switch-model.git
cd switch-model

# 의존성 설치
pnpm install

# 개발 모드로 실행
pnpm dev
```

### 방법 2: 직접 빌드

#### 사전 요구사항
- Node.js 18 이상
- Rust 1.85 이상
- pnpm 8 이상

```bash
# 1. pnpm 설치
npm install -g pnpm

# 2. 프로젝트 클론
git clone https://github.com/reallygood83/switch-model.git
cd switch-model

# 3. 의존성 설치
pnpm install

# 4. 실행
pnpm dev
```

### 방법 3: 프로덕션 빌드

```bash
# 배포용 앱 빌드
pnpm build

# 빌드 결과물 위치:
# - macOS: src-tauri/target/release/bundle/
# - Windows: src-tauri/target/release/
# - Linux: src-tauri/target/release/
```

## 🎯 사용 방법

### 1️⃣ 첫 실행

앱을 처음 실행하면 **초보자 튜토리얼**이 자동으로 시작됩니다.

**튜토리얼 내용**:
1. Provider란? (AI 서비스 회사 개념)
2. API Key 추가하기 (출입증 개념)
3. Provider 전환하기 (TV 채널처럼)
4. 터미널 재시작하기

### 2️⃣ 파인만 설명 보기

Provider가 하나도 없을 때 **파인만 비유법 설명**이 표시됩니다:

- **TV 리모컨**: Provider 전환의 개념
- **출입증**: API Key의 역할
- **옷 갈아입기**: 상황에 맞는 선택
- **배달 앱**: Provider 비교

### 3️⃣ Provider 추가

```
1. "공급자 추가" 버튼 클릭
2. 정보 입력:
   - 이름: DeepSeek, OpenRouter 등
   - API Key: 서비스에서 발급받은 키
   - 설정: 프리셋 자동 완성
3. 저장 후 "전환" 버튼
4. 터미널 재시작
```

### 4️⃣ Provider 전환

- 원하는 Provider 카드의 **"전환"** 버튼 클릭
- 터미널 재시작하면 즉시 적용!

## 🎨 새로운 디자인 특징

### Neo-Brutalism 디자인 시스템

```css
/* 대담한 색상 */
--neo-electric-blue: #0066FF
--neo-cyber-pink: #FF006E
--neo-neon-green: #00FF9F
--neo-yellow-pop: #FFD60A

/* 강렬한 그림자 */
box-shadow: 5px 5px 0px var(--neo-black)

/* 두꺼운 테두리 */
border: 3px solid var(--neo-black)
```

### 시각적 요소

- ⚡ 강렬한 색상 조합
- 📦 명확한 카드 레이아웃
- 🔲 두꺼운 테두리와 그림자
- 🎯 직관적인 버튼 디자인

## 📸 스크린샷

### 메인 화면 (한국어)
![한국어 메인 화면](assets/screenshots/main-ko.png)

### 파인만 설명 섹션
![파인만 비유법](assets/screenshots/explainer.png)

### 튜토리얼 시스템
![튜토리얼](assets/screenshots/tutorial.png)

## 🛠️ 개발

### 개발 명령어

```bash
# 개발 모드 (핫 리로드)
pnpm dev

# 타입 체크
pnpm typecheck

# 코드 포맷팅
pnpm format

# 테스트 실행
pnpm test:unit

# 빌드
pnpm build
```

### 프로젝트 구조

```
cc-switch-main/
├── src/
│   ├── components/
│   │   ├── FeynmanExplainer.tsx   # 파인만 비유법 설명
│   │   ├── TutorialWizard.tsx     # 튜토리얼 시스템
│   │   └── ...
│   ├── i18n/
│   │   ├── locales/
│   │   │   ├── ko.json            # 한국어 번역
│   │   │   ├── en.json            # 영어 번역
│   │   │   └── zh.json            # 중문 번역
│   │   └── index.ts
│   ├── styles/
│   │   └── neo-brutalism.css      # 네오 브루탈리즘 디자인
│   └── App.tsx
└── src-tauri/
    └── src/
        └── ...
```

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일 참조

## 🙏 감사의 말

- **Original CC Switch**: [farion1231/cc-switch](https://github.com/farion1231/cc-switch)
- **Tauri Framework**: [tauri.app](https://tauri.app/)
- **shadcn/ui**: [ui.shadcn.com](https://ui.shadcn.com/)

---

<a name="english"></a>

# 🇺🇸 English

> **Switch-Code** is a customized version based on [CC Switch](https://github.com/farion1231/cc-switch) (MIT License).

## ✨ Key Features

### 🎯 Completely Redesigned for Beginners

This version has been **completely redesigned to be beginner-friendly**!

- **🎓 Feynman Technique Explanations**: Complex concepts explained with everyday analogies
  - Switch providers like TV remote control
  - API Keys explained as access cards
  - Changing providers like changing outfits
  - Choosing providers like food delivery apps

- **🎬 Interactive Tutorial**: 4-step guide for first-time users
  - What is a Provider?
  - Adding API Keys
  - Switching Providers
  - Restarting Terminal

- **🎨 Neo-Brutalism Design**: Bold and clear visual design
  - Vibrant colors and thick borders
  - Intuitive buttons and cards
  - Clear visual hierarchy

- **🌍 Full Korean Support**:
  - Complete UI in Korean
  - Tutorial in Korean
  - Feynman explanations in Korean

### 💪 Powerful Core Features (Based on v3.6.0)

- **MCP Management**: Complete Model Context Protocol server management
- **Import/Export**: Backup and restore functionality
- **Speed Testing**: API endpoint latency measurement
- **Claude Plugin Sync**: One-click plugin configuration
- **Provider Duplication**: Easy copy of existing configs
- **Manual Sorting**: Drag and drop reordering

## 📦 Installation

### Method 1: Install via Homebrew (Recommended for Mac)

```bash
# Install required tools
brew install pnpm rust

# Clone repository
git clone https://github.com/reallygood83/switch-model.git
cd switch-model

# Install dependencies
pnpm install

# Run in development mode
pnpm dev
```

### Method 2: Build from Source

#### Prerequisites
- Node.js 18+
- Rust 1.85+
- pnpm 8+

```bash
# 1. Install pnpm
npm install -g pnpm

# 2. Clone repository
git clone https://github.com/reallygood83/switch-model.git
cd switch-model

# 3. Install dependencies
pnpm install

# 4. Run
pnpm dev
```

### Method 3: Production Build

```bash
# Build production app
pnpm build

# Build outputs:
# - macOS: src-tauri/target/release/bundle/
# - Windows: src-tauri/target/release/
# - Linux: src-tauri/target/release/
```

## 🎯 Usage

### 1️⃣ First Launch

When you first launch the app, an **interactive tutorial** starts automatically.

**Tutorial Contents**:
1. What is a Provider? (AI service company concept)
2. Adding API Keys (access card concept)
3. Switching Providers (like TV channels)
4. Restarting Terminal

### 2️⃣ View Feynman Explanations

When you have no providers, **Feynman analogies** are displayed:

- **TV Remote**: Provider switching concept
- **Access Card**: API Key role
- **Changing Outfits**: Situation-appropriate choices
- **Delivery Apps**: Provider comparison

### 3️⃣ Add Provider

```
1. Click "Add Provider" button
2. Enter information:
   - Name: DeepSeek, OpenRouter, etc.
   - API Key: Key from service
   - Settings: Auto-complete presets
3. Save and click "Switch"
4. Restart terminal
```

### 4️⃣ Switch Provider

- Click **"Switch"** button on desired provider card
- Restart terminal to apply immediately!

## 🎨 New Design Features

### Neo-Brutalism Design System

```css
/* Bold Colors */
--neo-electric-blue: #0066FF
--neo-cyber-pink: #FF006E
--neo-neon-green: #00FF9F
--neo-yellow-pop: #FFD60A

/* Hard Shadows */
box-shadow: 5px 5px 0px var(--neo-black)

/* Thick Borders */
border: 3px solid var(--neo-black)
```

### Visual Elements

- ⚡ Vibrant color combinations
- 📦 Clear card layouts
- 🔲 Thick borders and shadows
- 🎯 Intuitive button design

## 🛠️ Development

### Development Commands

```bash
# Development mode (hot reload)
pnpm dev

# Type checking
pnpm typecheck

# Format code
pnpm format

# Run tests
pnpm test:unit

# Build
pnpm build
```

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

MIT License - See [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- **Original CC Switch**: [farion1231/cc-switch](https://github.com/farion1231/cc-switch)
- **Tauri Framework**: [tauri.app](https://tauri.app/)
- **shadcn/ui**: [ui.shadcn.com](https://ui.shadcn.com/)

---

<div align="center">

**Made with ❤️ for AI developers and beginners**

⭐ If this project helps you, please give it a star!

[Report Bug](https://github.com/reallygood83/switch-model/issues) · [Request Feature](https://github.com/reallygood83/switch-model/issues)

</div>
