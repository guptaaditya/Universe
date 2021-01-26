# Getting Started with Timezone clock app

## Purpose and architecture
* This application allows users to search for different timezones basis the time zone names/regions, and see the digital clock with live time in respective timeones
* This project aims at using an xml (formatted in a certain format) as data store to search for timezones.
* The http application service running on nodejs listens to search queries with search term and searches for matching terms in Names of the timezones loaded and parsed as JSON.
* The frontend offers user an interface to search for different timezones basis the time zone names/regions which is queried from application server via http requests. No debouncing/threshold has been set so far, and thus the queries are issued on every change in search input.

## Setup:-
* This project uses nodejs in backend and Reactjs on frontend.
* After checking out the repo, one needs to run `npm install` inside of BE and FE both 
* Then run `npm start` inside of BE and FE separately to run individual services.
* To save on time, the static serve has not been setup in BE to automate and serve the builds of frontend from same http service.

##  Few items that have been left:
* Test cases
* Separating dependencies from devDependencies
* Eact designing from FIGMA, but attempted close look. Could have used material but possibly the test was aimed at testing designing skills as well.
* The scss has been written in BEM kinda model to demonstrate it.