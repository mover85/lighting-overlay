'use strict';

// Ours
import nodecgApiContext from './util/nodecg-api-context';
import twitter from './twitter';
import nowplaying from './nowplaying';

module.exports = (nodecg) => {
	// Store a reference to this nodecg API context in a place where other libs can easily access it.
	// This must be done before any other files are `require`d.
	nodecgApiContext.set(nodecg);

	nowplaying(nodecg);
	twitter(nodecg);
};
