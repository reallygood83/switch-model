# 📖 Switch-Model 사용자 매뉴얼 | User Manual

**초보자를 위한 완벽 가이드 | Complete Guide for Beginners**

---

# 🇰🇷 한국어 가이드

## 📚 목차

1. [Switch-Model이란?](#switch-model이란)
2. [설치 방법](#설치-방법)
3. [첫 실행하기](#첫-실행하기)
4. [Provider 추가하기](#provider-추가하기)
5. [Provider 전환하기](#provider-전환하기)
6. [문제 해결](#문제-해결)
7. [자주 묻는 질문 (FAQ)](#자주-묻는-질문-faq)

---

## 🎯 Switch-Model이란?

**Switch-Model**은 AI Provider(AI 서비스 제공자)를 **쉽게 전환**할 수 있게 해주는 도구입니다.

### 💡 쉬운 비유로 이해하기

#### 🎮 TV 리모컨처럼!
- TV 리모컨으로 채널을 바꾸듯이, Switch-Model로 AI Provider를 바꿀 수 있어요
- 버튼 하나면 됩니다!

#### 🔑 출입증처럼!
- API Key는 건물에 들어갈 때 필요한 출입증과 같아요
- 각 Provider(회사)마다 자신만의 출입증(API Key)이 필요합니다

#### 👔 옷 갈아입기처럼!
- 상황에 맞는 옷을 입듯이, 작업에 맞는 Provider를 선택할 수 있어요
- 빠른 작업엔 DeepSeek, 복잡한 작업엔 OpenRouter처럼요!

#### 🍔 배달 앱처럼!
- 여러 배달 앱 중 하나를 선택하듯이, 여러 AI Provider 중 하나를 선택하면 돼요

---

## 📥 설치 방법

### 방법 1: Homebrew로 설치 (Mac 권장) ⭐

**가장 쉬운 방법입니다!**

1. **터미널(Terminal) 열기**
   - Spotlight 검색 (⌘ + Space)에서 "터미널" 또는 "Terminal" 입력

2. **필수 도구 설치**
   ```bash
   brew install pnpm rust
   ```

3. **프로젝트 다운로드**
   ```bash
   git clone https://github.com/reallygood83/switch-model.git
   cd switch-model
   ```

4. **의존성 설치**
   ```bash
   pnpm install
   ```

5. **실행!**
   ```bash
   pnpm dev
   ```

### 방법 2: 직접 빌드

#### 사전 요구사항
- **Node.js** 18 이상
- **Rust** 1.85 이상
- **pnpm** 8 이상

#### 설치 단계

1. **pnpm 설치**
   ```bash
   npm install -g pnpm
   ```

2. **프로젝트 다운로드**
   ```bash
   git clone https://github.com/reallygood83/switch-model.git
   cd switch-model
   ```

3. **의존성 설치**
   ```bash
   pnpm install
   ```

4. **실행**
   ```bash
   pnpm dev
   ```

---

## 🚀 첫 실행하기

### 1단계: 앱 실행

터미널에서 다음 명령어를 입력하세요:
```bash
pnpm dev
```

### 2단계: 튜토리얼 따라하기

앱을 처음 실행하면 **대화형 튜토리얼**이 자동으로 시작됩니다!

**튜토리얼 4단계:**

#### 📺 1단계: Provider란?
- Provider는 AI 서비스를 제공하는 회사예요
- 예: DeepSeek, OpenRouter, Anthropic 등

#### 🔑 2단계: API Key 추가하기
- API Key는 각 Provider에서 발급받는 "출입증"이에요
- Provider 웹사이트에서 무료 또는 유료로 받을 수 있어요

#### 🔄 3단계: 전환하기
- "전환" 버튼 하나로 Provider를 바꿀 수 있어요
- TV 채널 바꾸는 것처럼 간단해요!

#### 🔁 4단계: 터미널 재시작
- Provider를 바꾼 후에는 터미널(Terminal)을 재시작해야 해요
- 그래야 새로운 Provider가 적용됩니다!

### 3단계: 언어 설정하기

오른쪽 상단의 **설정(⚙️)** 버튼을 클릭하고:
- **Language** 섹션에서 "한국어" 선택
- **저장** 버튼 클릭

---

## ➕ Provider 추가하기

### 1단계: "공급자 추가" 버튼 클릭

메인 화면에서 **"+ 공급자 추가"** 버튼을 찾아 클릭하세요.

### 2단계: 정보 입력하기

#### 📝 필수 정보
1. **이름**: Provider 이름 입력 (예: "나의 DeepSeek")
2. **API Key**: Provider에서 발급받은 키 입력
3. **설정**: 프리셋에서 자동 완성됩니다!

#### 💡 API Key 받는 방법

**DeepSeek 예시:**
1. [deepseek.com](https://www.deepseek.com)에서 가입
2. "API Keys" 메뉴로 이동
3. "Create API Key" 클릭
4. 생성된 키를 복사하여 붙여넣기

**OpenRouter 예시:**
1. [openrouter.ai](https://openrouter.ai)에서 가입
2. "Keys" 메뉴로 이동
3. "Create Key" 클릭
4. 생성된 키를 복사하여 붙여넣기

### 3단계: 저장 및 전환

1. **저장** 버튼 클릭
2. 새로 추가된 Provider 카드에서 **"전환"** 버튼 클릭
3. **터미널(Terminal) 재시작** ⚠️ 중요!

---

## 🔄 Provider 전환하기

### 간단한 3단계!

1. **원하는 Provider 카드 찾기**
   - 메인 화면에서 스크롤하여 찾기

2. **"전환" 버튼 클릭**
   - 카드 오른쪽 상단의 파란색 버튼

3. **터미널 재시작**
   - 터미널을 완전히 닫고 다시 열기
   - 또는 `Ctrl + C`로 종료 후 다시 실행

### ✅ 전환 확인하기

전환된 Provider 카드에는 **초록색 체크 마크(✓)**가 표시됩니다!

---

## 🔧 문제 해결

### ❌ 앱이 실행되지 않아요

**해결방법:**
1. Node.js, Rust, pnpm이 설치되어 있는지 확인
   ```bash
   node --version
   rustc --version
   pnpm --version
   ```
2. 버전이 요구사항을 충족하는지 확인:
   - Node.js ≥ 18
   - Rust ≥ 1.85
   - pnpm ≥ 8

### ❌ Provider 전환이 안 돼요

**해결방법:**
1. **터미널을 재시작했나요?** ⚠️ 가장 흔한 실수!
2. API Key가 올바른지 확인
3. Provider 설정이 제대로 저장되었는지 확인

### ❌ 한국어가 안 보여요

**해결방법:**
1. 설정(⚙️) → Language → "한국어" 선택
2. 저장 버튼 클릭
3. 앱 재시작

### ❌ API Key 오류가 나요

**해결방법:**
1. API Key를 다시 복사하여 붙여넣기 (공백 주의!)
2. Provider 웹사이트에서 키가 활성화되어 있는지 확인
3. 키에 충분한 크레딧이 있는지 확인

---

## ❓ 자주 묻는 질문 (FAQ)

### Q1: Provider를 여러 개 추가할 수 있나요?
**A:** 네! 원하는 만큼 추가하고 언제든지 전환할 수 있어요.

### Q2: API Key는 어디서 받나요?
**A:** 각 Provider의 공식 웹사이트에서 가입 후 발급받을 수 있어요.
- DeepSeek: https://www.deepseek.com
- OpenRouter: https://openrouter.ai
- Anthropic: https://www.anthropic.com

### Q3: 무료로 사용할 수 있나요?
**A:** Switch-Model 앱 자체는 **완전 무료**입니다! 하지만 각 Provider의 API 사용료는 별도예요.

### Q4: 터미널을 꼭 재시작해야 하나요?
**A:** 네! Provider를 전환한 후에는 **반드시 터미널을 재시작**해야 새로운 설정이 적용됩니다.

### Q5: Provider를 삭제할 수 있나요?
**A:** 네! Provider 카드의 **삭제(🗑️)** 버튼을 클릭하면 됩니다.

### Q6: 설정을 백업할 수 있나요?
**A:** 네! 설정 → 고급 → "설정 내보내기" 기능을 사용하세요.

---

## 🎓 파인만 설명 다시 보기

앱 메인 화면에서 Provider가 하나도 없을 때 **파인만 비유법 설명**이 자동으로 표시됩니다.

각 카드를 클릭하면 더 자세한 설명을 볼 수 있어요!

- 📺 **TV 리모컨**: Provider 전환의 개념
- 🔑 **출입증**: API Key의 역할
- 👔 **옷 갈아입기**: 상황에 맞는 선택
- 🍔 **배달 앱**: Provider 비교

---

## 📞 도움이 필요하신가요?

- **GitHub Issues**: [문제 보고하기](https://github.com/reallygood83/switch-model/issues)
- **GitHub**: [프로젝트 페이지](https://github.com/reallygood83/switch-model)

---

# 🇺🇸 English Guide

## 📚 Table of Contents

1. [What is Switch-Model?](#what-is-switch-model)
2. [Installation](#installation)
3. [First Launch](#first-launch)
4. [Adding a Provider](#adding-a-provider)
5. [Switching Providers](#switching-providers)
6. [Troubleshooting](#troubleshooting)
7. [FAQ](#faq)

---

## 🎯 What is Switch-Model?

**Switch-Model** is a tool that lets you **easily switch** between AI Providers (AI service providers).

### 💡 Understanding Through Simple Analogies

#### 🎮 Like a TV Remote!
- Just as you change TV channels with a remote, you can switch AI Providers with Switch-Model
- It's just one button!

#### 🔑 Like an Access Card!
- API Keys are like access cards you need to enter a building
- Each Provider (company) requires its own access card (API Key)

#### 👔 Like Changing Clothes!
- Just as you choose clothes for different situations, you can choose Providers for different tasks
- DeepSeek for quick tasks, OpenRouter for complex ones!

#### 🍔 Like a Delivery App!
- Just as you choose from multiple delivery apps, you can select from various AI Providers

---

## 📥 Installation

### Method 1: Install via Homebrew (Recommended for Mac) ⭐

**This is the easiest way!**

1. **Open Terminal**
   - Use Spotlight search (⌘ + Space) and type "Terminal"

2. **Install Required Tools**
   ```bash
   brew install pnpm rust
   ```

3. **Download Project**
   ```bash
   git clone https://github.com/reallygood83/switch-model.git
   cd switch-model
   ```

4. **Install Dependencies**
   ```bash
   pnpm install
   ```

5. **Run!**
   ```bash
   pnpm dev
   ```

### Method 2: Build from Source

#### Prerequisites
- **Node.js** 18+
- **Rust** 1.85+
- **pnpm** 8+

#### Installation Steps

1. **Install pnpm**
   ```bash
   npm install -g pnpm
   ```

2. **Download Project**
   ```bash
   git clone https://github.com/reallygood83/switch-model.git
   cd switch-model
   ```

3. **Install Dependencies**
   ```bash
   pnpm install
   ```

4. **Run**
   ```bash
   pnpm dev
   ```

---

## 🚀 First Launch

### Step 1: Run the App

Enter this command in the terminal:
```bash
pnpm dev
```

### Step 2: Follow the Tutorial

When you first launch the app, an **interactive tutorial** starts automatically!

**4-Step Tutorial:**

#### 📺 Step 1: What is a Provider?
- A Provider is a company that provides AI services
- Examples: DeepSeek, OpenRouter, Anthropic, etc.

#### 🔑 Step 2: Adding API Keys
- An API Key is an "access card" issued by each Provider
- You can get it for free or paid from the Provider's website

#### 🔄 Step 3: Switching
- You can change Providers with just one "Switch" button
- It's as simple as changing TV channels!

#### 🔁 Step 4: Restart Terminal
- After switching Providers, you must restart your Terminal
- This applies the new Provider settings!

### Step 3: Set Language

Click the **Settings (⚙️)** button in the top-right corner:
- Select "English" in the **Language** section
- Click **Save** button

---

## ➕ Adding a Provider

### Step 1: Click "Add Provider" Button

Find and click the **"+ Add Provider"** button on the main screen.

### Step 2: Enter Information

#### 📝 Required Information
1. **Name**: Enter Provider name (e.g., "My DeepSeek")
2. **API Key**: Enter the key from the Provider
3. **Settings**: Auto-completed from presets!

#### 💡 How to Get an API Key

**DeepSeek Example:**
1. Sign up at [deepseek.com](https://www.deepseek.com)
2. Go to "API Keys" menu
3. Click "Create API Key"
4. Copy and paste the generated key

**OpenRouter Example:**
1. Sign up at [openrouter.ai](https://openrouter.ai)
2. Go to "Keys" menu
3. Click "Create Key"
4. Copy and paste the generated key

### Step 3: Save and Switch

1. Click **Save** button
2. Click **"Switch"** button on the newly added Provider card
3. **Restart Terminal** ⚠️ Important!

---

## 🔄 Switching Providers

### Simple 3 Steps!

1. **Find the Provider Card You Want**
   - Scroll through the main screen

2. **Click "Switch" Button**
   - Blue button on the top-right of the card

3. **Restart Terminal**
   - Completely close and reopen Terminal
   - Or press `Ctrl + C` to quit, then run again

### ✅ Verify the Switch

The switched Provider card will show a **green checkmark (✓)**!

---

## 🔧 Troubleshooting

### ❌ App Won't Launch

**Solution:**
1. Verify Node.js, Rust, and pnpm are installed
   ```bash
   node --version
   rustc --version
   pnpm --version
   ```
2. Check versions meet requirements:
   - Node.js ≥ 18
   - Rust ≥ 1.85
   - pnpm ≥ 8

### ❌ Provider Switch Not Working

**Solution:**
1. **Did you restart Terminal?** ⚠️ Most common mistake!
2. Verify API Key is correct
3. Check Provider settings are properly saved

### ❌ Language Not Showing

**Solution:**
1. Settings (⚙️) → Language → Select your language
2. Click Save button
3. Restart app

### ❌ API Key Error

**Solution:**
1. Re-copy and paste the API Key (watch for spaces!)
2. Verify key is activated on the Provider's website
3. Check if the key has sufficient credits

---

## ❓ FAQ

### Q1: Can I add multiple Providers?
**A:** Yes! Add as many as you want and switch between them anytime.

### Q2: Where do I get API Keys?
**A:** From each Provider's official website after signing up.
- DeepSeek: https://www.deepseek.com
- OpenRouter: https://openrouter.ai
- Anthropic: https://www.anthropic.com

### Q3: Is it free to use?
**A:** The Switch-Model app itself is **completely free**! However, each Provider's API usage may have separate fees.

### Q4: Must I restart Terminal?
**A:** Yes! After switching Providers, you **must restart Terminal** for the new settings to take effect.

### Q5: Can I delete a Provider?
**A:** Yes! Click the **delete (🗑️)** button on the Provider card.

### Q6: Can I back up settings?
**A:** Yes! Use Settings → Advanced → "Export Settings" feature.

---

## 🎓 Review Feynman Explanations

On the app's main screen, when you have no Providers, the **Feynman analogy explanations** are automatically displayed.

Click each card for more detailed explanations!

- 📺 **TV Remote**: Concept of Provider switching
- 🔑 **Access Card**: Role of API Keys
- 👔 **Changing Clothes**: Situation-appropriate choices
- 🍔 **Delivery App**: Provider comparison

---

## 📞 Need Help?

- **GitHub Issues**: [Report a Problem](https://github.com/reallygood83/switch-model/issues)
- **GitHub**: [Project Page](https://github.com/reallygood83/switch-model)

---

**Made with ❤️ for AI developers and beginners**

⭐ If this project helps you, please give it a star on GitHub!
