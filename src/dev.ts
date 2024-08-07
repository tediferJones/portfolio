await Bun.build({
  entrypoints: [ 'src/index.ts' ],
  outdir: 'public/',
  minify: true,
  splitting: true,
})

Bun.spawnSync('bunx tailwindcss -i src/globals.css -o public/styles.css --minify'.split(' '))

Bun.serve({
  port: 3000,
  async fetch(req) {
    let path = new URL(req.url).pathname;
    if (path === '/') path = '/index.html';

    console.log(path)

    const file = Bun.file('public' + path);
    const exists = await file.exists()
    return new Response(
      exists ? file : 'File not found',
      exists ? {} : { status: 400 }

    )
  },
})
