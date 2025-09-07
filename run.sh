# 1. Stop dev server (Ctrl+C)
# 2. Clean everything
rm -rf node_modules package-lock.json .next

# 3. Install dependencies
npm install --legacy-peer-deps

# 4. Generate fresh Tailwind config
npx tailwindcss init -p

# 5. Start dev server
npm run dev