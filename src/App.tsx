import ButtonLink from './components/button-link';
import Cyberse from './cyberse.png';
import './App.css';
import CommandsList from './components/commands-list';

const App = () => {
  return (
    <div style={{ backgroundColor: '#444242' }}>
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">
                Cyberse - The Discord Bot
              </h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <ButtonLink
                name={'Add To Your Server'}
                link={
                  'https://discord.com/api/oauth2/authorize?client_id=848116082861801522&permissions=8&scope=bot'
                }
              />
              <ButtonLink
                name={'Suggest New Commands'}
                link={
                  'https://github.com/BrendonLapp/Cyberse-Discord-Bot/issues'
                }
              />
              <img
                src={Cyberse}
                alt="linkuriboh"
                height="50px"
                style={{ margin: '5%' }}
              />
            </div>
          </div>
        </div>
      </header>
      <div className="page-section" id="about">
        <div className="container pb-5">
          <CommandsList />
        </div>
      </div>
    </div>
  );
};

export default App;
