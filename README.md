# Authentix-NH-25

# 🎟️ Track - Non-Resellable Ticketing System

**Track** is a secure event entry system designed to prevent ticket reselling. It uses unique QR codes tied to user IDs and verifies entry by scanning tickets at the gate using a phone connected to a Raspberry Pi, which communicates with a Node.js server hosted on a laptop.

---

## 📦 Features

- ✅ QR code-based ticket verification  
- 🔒 Each ticket is linked to a unique UUID and ID verification  
- 🔁 One-time use validation with database tracking  
- 📱 Phone-based QR scanning by venue staff  
- 📡 Raspberry Pi acts as a hardware controller  
- 💻 Node.js server handles verification and validation logic  
- 💡 Physical feedback using LEDs or relays (valid/invalid)

---

## 🔧 Hardware Used

- Raspberry Pi (any model with Wi-Fi)
- SanDisk Ultra microSD UHS-I Card 32GB
- LED / Buzzer / Relay Module for feedback
- Phone for scanning QR codes
- Laptop running Node.js server (connected to same network)

---

## 📁 Folder Structure

