# Library-Of-Many-Things
A repository for a personal library app. Under development. 


--------------------------------------------------------------
#Project Brief
--------------------------------------------------------------
This project will produce a js based app that will talk to an API to pull data for books in my personal library. The app will be able to:
- display books in the collection based on an ISBN match (if no ISBN match, then we match based on year, publisher, author, genre, blurb content (selecting specific words from blurbs that are common) and title)
- display if a book has been read and if so, when (by date)
- where the book can be found in my personal collection
- have a search function. This will search by all available categories (title, author, series name, year, ISBN, publisher)
- display whether or not the book is on loan, and if so, the date it was loaned out, and who to
- scanner feature:
    - the app should be able to scan barcodes and/or QR codes via a phone camera to confirm if the book exists in my collection or not.
    - should be able to add items using this feature
- be able to remove books from the collection. This should be achievable by:
  - scanning the barcode/QR code and presenting a deletion feature
  - being able to remove manually by record
- recommendation function:
    - there will be a feature that can recommend books to me based on what I've recently read ('recency' being defined as the past three months)
    - the recommendation will be powered by:
        - selectable fields including preferred length, author, genre
        - whatever books appear in a three month period (case when has_been_read = 'Y' and date_completed between dateadd(month, -3, getdate()) and getdate() then {display} else {do not return})
        - if they match any of the filters
        - there will also be a filterless option to see all books in the past three months

--------------------------------------------------------------
#Future Goals
--------------------------------------------------------------
once the app is able to perform the basic functions outlined above, I'm hoping to expand this into:
- other media including:
    - vinyls
    - CDs
    - tapes
    - DVDs
    - videos
    - console games
    - sheet music
    - personal works (this will not be a public reference feature)
- Adding a graphical interface for stats similar to storygraph

---------------------------------------------------------------
#API Communication and Protocols
---------------------------------------------------------------
- RESTful API
- Oauth2/key matching
- either google books or tinycat depending on pricing/availability
- mainly used to match data that can be provided by a base CSV (a pre-existing library document) or through the scanner function
- match on API > push/pull/view/delete/add from original DB
- 
 
