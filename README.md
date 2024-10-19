# Non-shared Secret

## Setup Instructions

### Prerequisites
- Node.js installed

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Suraf/NonSharedSecret.git
   cd NonSharedSecret
   ```
2. **Install the package dependencies**:
   ```bash
   npm i
   ```
3. **Create a `.env` file in the root directory and add the following content**:
   ```plaintext
   SECRET_KEY=yourSecretKey
   ```
4. **Run the application**:
   ```bash
   node app.js
   ```
5. **Visit the following URL in your browser to see the results**:
   ```
   localhost:3000/secret
   ```