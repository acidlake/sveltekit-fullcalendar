import preprocess from "svelte-preprocess";
import node from '@sveltejs/adapter-node';
import netlify from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-static';
import path from 'path';

const env = import.meta.env;

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // adapter: node({
		// 	// default options are shown
		// 	out: 'build',
		// 	precompress: false,
		// }),

        adapter: netlify(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        vite: () => ({
            resolve: {
                alias: {
                    $Assets: path.resolve('./static/assets'),
                    $Components: path.resolve('./src/lib/shared/components'),
                },
            },
        }),
	},

    preprocess: [preprocess({
        "postcss": true
    })]
};

export default config;
