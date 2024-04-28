export const metadata = {
    title: 'EngeLayer', description: 'EngeLayer',
}

export default function RootLayout({children}) {
    return (
        <html lang="en" className="font-space-grotesk">
            <body>{children}</body>
        </html>
    )
}
