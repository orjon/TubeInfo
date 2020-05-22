# React Transport for London API
## Experiments with React

This application collects [Transport for London API](https://api.tfl.gov.uk/) Underground status information and displays them through a simple clickable interface.


### Statuses / Home 
Shows Underground line statuses in cards.
 - Cards are links to line information pages
![Screen shot](/src/screenshots/screenshot-status.jpg)

### Line information
Line information and list of stations served
 - Stations and their lines are all clickable

Features to add:
 - Display line information and statistics.
 - Route diagram
![Screen shot](/src/screenshots/screenshot-line.jpg)

### Station information
Station information page with upcoming expected train arrival for each line served, list of available facilites and location on map.
 - Line headers are clickable links to line information pages.
 - Interactive map is rendered with Mapbox.
![Screen shot](/src/screenshots/screenshot-station.jpg)

### Header
The header is always displayed. Clicking on the App title links to Statuses / Home.
The current local time and date are displayed top-right