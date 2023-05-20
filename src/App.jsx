import Hero from "./components/Hero/Hero";
import Header from "./components/header/header";
import css from './styles/app.module.scss';

const App = () => {
 
  return <div className={`bg-primary ${css.container}`}>
<Header/>
<Hero />
  </div>
};

export default App;
