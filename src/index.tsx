import ReactDOM from 'react-dom';
import 'react-chat-elements/dist/main.css'
import './index.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import Router from './routers/router';

ReactDOM.render(<Router />, document.getElementById('root'));