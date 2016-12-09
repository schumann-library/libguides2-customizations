Custom code for LibGuides v2 for the Douglas D. Schumann Library 
& Information Commons at the Wentworth Institute of Technology

# What's Here?
* javascripts
* stylesheets
* templates
* widgets
* global header and footer

## javascripts
* **get-hours.js** - get and display hours from libcal API
* **searchblaster.js** - used by search-blaster widget. keeps search options menu open so user can make multiple selections
* **spectragram.js** - used by instagram widget


## stylesheets
### System level
* **global-header.css** - logo and main navigation. used on research guides and schumann library website
* **global-footer.css** - footer navigation, address, and links to social media
* **global-searchblaster.css** - styling for searchblaster widget (EBSCO discovery search box)
* **global-typography.css** - styling for fonts
* **libguides-global.css** - undo the padding set by libguides so we can use bootstrap's default

### Research Guides Group
* **research-group-style.css** - styles for research guides - mainly side nav, and content box styling

### Schumann Library Website Group
* **schumann-lib-content-boxes.css** - styles for website content boxes
* **schumann-lib-guide-menu.css** - styles for website side-nav menu
* **schumann-lib-homepage.css** - styles for website homepage - hide the title, add a background, etc. 
* **schumann-lib-instagram.css** - styles for formatting instagram-grid widget


## templates 
### Research Guides
* **research-guides.html** - regular guide pages  
* **research-homepage.html** - hompage for research guides
### Schumann Library website
* **schumann-lib-content-page.html** - regular website pages  
* **schumann-lib-homepage.html** - Library Homepage


Usage:
* See [intro to templates](http://support.springshare.com/libguides/guidetemplates) from SpringShare for more information about using templates 


## widgets
Code used in LibGuides widgets.  
usage: 
1. create a new widget asset
2. copy and paste code into the **Embed Code** field.

Note: widgets may call external javascript. 

* **hide-box-level-nav** - hide box level navigation on a per-page basis
* **hide-float-box-from-nav** - hide floating boxes from box level navigation
* **instagram-grid** - display latest instagram posts
* **live-hours-grid** - display weekly hours using libcal API
* **search-blaster** - EBSCO discovery search box 

## Global Header & Footer
used on research guides and schumann library website
* **global-header.html** - logo and main navigation. 
  * related styles - **global-header.css**
* **global-footer.html** - footer navigation, addres, and links to social media.  
  * related styles - **global-footer.css** 

