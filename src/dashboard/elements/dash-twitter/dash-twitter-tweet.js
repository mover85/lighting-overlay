import { PolymerElement, html } from '@polymer/polymer';

(function () {
	'use strict';

	const tweet = nodecg.Replicant('tweet');

	class DashTwitterTweet extends PolymerElement {
		static get is() {
			return 'dash-twitter-tweet';
		}

		static get properties() {
			return {
				profileUrl: {
					type: String,
					computed: 'computeProfileUrl(screenName)'
				},
				tweetUrl: {
					type: String,
					computed: 'computeTweetUrl(profileUrl, id)'
				},
				images: Array,
				screenName: String,
				name: String,
				avatarUrl: String,
				createdAt: String
			};
		}

		computeProfileUrl(screenName) {
			return `https://twitter.com/${screenName}`;
		}

		computeTweetUrl(profileUrl, id) {
			return `${profileUrl}/status/${id}`;
		}

		computePhotoOrPhotos(numPhotos) {
			return numPhotos > 1 ? 'photos' : 'photo';
		}

		computeIndexPlusOne(index) {
			return index + 1;
		}

		ready() {
			super.ready();

			tweet.on('change', newVal => {
				if (typeof newVal !== 'object') {
					return;
				}

				this.avatarUrl = newVal.avatarUrl;
				this.name = newVal.name;
				this.screenName = newVal.screenName;
				this.images = newVal.images;
				this.id = newVal.id;
				this.createdAt = newVal.createdAt;
				this.$.body.innerHTML = newVal.body;
			});
		}

		static get template() {
			return html`
			<style>
			:host {
				@apply --layout-vertical;
				margin-bottom: 10px;
				margin-top: 16px;
				position: relative;
			}

			#tweetWrapper {
				@apply --layout-horizontal;
				position: relative;
			}

			#tweet {
				@apply --layout-flex;
				@apply --layout-vertical;
				margin-left: 58px;
			}

			#avatar {
				position: absolute;
				top: 0;
				left: 0;
				width: 48px;
				height: 48px;
				border-radius: 3px;
				margin-top: 5px;
			}

			#profileLink {
				word-break: break-word;
				word-wrap: break-word;
				display: block;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			#profileLink:hover {
				text-decoration: none;
			}

			#profileLink:hover #name {
				color: #2b7bb9;
				text-decoration: underline;
			}

			#name {
				color: black;
				font-weight: bold;
				font-size: 16px;
			}

			#screenName {
				color: #888;
				font-size: 14px;
			}

			#body {
				height: 100px;
				overflow-y: auto;
			}

			#media {
				position: absolute;
				bottom: 4px;
				text-align: center;
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: baseline;
			}

			#media a {
				font-size: 16px;
				display: inline-block;
				margin-bottom: -6px;
			}

			a {
				text-transform: none;
			}

			.link {
				color: #3FC1F1;
			}

			.link.orange {
				color: #F47425;
			}

			img.emoji {
				height: 1em;
				width: 1em;
				margin: 0 .05em 0 .1em;
				vertical-align: -0.1em;
			}
		</style>

		<div id="tweetWrapper">
			<div id="tweet">
				<header>
					<a id="profileLink" href="[[profileUrl]]" target="_blank">
						<iron-image id="avatar" src="[[avatarUrl]]" sizing="contain" fade></iron-image>
						<span id="name">[[name]]</span>
						<span id="screenName">@[[screenName]]</span>
					</a>
				</header>

				<div id="body"></div>
			</div>
		</div>

		<template is="dom-if" if="[[images.length]]">
			<div id="media">
				<b>Tweet has [[images.length]] [[computePhotoOrPhotos(images.length)]]:&nbsp;</b>
				<template is="dom-repeat" items="[[images]]" as="image">
					<a class="imageLink" href="[[image]]" target="_blank">[[computeIndexPlusOne(index)]]</a>
					&nbsp;
				</template>
			</div>
		</template>
			`;
		}
	}

	customElements.define(DashTwitterTweet.is, DashTwitterTweet);
})();
