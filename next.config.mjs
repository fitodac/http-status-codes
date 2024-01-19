/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	trailingSlash: false,
	skipTrailingSlashRedirect: true,
	distDir: 'docs',
	assetPrefix: 'https://fitodac.github.io/http-status-codes/'
}

export default nextConfig
