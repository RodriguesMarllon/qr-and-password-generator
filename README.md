# 🔑📱 QR Code and Password Generator  

[![Node.js](https://img.shields.io/badge/Node.js-v24.6.0-green)](https://nodejs.org/) 
[![GitHub stars](https://img.shields.io/github/stars/RodriguesMarllon/qr-and-password-generator?style=social)](https://github.com/RodriguesMarllon/qr-and-password-generator/stargazers)

## 💻 About the Project  
This project allows you to quickly generate **QR Codes** and **Passwords** directly from the terminal.  

## 📚 Stack  
Built with **Node.js** and the following dependencies:  
- **Node.js**: v24.6.0  
- **Chalk**: 5.6.0  
- **prompt**: 1.3.0  
- **qrcode-terminal**: 0.12.0  

## 🚀 How to Run  

1. Clone the repository:  
   ```bash
   git clone https://github.com/RodriguesMarllon/qr-and-password-generator.git
   cd qr-and-password-generator
   ```  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Configure your environment variables in a **.env** file:  
   ```env
   # Enable or disable uppercase letters in password
   UPPERCASE_LETTERS=false

   # Enable or disable lowercase letters in password
   LOWERCASE_LETTER=false

   # Enable or disable numbers in password
   NUMBERS=true

   # Enable or disable special characters in password
   SPECIAL_CHARACTERS=true

   # Password length
   PASSWORD_LENGTH=12
   ```  
4. Start the project:  
   ```bash
   npm start
   ```  

You’ll be able to choose between generating a **QR Code** or a **Password**.  

## 📸 Example  

QR Code in the terminal:  
```
█████████████████████████████
████ ▄▄▄▄▄ █▀▄▀█ ▄▄▄▄▄ █████
████ █   █ █▀▄█▄█ █   █ █████
████ █▄▄▄█ █▀▀▄█ █▄▄▄█ █████
████▄▄▄▄▄▄▄█▄█▄█▄▄▄▄▄▄▄█████
█████████████████████████████
```

## 🔧 Password Generation Examples  

### Example 1 — Numbers only  
```env
UPPERCASE_LETTERS=false
LOWERCASE_LETTER=false
NUMBERS=true
SPECIAL_CHARACTERS=false
PASSWORD_LENGTH=8
```
**Generated Password:**  
```
84936271
```  

---

### Example 2 — Strong password with all options  
```env
UPPERCASE_LETTERS=true
LOWERCASE_LETTER=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=16
```
**Generated Password:**  
```
@a9F!zQ7r2#LmP8%
```  

---

### Example 3 — Lowercase + Numbers  
```env
UPPERCASE_LETTERS=false
LOWERCASE_LETTER=true
NUMBERS=true
SPECIAL_CHARACTERS=false
PASSWORD_LENGTH=10
```
**Generated Password:**  
```
xj29kd84mt
```  
