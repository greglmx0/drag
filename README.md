# Flapi - StarterKit Frontend

## 🛠 Tech Stack

- TypeScript (Language)
- Nuxt (Framework for Desktop, Mobile and Web)
- Tauri (Framework for Desktop)
- Capacitor (Framework for Mobile)
- CI / CD (Github Actions)
- Docker / DockerCompose (Development-Local)
- Kubernetes (Development-Remote, Staging and Production)

<br /><br /><br /><br />

## 📦 Versionning

On utilise la convention SemVer : https://semver.org/lang/fr/ <br /><br />
Pour une Release classique : MAJOR.MINOR.PATCH <br />
Pour une Pre-Release, exemples : MAJOR.MINOR.PATCH-rc.0 OR MAJOR.MINOR.PATCH-beta.3 <br /><br />

Nous utilison release-please de Google pour versionner, via Github Actions. <br />
Pour que cela sois pris en compte il faut utiliser les conventionnal commits : https://www.conventionalcommits.org/en/v1.0.0/ <br />
Release Please crée une demande d'extraction de version après avoir remarqué que la branche par défaut contient des « unités publiables » depuis la dernière version. Une unité publiable est un commit sur la branche avec l'un des préfixes suivants : `feat` / `feat!` et `fix` / `fix!`. <br /><br />

La première Release que créer release-please automatiquement est la version : 1.0.0 <br />
Pour créer une Pre-Release faire un commit vide, par exemple si on'ai à la version 1.0.0, on peut faire :

```bash
git commit --allow-empty -m "chore: release 1.1.0-rc.0" -m "Release-As: 1.1.0-rc.0"
```

<br /><br /><br /><br />

## 🚀 Conventions de Commit

Nous utilisons les conventions de commit pour maintenir une cohérence dans l'historique du code et faciliter le versionnement automatique avec release-please. Voici les types de commits que nous utilisons, ainsi que leur impact sur le versionnage :

- feat : Introduction d'une nouvelle fonctionnalité pour l'utilisateur. Entraîne une augmentation de la version mineure (par exemple, de 1.0.0 à 1.1.0).

- feat! : Introduction d'une nouvelle fonctionnalité avec des modifications incompatibles avec les versions antérieures (breaking changes). Entraîne une augmentation de la version majeure (par exemple, de 1.0.0 à 2.0.0).

- fix : Correction d'un bug pour l'utilisateur. Entraîne une augmentation de la version patch (par exemple, de 1.0.0 à 1.0.1).

- fix! : Correction d'un bug avec des modifications incompatibles avec les versions antérieures (breaking changes). Entraîne une augmentation de la version majeure.

- docs : Changements concernant uniquement la documentation. N'affecte pas la version.

- style : Changements qui n'affectent pas le sens du code (espaces blancs, mise en forme, etc.). N'affecte pas la version.

- refactor : Modifications du code qui n'apportent ni nouvelle fonctionnalité ni correction de bug. N'affecte pas la version.

- perf : Changements de code qui améliorent les performances. Peut entraîner une augmentation de la version mineure.

- test : Ajout ou correction de tests. N'affecte pas la version.

- chore : Changements qui ne modifient ni les fichiers source ni les tests (par exemple, mise à jour des dépendances). N'affecte pas la version.

- ci : Changements dans les fichiers de configuration et les scripts d'intégration continue (par exemple, GitHub Actions). N'affecte pas la version.

- build : Changements qui affectent le système de build ou les dépendances externes (par exemple, npm, Docker). N'affecte pas la version.

- revert : Annulation d'un commit précédent. N'affecte pas la version.

Pour indiquer qu'un commit introduit des modifications incompatibles avec les versions antérieures (breaking changes), ajoutez un ! après le type de commit, par exemple feat! ou fix!.

