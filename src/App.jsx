import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />

            <main
                id="home"
                className="rsp-start"
            >
                <div className="container text-center">

                    <p className="rsp-label">
                        R.S.P ENTERPRISE
                    </p>

                    <h1>
                        BUILD BEYOND
                        <br />
                        WITH TRUST
                    </h1>

                    <p className="rsp-description">
                        Quality construction materials for stronger,
                        reliable and lasting foundations.
                    </p>

                    <div className="d-flex justify-content-center gap-3 mt-4">

                        <a
                            href="#products"
                            className="btn rsp-btn-primary"
                        >
                            Explore Products
                        </a>

                        <a
                            href="#contact"
                            className="btn rsp-btn-outline"
                        >
                            Get a Quote
                        </a>

                    </div>

                </div>
            </main>
        </>
    );
}

export default App;