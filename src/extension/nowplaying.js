'use strict';

export default (nodecg) => {
	const nowPlayingPaused = nodecg.Replicant('nowPlayingPaused', {
		defaultValue: false,
		persistent: false
	});
	const nowPlayingShowing = nodecg.Replicant('nowPlayingShowing', {
		defaultValue: false,
		persistent: false
	});
	const nowPlaying = nodecg.Replicant('nowPlaying', {
		defaultValue: {},
		persistent: false
	});
	const albumart = nodecg.Replicant('assets:albumart', {
		defaultValue: [],
		persistent: false
	});

	let pulseTimeout;

	const pulse = () => {
		// Don't stack pulses
		if (nowPlayingShowing.value || nowPlayingPaused.value) {
			return;
		}

		nowPlayingShowing.value = true;

		// Hard-coded 12 second duration
		pulseTimeout = setTimeout(() => {
			nowPlayingShowing.value = false;
		}, 12 * 1000);
	};

	nodecg.listenFor('toggleNowPlaying', (isActive) => {
		if (nowPlayingPaused.value === isActive) {
			return;
		}
		
		nowPlayingPaused.value = isActive;
	});

	nodecg.listenFor('nowPlaying', (track) => {
		const imgData = albumart.value.filter(
			(value) => value.name === track.album.toLowerCase()
				.replace(' ', '_')
		);

		let artUrl = '';

		if (imgData.length) {
			artUrl = imgData[0].url;
		}

		nowPlaying.value = {
			...track,
			artUrl,
		};

		// If the graphic is already showing, end it prematurely and show the new song
		if (nowPlayingShowing.value) {
			clearTimeout(pulseTimeout);
			nowPlayingShowing.value = false;
		}

		// Show the graphic
		pulse();
	});

};
