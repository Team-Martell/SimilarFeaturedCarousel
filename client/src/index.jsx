
const {React} = window;

const {ReactDOM} = window;
import Module from './Module.jsx';
import request from './request.js'


// request.getAllData(1, (data) => {

//     ReactDOM.render(
//         <Module
//             moreToConsider={data[0]}
//             similar={data[1]}
//             featured={data[2]}
//         />,
//     document.getElementById('app'));
// })

ReactDOM.render(<Module />, document.getElementById('carousel'));
