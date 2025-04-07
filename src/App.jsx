import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { Features } from "./Components/Features";
import { Team } from "./Components/Team";
import { Testimonials } from "./Components/Testimonials";
import { SignIn } from "./Components/SignIn";
import { Footer } from "./Components/Footer";
import "./index.css";

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <Team />
                <Testimonials />
                <SignIn />
            </main>
            <Footer />
        </>
    );
}

export default App;
