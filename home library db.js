 //to get this to work you'll need to reate a few variables and arrays to hold all of these items 
 // check your notes and maybe do some more revision if you're going to do this in js
 // can you switch this to SQL instead to make it easier to port to Azure? check your uni notes
 // also going to need a way to search for items but that can come later on and shouldn't be part of the db, just the app 
 // don't forget to load to GitHub once this is put together
 
 var LibraryBookArray = {"id","ISBN", "genre", "publisher", "title", "author", "datePublished", "pages", "edition", "location", "status", "itemType", "itemSpec"}
 var LibraryVinylArray = {"id","Barcode#", "genre", "publisher", "title", "band", "datePublished", "runtime", "tracks", "location", "status", "itemType", "itemSpec"}
 var LibraryCDArray = {"id","Barcode#", "genre", "publisher", "title", "band", "datePublished", "runtime", "tracks", "location", "status", "itemType", "itemSpec"}
 var LibraryWIPArray = {"id", "genre", "title", "author", "dateCompleted", "pages", "edition", "location", "status", "itemType", "itemSpec"}
 var LibraryCassetteArray = {"id","Barcode#", "genre", "publisher", "title", "band", "datePublished", "runtime", "tracks", "location", "status", "itemType", "itemSpec"}
 
 
 in LibraryBookArray{
	   {
			"id": "1",
			"ISBN": "",
			"genre": "Sci-Fi",
			"publisher": "William Heinemann LTD",
			"title": "The Hitch Hiker's Guide to the Galaxy",
			"author": "Adams, Douglas",
			"datePublished": 1979,
			"pages": 596,
			"edition": "third",
			"location": "Study",
			"status": "Read",
			"itemType": "Book",
			"itemSpec": "Fiction"
       } 
	   {
			"id": "2",
			"ISBN": "",
			"genre": "Literature",
			"publisher": "Canterbury Classics",
			"title": "Aesop's Fables",
			"author": "Aesop",
			"datePublished": 2013,
			"pages": 256,
			"edition": "first",
			"location": "Study",
			"status": "Read",
			"itemType": "Book",
			"itemSpec": "Fiction" 
       }
	   {
		   "id": "3",
		   "ISBN": "",
		   "genre": "Mystery",
		   "publisher": "Fontana",
		   "title": "Destination Unknown",
		   "author": "Christie, Agatha",
		   "datePublished": 1979,
		   "pages": "",
		   "edition": "",
		   "location": "Study",
		   "status": "Read",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
	   {
		   "id": "4",
		   "ISBN": "",
		   "genre": "chick-lit",
		   "publisher": "Harper Perennial",
		   "title": "With My Body",
		   "author": "Gemmell, Nikki",
		   "datePublished": 2012,
		   "pages": "",
		   "edition": "",
		   "location": "Study",
		   "status": "Read",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "5",
		   "ISBN": "",
		   "genre": "Fantasy",
		   "publisher": "Harlequin Enterprises (Australia) Pty Ltd",
		   "title": "The Iron King: Book 1 of the Iron Fey Series",
		   "author": "Kagawa, Julie",
		   "datePublished": "",
		   "pages": "",
		   "edition": "",
		   "location": "Study",
		   "status": "Read",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "6",
		   "ISBN": "",
		   "genre": "Young Adult",
		   "publisher": "HarperCollins",
		   "title": "The Maleficent Seven, Skulduggery Pleasant",
		   "author": "Landy, Derek",
		   "datePublished": 2013,
		   "pages": "",
		   "edition": "",
		   "location": "Study",
		   "status": "Read",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "7",
		   "ISBN": "",
		   "genre": "Historical Drama",
		   "publisher": "Macmillan, UK Edition",
		   "title": "Winter of the World, book 2 of the Century Trilogy",
		   "author": "Follett, Ken",
		   "datePublished": 2013,
		   "pages": "",
		   "edition": "",
		   "location": "Study",
		   "status": "Unread",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "8",
		   "ISBN": "",
		   "genre": "Young Adult",
		   "publisher": "World Distributors Ltd",
		   "title": "The Fault In Our Stars, Film Tie-In Edition",
		   "author": "Green, John",
		   "datePublished": 1964,
		   "pages": "",
		   "edition": "",
		   "location": "Study",
		   "status": "Unread",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "9",
		   "ISBN": "",
		   "genre": "Classics, Adventure",
		   "publisher": "Mercier Press",
		   "title": "The Adventures of Huckleberry Finn",
		   "author": "Twain, Mark",
		   "datePublished": 1979,
		   "pages": "",
		   "edition": "",
		   "location": "Study",
		   "status": "Read",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "10",
		   "ISBN": "",
		   "genre": "Young Adult",
		   "publisher": "HarperCollins Children's Books",
		   "title": "Mortal Coil, Skulduggery Pleasant",
		   "author": "Landy, Derek",
		   "datePublished": 2010,
		   "pages": "",
		   "edition": "",
		   "location": "Study",
		   "status": "Unread",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "11",
		   "ISBN": "",
		   "genre": "Horror",
		   "publisher": "Coronet (Hood)",
		   "title": "IT",
		   "author": "King, Stephen",
		   "datePublished": 1987,
		   "pages": "",
		   "edition": "",
		   "location": "Study",
		   "status": "Unread",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "12",
		   "ISBN": "",
		   "genre": "Mystery",
		   "publisher": "Fontana/Collins Virago",
		   "title": "Cat Among the Pigeons",
		   "author": "Christie, Agatha",
		   "datePublished": 1987,
		   "pages": "",
		   "edition": "",
		   "location": "Study",
		   "status": "Unead",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "13",
		   "ISBN": "",
		   "genre": "Mystery",
		   "publisher": "Pan Books",
		   "title": "The Sittaford Mystery",
		   "author": "Christie, Agatha",
		   "datePublished": 1980,
		   "pages": "",
		   "edition": "",
		   "location": "Study",
		   "status": "Unread",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "14",
		   "ISBN": "",
		   "genre": "Children's",
		   "publisher": "Penguin Books Australia",
		   "title": "Pearl Barley and Charlie Parsley",
		   "author": "Blabey, Aaron",
		   "datePublished": 2013,
		   "pages": "",
		   "edition": 1,
		   "location": "Study",
		   "status": "Read",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "15",
		   "ISBN": "",
		   "genre": "Fantasy",
		   "publisher": "Doubleday Children's Books",
		   "title": "Brisingr, Book 3 of the Inheritance Cycle",
		   "author": "Paolini, Chirstopher",
		   "datePublished": 2008,
		   "pages": "",
		   "edition": "",
		   "location": "Study",
		   "status": "Unread",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "16",
		   "ISBN": "",
		   "genre": "Classics",
		   "publisher": "Random House UK",
		   "title": "Little Women and Good Wives",
		   "author": "Alcott, Louisa May",
		   "datePublished": 2008,
		   "pages": "",
		   "edition": "",
		   "location": "Study",
		   "status": "Read",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "17",
		   "ISBN": "",
		   "genre": "Classics",
		   "publisher": "Alma Classics",
		   "title": "Inferno",
		   "author": "Alighieri, Dante",
		   "datePublished": 2014,
		   "pages": 396,
		   "edition": "",
		   "location": "Study",
		   "status": "Reading",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "18",
		   "ISBN": "",
		   "genre": "Sci-Fi",
		   "publisher": "Downtown Press",
		   "title": "Horizon Storms: Saga of Seven Suns, book 3",
		   "author": "Anderson, Kevin J",
		   "datePublished": 2005,
		   "pages": 672,
		   "edition": "",
		   "location": "Study",
		   "status": "Unread",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "19",
		   "ISBN": "",
		   "genre": "Sci-Fi",
		   "publisher": "Pocket Books",
		   "title": "A Forest of Stars, Saga of Seven Suns 2",
		   "author": "Anderson, Kevin J",
		   "datePublished": 2004,
		   "pages": 752,
		   "edition": "",
		   "location": "Study",
		   "status": "Unread",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "20",
		   "ISBN": "",
		   "genre": "Adventure",
		   "publisher": "Orbit",
		   "title": "The Key To Creation, Terra Incognita 3",
		   "author": "Anderson, Kevin J",
		   "datePublished": 2012,
		   "pages": "",
		   "edition": "",
		   "location": "Study",
		   "status": "Read",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "21",
		   "ISBN": "",
		   "genre": "Adventure",
		   "publisher": "Orbit",
		   "title": "Map Of All Things, Terra Incognita 2",
		   "author": "Anderson, Kevin J",
		   "datePublished": 2011,
		   "pages": 720,
		   "edition": "",
		   "location": "Study",
		   "status": "Read",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "22",
		   "ISBN": "",
		   "genre": "Adventure",
		   "publisher": "Orbit",
		   "title": "The Edge Of The World, Terra Incognita 1",
		   "author": "Anderson, Kevin J",
		   "datePublished": 2009,
		   "pages": 608,
		   "edition": "",
		   "location": "Study",
		   "status": "Read",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "23",
		   "ISBN": "",
		   "genre": "Sci-Fi",
		   "publisher": "Earthlight",
		   "title": "Hidden Empire, Saga of Seven Suns 1",
		   "author": "Anderson, Kevin J",
		   "datePublished": 2002,
		   "pages": 688,
		   "edition": "",
		   "location": "Study",
		   "status": "Unread",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "24",
		   "ISBN": "",
		   "genre": "Sci-Fi",
		   "publisher": "Simon & Schuster",
		   "title": "The Ashes of Worlds, The Saga of Seven Suns 7",
		   "author": "Anderson, Kevin J",
		   "datePublished": 2008,
		   "pages": 684,
		   "edition": "",
		   "location": "Study",
		   "status": "Unread",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "25",
		   "ISBN": "",
		   "genre": "Sci-Fi",
		   "publisher": "Dobson Books",
		   "title": "Great Science Fiction Stories",
		   "author": "Compilation",
		   "datePublished": 1968,
		   "pages": "",
		   "edition": "",
		   "location": "Study",
		   "status": "Unread",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "26",
		   "ISBN": "",
		   "genre": "Chick-Lit",
		   "publisher": "Fourth Estate",
		   "title": "The Bride Stripped Bare",
		   "author": "Anonymous",
		   "datePublished": 2003,
		   "pages": 352,
		   "edition": "",
		   "location": "Study",
		   "status": "Read",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "27",
		   "ISBN": "",
		   "genre": "Art",
		   "publisher": "VIZ Media LLC",
		   "title": "Manga in Theory and Practice: The Craft of Creating Manga",
		   "author": "Araki, Hirohiko",
		   "datePublished": 2017,
		   "pages": 280,
		   "edition": "",
		   "location": "Study",
		   "status": "Unread",
		   "itemType": "Book",
		   "itemSpec": "Non-Fiction"
	   }
      {
		   "id": "28",
		   "ISBN": "",
		   "genre": "Dystopia",
		   "publisher": "Vintage Books USA",
		   "title": "The Handmaid's Tale",
		   "author": "Atwood, Margaret",
		   "datePublished": 2010,
		   "pages": 336,
		   "edition": "",
		   "location": "Study",
		   "status": "Read",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "29",
		   "ISBN": "",
		   "genre": "Literature",
		   "publisher": "Nan A. Talese",
		   "title": "In Other Worlds: SF and the Human Imagination",
		   "author": "Atwood, Margaret",
		   "datePublished": 2011,
		   "pages": 272,
		   "edition": "",
		   "location": "Study",
		   "status": "Unread",
		   "itemType": "Book",
		   "itemSpec": "Non-Fiction"
	   }
      {
		   "id": "30",
		   "ISBN": "",
		   "genre": "Dystopia",
		   "publisher": "Virago Press",
		   "title": "Oryx and Crake",
		   "author": "Atwood, Margaret",
		   "datePublished": 2004,
		   "pages": 436,
		   "edition": "",
		   "location": "Study",
		   "status": "Read",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "31",
		   "ISBN": "",
		   "genre": "Mystery",
		   "publisher": "Time Warner Books UK",
		   "title": "The Blind Assassin",
		   "author": "Atwood, Margaret",
		   "datePublished": 2001,
		   "pages": 656,
		   "edition": "",
		   "location": "Study",
		   "status": "Unread",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }
      {
		   "id": "32",
		   "ISBN": "",
		   "genre": "Literature",
		   "publisher": "Penguin Classics",
		   "title": "The Complete Novels of Jane Austen",
		   "author": "Austen, Jane",
		   "datePublished": 2006,
		   "pages": 1278,
		   "edition": "Deluxe Paperback",
		   "location": "Study",
		   "status": "Read",
		   "itemType": "Book",
		   "itemSpec": "Fiction"
	   }