Pour plus de détails sur les conventions de commit, consultez : [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

<br /><br /><br /><br />

## 📚 Domains of different environments

- Production : https://test.crzcommon.com
- Staging : https://staging.test.crzcommon.com
- Development-Remote : https://dev.test.crzcommon.com

<br /><br /><br /><br />

## ⚙️Desktop - Setup Environment Development - Windows

1. Download and Install Microsoft Visual Studio 2022 (MSVC >= v143 and Windows SDK >= 10): https://visualstudio.microsoft.com/fr/vs/
2. Download and Install WebView2 (if windows < 10) : https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section
3. Download and Install Rust version >= 1.81.0 : https://www.rust-lang.org/tools/install
4. Spécifiquement pour build du ARM64 il faut installer LLVM et ajouté au PATH : https://github.com/llvm/llvm-project/releases
5. Install NodeJS latest LTS for Nuxt/Tauri :

```bash
# nvm
# nvm install : https://github.com/coreybutler/nvm-windows/releases
# Install Node.js latest LTS
nvm install lts && nvm use lts
```

6. Install dependencies for Nuxt.js/Tauri

```bash
 # npm
 # Install dependencies
 npm install
```

7. Install targets rust for build/compile Tauri :

```bash
npm run desktop:install:target:windows
```

8. Il y a toujours une chaine d'outils qui est utilisé par défault, c'est celui qui est choisi lors de la compilation

```bash
# Pour connaitre la chaine d'outils actuellement utilisé :
rustup default

# Pour changer la chaine d'outils par défault utilisé, exemples :
rustup default stable-x86_64-pc-windows-msvc # Windows x64
rustup default stable-i686-pc-windows-msvc # Windows x86
rustup default stable-aarch64-pc-windows-msvc # Windows arm64
```

<br />

## ⚙️ Desktop - Setup Environment Development - macOS

1. Setup Command Line Tools :

```bash
xcode-select --install
```

2. Download and Install Rust version >= 1.81.0 :

```bash
#curl
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

3. Install NodeJS LTS latest for Nuxt/Tauri :

```bash
# nvm
# nvm install : https://github.com/coreybutler/nvm-windows/releases
# Install Node.js latest LTS
nvm install lts && nvm use lts
```

4. Install dependencies for Nuxt/Tauri

```bash
 # npm
 # Install dependencies
 npm install
```

5. Install targets rust for build/compile Tauri :

```bash
npm run desktop:install:target:macos
```

6. Il y a toujours une chaine d'outils qui est utilisé par défault, c'est celui qui est choisi lors de la compilation

```bash
# Pour connaitre la chaine d'outils actuellement utilisé :
rustup default

# Pour changer la chaine d'outils par défault utilisé, exemples :
rustup default stable-x86_64-apple-darwin       # macOS Intel x64
rustup default stable-aarch64-unknown-linux-gnu # macOS Apple Silicon arm64
```

<br />

## ⚙️ Desktop - Setup Environment Development - Linux

1. Dépendances système (Debian / Ubuntu) :

```bash
sudo apt update
sudo apt install -y libwebkit2gtk-4.1-dev \
  build-essential \
  curl \
  wget \
  file \
  libxdo-dev \
  libssl-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev \
  fuse # for .AppImage
```

2. Install Rust version >= 1.81.0 :

```bash
#curl
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

3. Install NodeJS latest LTS for Nuxt/Tauri :

```bash
# nvm
# nvm install : https://github.com/coreybutler/nvm-windows/releases
# Install Node.js latest LTS
 nvm install lts && nvm use lts
```

4. Install dependencies for Nuxt/Tauri

```bash
 # npm
 # Install dependencies
 npm install
```

5. Install targets rust for build/compile Tauri :

```bash
npm run desktop:install:target:linux
```

6. Il y a toujours une chaine d'outils qui est utilisé par défault, c'est celui qui est choisi lors de la compilation

```bash
# Pour connaitre la chaine d'outils actuellement utilisé :
rustup default

# Pour changer la chaine d'outils par défault utilisé, exemples :
rustup default stable-x86_64-unknown-linux-gnu  # Linux x64
rustup default stable-i686-unknown-linux-gnu	   # Linux x86
rustup default stable-aarch64-unknown-linux-gnu # Linux arm64
```

<br /><br />

## ⚙️ Web - Setup Environment Development
1. Steps by Platform :
```bash
# Windows :
1. Requirements : Windows >= 10
2. Download and Install WSL2 : https://learn.microsoft.com/fr-fr/windows/wsl/install
3. Download and Install Docker Desktop : https://docs.docker.com/desktop/install/windows-install/

# macOS :
1. Requirements : macOS Intel x86_64 or macOS Apple Silicon arm64
2. Requirements (2) : macOS 11.0 (Big Sur)
2. Download and Install Docker Desktop : https://docs.docker.com/desktop/install/mac-install/

# Linux (Ubuntu / Debian) :
1. Requirements : Ubuntu >= 20.04 or Debian >= 10
2. Download and Install Docker (Ubuntu) : https://docs.docker.com/engine/install/ubuntu/
3. Download and Install Docker (Debian) : https://docs.docker.com/engine/install/debian/
```

<br /><br />

## ⚙️ Mobile - Setup Environment Development
### iOS 
1. Download and Install `Xcode`
2. Download and Install `Xcode Command Line Tools`
```bash
xcode-select --install
```
3. Download and Install `Homebrew`
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
4. Download and Install `Cocoapods`
```bash
brew install cocoapods
```
### Android
1. Download and Install `Android Studio` >= 2024.2.1 : https://developer.android.com/studio?hl=fr
2. Configure SDK Android :
   1. Ouvrir Android Studio.
   2. Dans `Android Studio`, cliquez en haut sur `Tools` dans le menu, puis sur `SDK Manager`.
   3. Une fenetre s'ouvre, ouvrer l'onglet `Languages & Frameworks` puis cliquer sur `Android SDK`.
   4. Cliquer sur `SDK Platforms` et cocher les cases suivantes :
      - **Android API 34** :
         - `Android SDK Platform 34`
         - `Sources for Android 34`
         - `Google APIs Intel x86 Atom System Image`
         - `Google APIs Play Intel x86 Atom System Image`
   5. Cliquer ensuite sur `SDK Tools` et cocher les cases suivantes :
      - **Android SDK Build-Tools 35**
         - `Android SDK Build-Tools 34`
      - **NDK (Side by side)**
         - `26.3.11579264`
      - **Android SDK Command-line Tools**
         - `11.0`
      - **CMake**
         - `3.22.1`
      - `Android Emulator`
      - `Android Emulator Hypervisor Driver for AMD Processor`
      - `Android Emulator Hypervisor Driver for Intel Processor`
      - `Google USB Driver`
   6. Puis cliquer sur le boutton `Apply` en bas à droite pour installer les packages.

<br /><br /><br /><br />

## 🔄 Cycle Development

1. Open Docker Desktop
2. Run command :

```bash

```

<br /><br /><br /><br />

## 🚀 Production

### ⚙️➡️ Automatic Distribution Process (CI / CD)

#### Si c'est un nouveau projet suivez les instructions :

1. Ajoutées les SECRETS_GITHUB pour :
   - DOCKER_HUB_USERNAME
   - DOCKER_HUB_ACCESS_TOKEN
   - KUBECONFIG
   - PAT (crée un nouveau token si besoin sur le site de github puis dans le menu du "Profil" puis -> "Settings" -> "Developper Settings' -> 'Personnal Access Tokens' -> Tokens (classic))
