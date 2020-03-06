# Unique Building Identification (UBID)

Identify the location and extent of any physical object on the surface of the Earth.

## Overview

This document is the info page for https://buildingid.github.io/.

## Usage Guides

### Drawing Tools

The **[Drawing Tools](https://buildingid.github.io/apps/drawing-tools.html)** app lets you:
draw shapes on a map;
edit and erase existing shapes; and,
import shapes from both UBID code strings and Well Known Text (WKT) vector geometry objects.

![Screenshot of "Drawing Tools" user interface](https://github.com/buildingid/buildingid.github.io/raw/master/assets/images/drawing-tools-annotated.png)

The user interface, shown above, is subdivided horizontally into 3 sections:
* Navigation bar
* Map
* Data entry form

#### Using the Navigation Bar

The left-hand side of the navigation bar links to the homepage and to the other apps/examples.

The right-hand side of the navigation bar lets you:
search by location; and,
modify the Open Location Code (OLC) grid resolution level (viz., the "code length").

##### 1) Search by Location

To search by location, type the name of the location into the "Search by Location" text input field.
The top 5 suggested locations are automatically displayed in a drop-down list.
Select a suggestion by clicking the corresponding list item.
When a list item is clicked, the map will automatically pan and zoom to the corresponding location.

##### 2) Code Length

The OLC grid resolution level is selected using the "Code Length" drop-down menu.

*Note: The term "Code Length" is derived from the OLC specification and refers to the number of alphanumeric characters in the OLC string.*

#### Using the Map

The map component is provided by [Bing Maps](https://www.bing.com/maps).
For in-depth guides, please refer to [Bing Maps Help](https://help.bing.microsoft.com/#apex/18/en-us/n2999/1).

##### 3) Street Maps

Two street map views are available:
Road view, and Aerial view.

Road view is the default map view and displays vector imagery of roads, buildings, and geography.

Aerial view overlays satellite imagery onto the map and highlights roads and major landmarks.
When in the aerial view, labels are enabled/disabled using the "Labels" slider control.

To change the street map view, use the drop-down menu in the top-right-hand corner of the map.

##### 4) Locate Me

Pan the map to your current location by clicking the "Locate me" control on the right-hand side of the map.

##### 5) Controlling Zoom and Pan

Zoom the map by scrolling or by clicking the "+" and "-" zoom controls on the right-hand side of the map.

Pan the map by dragging and dropping.

##### 6) Bing Maps Drawing Tools

The toolbar in the top-left-hand corner of the map provides the Bing Maps drawing tools:
* Draw an area on the map
* Edit an existing shape
* Erase an existing shape
* Choose color for the current shape's outline
* Choose the current shape's fill color

To draw an area on the map, click the ![polygon](https://github.com/buildingid/buildingid.github.io/raw/master/assets/images/drawing-tools-polygon.png) toolbar icon to enter drawing mode, then click the map once for each vertex of the shape.
Finally, when in drawing mode, press the `ESC` key or click the toolbar icon to save the new shape and exit drawing mode.

To edit an existing shape, click the ![edit](https://github.com/buildingid/buildingid.github.io/raw/master/assets/images/drawing-tools-edit.png) toolbar icon to enter editing mode, then click the shape that you would like to edit.
Finally, when in editing mode, press the `ESC` key or click the toolbar icon to save the changes to the existing shape and exit editing mode.

To erase an existing shape, click the ![erase](https://github.com/buildingid/buildingid.github.io/raw/master/assets/images/drawing-tools-erase.png) toolbar icon to enter erase mode, then click the shape that you would like to erase.
Finally, when in erase mode, press the `ESC` key or click the toolbar icon  to exit erase mode.

#### Using the Data Input Form

Use the data input form to add UBID code strings and Well Known Text (WKT) vector geometry objects to the map.

##### 7) Code

To add a UBID code string to the map, type the UBID code string into the "Code" text input field, then press the `ENTER` key or click the "+" button to the left of the "Code" text input field.

The UBID code string is automatically validated.
If the UBID code string is valid, then the "Code" text input field is highlighted in green color.
If the UBID code string is invalid, then the "Code" text input field is highlighted in red color.

##### 8) Well Known Text

To add a WKT vector geometry object to the map, type the WKT string into the "Well Known Text" text input field, then press the `ENTER` key or click the "+" button to the left of the "Well Known Text" text input field.

The WKT string is automatically validated.
If the WKT string is valid, then the "Well Known Text" text input field is highlighted in green color.
If the WKT string is invalid, then the "Well Known Text" text input field is highlighted in red color.
