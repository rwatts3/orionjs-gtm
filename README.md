# Orionjs Google Tag Manager

![](https://img.shields.io/github/issues/rwatts3/orionjs-gtm.svg)![](https://img.shields.io/badge/Version-0.0.4-red.svg) ![](https://img.shields.io/badge/License-MIT-blue.svg)

Adds Google Tag Manager to Orionjs using the config settings.

```sh
$ meteor add rwatts:orionjs-gtm
```

This package adds the google tagmanager script and noscript tags to the body of every route. This ensures that the required code is always available and always the first item in the body tag.

To handle single page applications or url fragments such as `mydomain.com/#hello` follow the *Single Page Instructions* below to configure your GTM Account.

## Instructions
1. Add your `GTM Container ID` via the admin panel under the `config` tab.
2. Set the dataLayer in the admin panel under the `config` tab. Don't worry this setting is reactive so all your events will be pushed to the dataLayer you define here. If you do not define a dataLayer variable it will default to `dataLayer`
3. Head to Google Tag Manager and Create the dataLayer Variables
	- Data Layer Variable:  **virtualPageUrl**
	- Data Layer Variable: **virtualPageTitle**
4. Create a trigger with the following settings.
	- Name : Virtual Page View Trigger
	- Choose Event : Custom Event
	- Fire On : **VirtualPageView** *must be exact*
	- Filters : Event `equals` VirtualPageView
5. Create a new GA Tag
	- Product: Google Analytics
	- Tag Type : Universal Analytics
	- Configure Tag
		- Tag Type : Universal Analytics
		- Tracking ID : **UA-XXXXXXXX**
		- Track Type : Page View
		- Fields to Set
			- page : `{{virtualPageUrl}}`
			- title : `{{virtualPageTitle}}`
	- Fire On
		- More : **Virtual Page View Trigger**

## Change Log
- v0.0.2
	- Fixed nasty bug where the GTM container was duplicated upon every route. Do not use History for page views, as it reloads the container on each page view.
	- Added virtual page views directly to each route. pushes the following event to the data layer.
	- Added the ability to set the dataLayer via the config section of Orion.
- v0.0.1
	- Initial Beta Release
	- Added property to Orion Config enabling user to set GTM Container ID.

> This package was created by Orion Core Contributor Ryan Watts (rwatts)