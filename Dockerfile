FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine AS production
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 4173
CMD ["sh", "-c", "cat > /app/dist/env.js <<EOF\nwindow.__APP_CONFIG__ = {\n  VITE_SUPABASE_URL: \"${VITE_SUPABASE_URL:-$SUPABASE_URL}\",\n  VITE_SUPABASE_ANON_KEY: \"${VITE_SUPABASE_ANON_KEY:-$SUPABASE_ANON_KEY}\",\n  SUPABASE_URL: \"${SUPABASE_URL}\",\n  SUPABASE_ANON_KEY: \"${SUPABASE_ANON_KEY}\"\n};\nEOF\nserve -s dist -l 4173"]
