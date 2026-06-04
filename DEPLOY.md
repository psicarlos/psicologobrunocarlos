# Deploy na Vercel + atualização diária dos vídeos

## Visão geral

O site é um Angular estático. Os Shorts vêm do arquivo `public/assets/data/videos.json`, gerado pelo script `scripts/fetch-youtube-videos.js`.

Fluxo automático:

1. **GitHub Actions** roda todo dia e atualiza `videos.json`
2. O commit no GitHub dispara um novo **deploy na Vercel**
3. O site publicado passa a exibir os vídeos novos

## 1. GitHub

1. Envie o projeto para um repositório no GitHub
2. Em **Settings → Secrets and variables → Actions**, crie os **secrets** (aba Secrets, não Variables):
   - `YOUTUBE_API_KEY` — chave da YouTube Data API v3
   - `YOUTUBE_CHANNEL_ID` — ID do canal (`UC...`)
   - `YOUTUBE_USERNAME` — (opcional) se não usar Channel ID
   - `MAX_RESULTS` — (opcional) padrão `4`

   Se usar o ambiente **Production**, o workflow já referencia `environment: Production`. Os secrets precisam estar em **Environment secrets → Production** *ou* em **Repository secrets** (sem ambiente no workflow).
3. O workflow `.github/workflows/update-youtube-videos.yml` já está configurado:
   - **Cron:** todo dia às 06:00 (Brasília)
   - **Manual:** Actions → "Atualizar Shorts do YouTube" → **Run workflow**

**Importante:** não commite o arquivo `.env` (mantenha só os secrets no GitHub).

## 2. Vercel

1. Acesse [vercel.com](https://vercel.com) e importe o repositório do GitHub
2. A Vercel detecta o `vercel.json` com:
   - `npm run build`
   - saída em `dist/psicarlos-site/browser`
3. Cada push na branch de produção (ex.: `main`) gera um deploy automático

Não é necessário colocar a API do YouTube na Vercel — a atualização dos vídeos ocorre no GitHub Actions.

## 3. Atualização manual (opcional)

Na raiz do projeto:

```bash
node scripts/fetch-youtube-videos.js
git add public/assets/data/videos.json
git commit -m "chore: atualizar Shorts do YouTube"
git push
```

## 4. Quota da API do YouTube

A YouTube Data API tem limite diário gratuito. Uma execução por dia costuma ser suficiente para 4 Shorts. Acompanhe o uso no [Google Cloud Console](https://console.cloud.google.com/).

## 5. Troubleshooting

| Problema | Solução |
|----------|---------|
| Workflow falha na API | Confira os secrets e se a YouTube Data API v3 está ativa |
| Vercel não atualiza | Verifique se o commit do Actions chegou na branch ligada ao deploy |
| Site sem vídeos | Confirme que `public/assets/data/videos.json` existe no repositório |
| Horário do cron | Ajuste o `cron` em `update-youtube-videos.yml` (horário em UTC) |
