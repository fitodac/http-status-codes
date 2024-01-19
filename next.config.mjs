/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	trailingSlash: true,
	crossOrigin: 'anonymous',
	basePath: '/http-status-codes',
	distDir: 'docs',
}

export default nextConfig
