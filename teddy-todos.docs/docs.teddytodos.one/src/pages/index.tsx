import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout title={`${siteConfig.title}`}>
            <main style={{ textAlign: "center", marginTop: "200px" }}>
                <h1>🧸 teddy is a harmless bear</h1>
                <p>
                    by <a href="https://github.com/kahleryasla">KahlerYasla</a>
                </p>
            </main>
        </Layout>
    )
}
