import { ReactComponent as Min } from '../assets/icons/minimize-2.svg';
import { ReactComponent as Max } from '../assets/icons/maximize.svg';
import { ReactComponent as Close } from '../assets/icons/x-square.svg';
const { ipcRenderer } = window.require('electron');

const Titlebar = () => {
  const minimizeWindow = () => {
    ipcRenderer.send('minimize-window');
  };

  const maximizeWindow = () => {
    ipcRenderer.send('maximize-window');
  };

  const closeWindow = () => {
    ipcRenderer.send('close-window');
  };

  return (
    <div className="titlebar">
      <img src="./favicon-32x32.png" alt="logo" className="logo" />
      {/* add text logo here */}
      <p className="titlebar-heading">Gotham City</p>
      <span className="titleBar-button">
        <button id="minimize" onClick={minimizeWindow}>
          <Min stroke="#004657" width={18} height={18} />
        </button>
        <button id="maximize" onClick={maximizeWindow}>
          <Max stroke="#004657" width={18} height={18} />
        </button>
        <button id="quit" onClick={closeWindow}>
          <Close stroke="#004657" width={18} height={18} />
        </button>
      </span>
    </div>
  );
};

export default Titlebar;
