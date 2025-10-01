import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Theme } from "./components/theme";

export function  App() {

  return (
     <div className="min-h-screen  transition-colors">
      <Header />
      <Theme/>
      
      <Hero />
    </div>
  )
}
