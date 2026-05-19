
				import createSSRHandler from './home/hendrickson/NUEVOPORFOLIO/porfolio.dev/.netlify/build/entry.mjs';
				export default createSSRHandler({"cacheOnDemandPages":false});
				export const config = {
					includedFiles: ['**/*'],
					name: 'Astro SSR',
					nodeBundler: 'none',
					generator: '@astrojs/netlify@5.5.1',
					path: '/*',
					preferStatic: true,
				};
			