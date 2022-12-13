# Adding To The Navbar

## two things you will need
1. Named tab
2. List items
3. Return button

## named tab
1. for this walk through we will be assuming the name of the tab is "Archives". 
2. the included code snippet is for the tab container.
3. this code is pretty much copy and pasteable just two things need to be changed.
   1. the first thing in brackets {Archives} is the name of the tab
   2. {archives} is the name of the class for styling. keep track of this class name.
   3. Noteeee: the brackets have just been added visibilty plz delete :)
```
<li role="presentation" class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"
    role="button" aria-haspopup="true" aria-expanded="false">{Archives}<span class="caret"></span></a>

        <ul class="dropdown-menu {archives}">
            <!-- List items go here :) -->
        </ul>

</li>
```
## List item
### there are four types of list items
1. Headers
    * needs the class "dropdown-header"
    ```
    <li class="dropdown-header">Services for...</li>
    ``` 
2. Links
    * needs to be an ```<a>``` tag nested inside a ```<li>``` tag
    ```
    <li>
        <a href="//library.wit.edu/borrow-and-request/museums">Museum Passes</a>
    </li>
    ```
    
3. Dividers
    * needs the role "separator" and class "divider"
    ```
    <li role="separator" class="divider"></li>
    ```
4. Return
    * needed for mobile navigation
    * needs link the class "return-lvl"
    ```
    <li>
        <a href="#" class="return-lvl">Return</a>
    </li>
    ```

## next you need to set up the position
1. in global-header.css at the bottom of ```max-width: 811px``` add the flowing code
    ```
    .dropdown-menu.{archives}{
        transform: translate(100%, 0px) !important;
    }
    ```
2. replace the {archives} with the name if your nav tab class
3. adjust the second option on the translate to center the tab on the y axis.

## congrats! :)