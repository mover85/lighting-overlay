import nodecgApiContext from './util/nodecg-api-context';
import nowplaying from './nowplaying';

export default (nodecg) => {
  // Store a reference to this nodecg API context in a place where other libs can easily access it.
  // This must be done beforeu any other files are `require`d.
  nodecgApiContext.set(nodecg);

  nowplaying(nodecg);
};
